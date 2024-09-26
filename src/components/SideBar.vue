<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { emitter, RenderFileEvent } from '../types/emitterTypes';
import { Article } from '../types/articleTypes';

// const articlesList = [
//     {
//         title: '初探Vue.js——组件',
//         timestamp: '2024-04-15',
//         file: 'hello.md',
//     },
//     {
//         title: '如何在Ubuntu22.04中重置MySQL密码？',
//         timestamp: '2024-04-13',
//         file: 'hi.md',
//     },
//     {
//         title: 'Python爬虫——如何使用requests库发送请求',
//         timestamp: '2024-04-11',
//         file: 'hello.md',
//     },
// ]

const articlesList = ref<Article[]>([]);

async function loadArticlesList() {
  try {
    const response = await fetch('articles.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // 直接解析为 JSON 对象
    articlesList.value = data as Article[];
  } catch (error) {
    console.error('Failed to load the articles list:', error);
  }
}

const sendRenderFileName = (title: string) => {
    const data: RenderFileEvent = { renderFile: title };
    emitter.emit('sendRenderFile', data);
}

onMounted(() => {
    loadArticlesList();
});
</script>

<template>
    <div class="SideBar">
        <el-timeline>
            <el-timeline-item v-for="(article, index) in articlesList" :key="index" :timestamp="article.timestamp" @click="sendRenderFileName(article.file)">
                {{ article.title }}
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
    .el-timeline-item {
        cursor: pointer;
    }
</style>