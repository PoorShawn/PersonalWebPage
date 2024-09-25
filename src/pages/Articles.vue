<script lang="ts" setup>
    import NavBar from '../components/NavBar.vue';
    import SideBar from '../components/SideBar.vue';
    import SingleArticle from '../components/SingleArticle.vue';

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <NavBar />
                <!-- <el-page-header content="detail" @back="goBack" /> -->
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <SideBar></SideBar>
                </el-aside>
                <el-main>
                    <SingleArticle />
                </el-main>
            </el-container>
        </el-container>
    </div>
    
</template>

<style lang="css" scoped>
    .el-header {
        margin: 30px;
    }
    /* .el-aside {
        overflow: hidden;
    } */
</style>