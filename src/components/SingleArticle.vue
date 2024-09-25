<script lang="ts" setup>
    const title: string = "# 初探Vue.js——组件";
    const preview: string = ">组件，作为 Vue项目的基础组成部分，允许我们将UI界面划分为**独立的、可重用**的部分，并且对于每个组件内部的模板，逻辑和进行**封装** ，形成单文件组件（SFC）。";
    const content: string = "`<template>`，即模板，用于定义组件的 **HTML结构**，包含了组件的布局和展示逻辑。它可以包含任意合法的HTML，也可以使用 Vue 的模板语法和嵌套其他 Vue 组件。";
    
</script>

<template>
    <v-md-preview :text="title"></v-md-preview>
    <v-md-preview :text="preview"></v-md-preview>
    <v-md-preview :text="content"></v-md-preview>
</template>