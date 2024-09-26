<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { emitter, RenderFileEvent } from '../types/emitterTypes';

const markdownContent = ref('');

async function loadMarkdownFile(file: string): Promise<void> {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const markdownText = await response.text();
    markdownContent.value = markdownText;
  } catch (error) {
    console.error('Failed to load the Markdown File:', error);
  }
}

onMounted(() => {
  loadMarkdownFile('/articles/hello.md');

  emitter.on('sendRenderFile', (data: RenderFileEvent) => {
    loadMarkdownFile(data.renderFile);
  })
})

onUnmounted(() => {
  emitter.off('sendRenderFile');
})
</script>

<template>
    <v-md-preview :text="markdownContent"></v-md-preview>
</template>