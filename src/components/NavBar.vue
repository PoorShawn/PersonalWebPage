<script lang="ts" setup>

</script>
<template>
    <nav class="nav">
        <h1 class="logo">
            <a href="/Home">Personal Webite</a>
        </h1>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/articles">Articles</RouterLink>
            </li>
            <li>
                <RouterLink to="/tags">Tags</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 0;
        width: 100%;
        margin-left: 30px;
    }
    nav ul {
        display: flex;
        justify-content: space-evenly;
    }
    nav ul li {
        margin-right: 30px;
    }
    .logo {
        font-size: 36px;
    }
    nav a {
        margin-right: 20px;
        text-decoration: none;
        color:rgb(43, 42, 42);
        font-weight: bold;
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }
    nav ul a {
        font-size: 24px;
    }


    /* nav {
        display: flex;
        justify-content: space-around;
        background-color: blanchedalmond;
        padding: 20px;
        margin-bottom: 30px;
        width: 100%;
        top: 0;
    }

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    nav a {
        margin: 20px;
        text-decoration: none;
        color:cadetblue;
    }

    .logo {
        font-size: 36px;
    }

    nav ul a {
        font-size: 24px;
    } */

</style>