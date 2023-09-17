<template>
  <div>home</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { getUserInfo } from '@/service';

onMounted(() => {
  const rawData = getUserInfo({}, { showLoading: true });

  const res = getUserInfo({}, { needHttpResMeta: true });
});
</script>
