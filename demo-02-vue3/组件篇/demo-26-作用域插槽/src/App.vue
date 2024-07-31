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
    <a href="http://gpt.zukedog.cn">zuke</a>
  </Header>

  <!-- 具名插槽 -->
  <Footer>
    <template v-slot:url>
      <a href="http://blog.zukedog.cn">网址</a>
    </template>

    <!--
      v-slot:user 简写 #user

      作用域插槽
      子组件将url和title数据传递给 name="user" 的插槽,
      父组件通过 #user="data" 来接收这些数据

      <template #user="data">
        1000 {{ data.url }} {{ data.title }}
      </template>
    -->
    <!-- 解构 -->
    <template #user="{url,title}">
      1000 {{ url }} {{ title }}
    </template>
  </Footer>

</template>

<style scoped>

</style>
