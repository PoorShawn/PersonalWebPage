## 写在前面
Vue 在之前的项目就已经接触过，这里希望可以进一步学习使用Vue。

作为前端新手，想从基础的概念和用法讲起，逐步理解和学习Vue。

## 组件


>组件，作为 Vue项目的基础组成部分，允许我们将UI界面划分为**独立的、可重用**的部分，并且对于每个组件内部的模板，逻辑和进行**封装** ，形成单文件组件（SFC）。

每个组件，都由 **模板（template）**，**逻辑（script）** 和**样式（style）** 组成。

* `<template>`，即模板，用于定义组件的 **HTML结构**，包含了组件的布局和展示逻辑。它可以包含任意合法的HTML，也可以使用 Vue 的模板语法和嵌套其他 Vue 组件。
* `<script>`，即逻辑，用于定义组件中的 **JavaScript逻辑**。它默认导出一个JS对象，该对象定义了当前组件的配置，比如：
    * `name`，定义组件的名字
    * `props`，接受父组件传递过来的数据
    * `data`，初始化组件的状态，通常是相应式属性
    * `methods`，方法的集合，可以被组件内的某些方法调用  
    * `components`，用于注册子组件
* `<style>`，用于定义组件的 **CSS样式**，设置组件的视觉表现。可以通过添加`scoped`属性（形如`<style scoped>`），限制当前样式仅对该组件生效，避免样式污染。

## Props 属性

>Props，是一种类型特殊的属性，用于**父组件向子组件传递数据**，使得子组件可以根据这些数据动态地进行改变，影响子组件显示的初始状态。

`props`可以定义被传递数据的属性，确保子组件接收到符合预期的数据：
* `type`，类型
* `default`，默认值
* `required`，是否必要

在使用`props`属性时，需要在子组件中显示地 **声明** 期望接受的`props`，例如在子组件`ToDoItem.vue`中：
```Vue
<template>
    <div>
        <label for="todo-item">{{ label }}</label>
    </div>
</template>

<script>
    export default {
        props:{
            label: {
                required: true,
                type: String
            }
        },
    };
</script>
```

同时，在父组件中，需要在子组件的标签上添加属性，来 **传递** 数据，例如在父组件`App.vue`中：
```Vue
<template>
    <to-do-item label="My ToDo List"></to-do-item>
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";

export default {
  name: 'App',
  components: {
    ToDoItem
  }
}
</script>
```

在使用`props`属性时，值得注意：
* 在子组件内部，不应该直接修改`props`的值，否则将违反Vue的单项数据流原则
* 如果需要基于 `props` 创建新的计算属性，应该使用 `computed` 属性，这样可以缓存计算结果，避免不必要的重复计算
* 当子组件的`props`的某些属性需要为`Boolean`类型时，需要使用`v-bind`语法进行绑定，否则会将`true`或`false`当作字符串来传递

## v-bind

>`v-bind`，是一种Vue中的特殊语法，用于动态地将**JavaScript表达式** 绑定到HTML元素的**属性（attribute）** 上。它等价于JavaScript中的`setAttribute`方法，但更简洁且具有Vue的响应式特性。

`v-bind`可以对于`class`、`style`或任何自定义属性（attribute）和JavaScript变量进行动态绑定。在Vue中，`v-bind`不仅可以绑定变量或字符串，针对`class` 和 `style`属性，还可以绑定对象或数组。例如：

* `<input type="checkbox" id="todo-item" v-bind:checked="isDone" />`    
这里，使用`v-bind`把`isDone`数据变量绑定到`<input>`元素上的`checked`属性。

* `<div v-bind:class="{ active: isActive }"></div>`   
这里，通过传递一个对象来动态切换`class`，让`active`这个`class`属性是否存在取决于`isActive`数据变量的真假值

当然，`v-bind`还经常被用来绑定组件的`props`，例如在子组件`ToDoItem.vue`中新增一个·、`Boolean`类型的`props`属性`done`，那么在父组件`App.vue`中，可以用`v-bind`把`done`属性和`Boolean`值进行绑定：

```Vue
<template>
    <to-do-item label="My ToDo Item" v-bind:done="true"></to-do-item>
</template>
```

在实际使用中，`v-bind:`经常被简写成`:`，两者的工作方式是相同的：

```Vue
<template>
    <to-do-item label="My ToDo Item" :done="true"></to-do-item>
</template>
```

## v-for
>`v-for`用于循环遍历数组或对象，并渲染列表。它允许我们基于数组或对象的键值对来动态生成一组DOM元素或组件。

`v-for`语法可以用来渲染列表或集合中的每一项，创建基于数据动态生成的DOM结构。例如已经有ToDoItem列表时，可以用`v-for`进行生成渲染：
```Vue
<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item
          :label="item.label" 
          :done="item.done"
          :id="item.id"></to-do-item>
      </li>
    </ul>
  </div>
</template>
```

在使用 `v-for` 时，建议为每个元素提供一个唯一的 `key` 属性，这有助于 Vue 更高效地更新 DOM。

## 参考

https://cn.vuejs.org/guide/essentials/component-basics.html

https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_componen
