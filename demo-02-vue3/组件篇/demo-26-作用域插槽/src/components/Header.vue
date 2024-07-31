<script setup>

</script>

<template>
  <h3>footer.vue - 子组件</h3>

  <!-- 具名插槽 -->
  <slot name="url" />
  <slot name="user" url="blog.zukedog.cn" title="zuke" />
</template>

<style scoped>

</style>