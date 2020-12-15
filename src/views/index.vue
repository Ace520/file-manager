<template>
  <div class="flex h-screen w-screen">
    <div class="w-64 flex-none flex flex-col border-r">
      <div
        class="h-12 flex-none flex items-center text-lg font-blod pl-2 border-b shadow"
      >
        FILE MANAGER
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