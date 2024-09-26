<script lang="ts" setup>
import NavBar from '../NavBar.vue';

</script>
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <NavBar />
            </el-header>
            <el-container>
                <RouterView />
            </el-container>
        </el-container>
    </div>
</template>
<style lang="css" scoped>
.el-header {
    margin: 30px;
    top: 0;
    left: 0;
}
</style>