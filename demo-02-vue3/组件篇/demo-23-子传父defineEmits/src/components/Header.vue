<script setup>
//子组件
//defineEmits是Vue3的编译时宏函数,
//用于子组件向父组件发送自定义事件
//子传父
//定义一个名为 emits 的对象, 用于存储自定义事件的名称
const emits = defineEmits(["web", "user"])
//发送名为 web 和 user 的自定义事件
emits("web", {name: "邓瑞", url: "gpt.zukedog.cn"})

//添加用户
const userAdd = () => {
  //发送名为 user 的自定义事件
  emits("user", 10)
}
</script>

<template>
  <h3>Header</h3>

  <button @click="userAdd">添加用户</button>
</template>

<style scoped>

</style>