## 问题

在Ubuntu22.04系统中，使用命令 `sudo apt update` 和 `sudo apt install mysql-server` 可以成功安装MySQL数据库。但是随之而来有一个问题：    

在安装的过程中，我并没有设置密码，使用命令 `sudo systemctl start mysql`和 `mysql -u root -p`后，无论输入什么密码，都无法正常登录。     

通过查阅多方资料，通过以下方案可以成功设置root密码。且经过尝试，如果遗忘了root密码，该方案也可以帮助重新设置其密码。

## 解决方案

### 停止MySQL服务

为了后续操作，我们需要首先停止正在运行的MySQL服务。

```
sudo systemctl stop mysql
```

### 以跳过权限表检查的方式启动Mysql服务

通常在登录 MySQL 时，MySQL 会进行一系列权限表的验证来进行用户身份认证。    

在这里，以跳过权限表检查的方式启动MySQL，这样就可以无需密码直接登录。

```
sudo mysql_safe --skip-grant-tables &
```

### 另起命令行窗口，登录 MySQL

由于已经跳过了权限表检查，现在可以直接以 root 用户身份登录 MySQL，无需密码。

```
mysql -u root
```

### 选择 mysql 数据库

登录后，需要选择 `mysql` 数据库，因为用户的账号信息存储在这个数据库中。

```
mysql> use mysql;
```

### 检查 root 用户的认证插件和密码

查询 `mysql.user` 数据表中存放的用户账号、密码和认证插件信息，方便后续操作。

```
mysql> select user, plugin, authentication_string from mysql.user;
```

### 根据情况更换用户认证插件

通过查询发现，我原有的用户认证插件是 `auth_socket` ，这意味着 MySQL 正在使用 UNIX socke t的 peer 认证方式。在这种方式下 ，MySQL 直接通过操作系统级别的身份验证来确认连接请求，而不是基于密码。而且，这种方式通常用于 localhost 上的连接，并且不需要密码。

但是，我需要使用密码进行用户认证，因此认证插件要切换成 `mysql_native_password` 或者 `caching_sha2_password`。这里使用 `caching_sha2_password` 作为认证插件。

```
mysql> update user set plugin="caching_sha2_password" where user='root';  
```

### 设置密码为空

由于我所选择的认证插件为 `caching_sha2_password` ，存储在  `mysql.user` 表中的密码是通过加密算法加密后的密码。因此，这里我先设置密码为空，等之后以 root 密码登录之后，再更换密码。

```
mysql> update user set authentication_string='' where user='root';
```

### 退出MySQL

```
EXIT;
```

### 正常启动 MySQL 服务

关闭跳过权限检查的MySQL实例，然后正常启动MySQL服务。

```
sudo systemctl stop mysql
sudo systemctl start mysql
```

### 以 root 密码认证正常登录

当mysql要求输入密码时，直接按 `enter` 键，表示密码为空。

```
mysql -u root -p
```

### 设置正式密码

现在MySQL应该以正常模式运行了，可以使用 `ALTER USER` 命令设置正式的 `caching_sha2_password` 类型的密码, 记得将命令中的 `new_password`更改为正式的密码。

```
mysql> alter user 'root'@'localhost' identified with caching_sha2_password by 'new_password';

mysql> FLUSH PRIVILEGES;
```

## 总结

整个解决方案看起来比较繁琐，一是因为在 `--skip-grant-tables` 这种跳过权限表检查的情况下，无法直接使用 `ALTER USER` 命令来更换 root 的密码；二是因为我自身想要使用 `caching_sha2_password` 作为认证插件，所以无法直接用 `update`的方式来显示的方式来更改密码。    

如果有更好的解决方案，欢迎交流！