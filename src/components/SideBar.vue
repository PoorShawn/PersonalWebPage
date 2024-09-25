<script lang="ts" setup>
const activities = [
    {
        content: '初探Vue.js——组件',
        timestamp: '2024-04-15',
    },
    {
        content: '如何在Ubuntu22.04中重置MySQL密码？',
        timestamp: '2024-04-13',
    },
    {
        content: 'Python爬虫——如何使用requests库发送请求',
        timestamp: '2024-04-11',
    },
]
</script>

<template>
    <div class="SideBar">
        <el-timeline>
            <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.timestamp">
                {{ activity.content }}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<style lang="css" scoped>
    .SideBar {
        top: 500px;
        left: 10px;
        color: brown;
    }
    .el-timeline {
        margin: 30px;
        margin-top: 100px;
        margin-left: 10px;
    }
    /* .el-timeline-item {
        
    } */
</style>