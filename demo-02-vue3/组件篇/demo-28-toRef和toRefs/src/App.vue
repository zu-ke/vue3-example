<script setup>
import {reactive, toRef, toRefs} from 'vue'

/*
let {name,url} = reactive({
  name:"邓瑞编程",
  url:"dengruicode.com"
})
*/
let web = reactive({
  name: "zuke",
  url: "gpt.zukedog.cn"
})

//toRefs将一个响应式对象的所有属性转换为ref对象
//let {name,url} = toRefs(web)

//toRef将一个响应式对象的某个属性转换为ref变量
let url = toRef(web, "url")

const setUrl = () => {
  console.log(url)
  url.value = "blog.zukedog.cn"
}
</script>

<template>
  {{ url }}

  <button @click="setUrl">设置网址</button>
</template>

<style scoped>

</style>
