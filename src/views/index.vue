<template>
  <div class="flex h-screen w-screen">
    <div class="w-64 flex-none flex flex-col border-r">
      <div class="h-12 flex items-center cursor-pointer shadow">
        <img class="h-8 mb-1 ml-2" src="../assets/logo.png" />
        <div class="ml-1">
          <span class="font-bold">GH文件管理器</span
          ><span class="text-xs ml-1">v1.0</span>
        </div>
      </div>
      <repos class="overflow-y-auto flex-1 shadow"></repos>
    </div>
    <router-view class="flex-1"></router-view>
  </div>
</template>
<script>
import Repos from "./repos.vue";

export default {
  components: { Repos },
};
</script>
<style  scoped>
</style>