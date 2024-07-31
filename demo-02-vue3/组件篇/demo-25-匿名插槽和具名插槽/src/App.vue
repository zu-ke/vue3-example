<script setup>
//导入子组件
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <h3>App.vue</h3>

  <!-- <Header/> -->
  <!-- 匿名插槽 -->
  <Header>
    <a href="http://dengruicode.com">zuke</a>
  </Header>

  <!-- 具名插槽 -->
  <Footer>
    <template v-slot:url>
      <a href="http://gpt.zukedog.cn">网址</a>
    </template>

    <!-- v-slot:user 简写 #user -->
    <template #user>
      1000
    </template>
  </Footer>

</template>

<style scoped>

</style>
