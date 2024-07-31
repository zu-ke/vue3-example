<script setup>
import { onMounted, onUpdated, ref } from 'vue'
/*
生命周期函数是组件实例从创建到销毁过程中不同时间点自动调用的函数

挂载阶段
onBeforeMount
在组件实例即将被挂载到DOM树之前调用此时模板还未编译或渲染到DOM,通常用于执行初始化操作, 如:获取异步数据、设置初始属性值等
onMounted
在组件成功挂载到DOM并完成首次渲染后调用此时可以访问和操作DOM元素, 并执行与页面交互相关的逻辑更新阶段
onBeforeUpdate (由于响应式数据变化)
在组件更新之前即将重新渲染时调用可以根据新的参数判断是否需要进行特殊处理, 甚至可以选择阻止此次更新过程
onUpdated
在组件完成更新并重新渲染后调用可以基于新的渲染结果处理更新后的数据卸载阶段
onBeforeUnmount
在组件从DOM中销毁之前调用用于释放资源,如:清理计时器、解绑事件监听器等
onUnmounted
在组件已经从DOM中移除并销毁后调用确保组件所占用的所有资源都被正确释放错误处理
onErrorCaptured
在捕获到组件中的错误时调用用于处理错误,如:记录错误日志等
注:组件挂载的过程模板编译将组件的模板转换为JS代码渲染在模板编译后生成的JS代码渲染到页面上, 生成虚拟DOM挂载在渲染完成后将虚拟DOM挂载到真实的DOM树上,
   使其在页面上显示出来
*/

//在组件成功挂载到DOM并完成首次渲染后调用
onMounted(() => {
  console.log("onMounted")
})

//在组件更新之后调用
onUpdated(() => {
  console.log("onUpdated:",user.value)
})

const user = ref(0)
console.log("user:",user.value)
</script>

<template>
  <h3>App.vue</h3>

  {{ user }}

  <button @click="user++">添加用户</button>
</template>

<style scoped>

</style>
