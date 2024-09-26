<script lang="ts" setup>
import SideBar from '../components/SideBar.vue';
import SingleArticle from '../components/SingleArticle.vue';


</script>

<template>
    <el-aside width="200px">
        <SideBar />
    </el-aside>
    <el-main>
        <SingleArticle />
    </el-main>

</template>

<style lang="css" scoped>
/* .el-aside {
        overflow: hidden;
    } */
</style>