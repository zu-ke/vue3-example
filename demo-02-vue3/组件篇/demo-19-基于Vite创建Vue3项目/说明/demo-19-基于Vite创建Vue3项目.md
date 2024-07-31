1.官网 https://cn.vitejs.dev

2.基于Vite创建Vu3项目:
```yaml

D:\code\vue3-example\demo-02-vue3\组件篇\demo-19-基于Vite创建Vue3项目>npm create vite@latest
Need to install the following packages:
create-vite@5.4.0
Ok to proceed? (y) y


> npx
> create-vite

√ Project name: ... demo-vite-vue3
√ Select a framework: » Vue
√ Select a variant: » JavaScript

Scaffolding project in D:\code\vue3-example\demo-02-vue3\组件篇\demo-19-基于Vite创建Vue3项目\demo-vite-vue3...

Done. Now run:

  cd demo-vite-vue3
  npm install
  npm run dev


D:\code\vue3-example\demo-02-vue3\组件篇\demo-19-基于Vite创建Vue3项目>cd demo-vite-vue3

D:\code\vue3-example\demo-02-vue3\组件篇\demo-19-基于Vite创建Vue3项目\demo-vite-vue3>npm install

added 27 packages in 9s

4 packages are looking for funding
  run `npm fund` for details

D:\code\vue3-example\demo-02-vue3\组件篇\demo-19-基于Vite创建Vue3项目\demo-vite-vue3>npm run dev

> demo-vite-vue3@0.0.0 dev
> vite


  VITE v5.3.5  ready in 307 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
3.完善：
删除文件
   src\style.css
   src\components\HelloWorld.vue
删除代码
   main.js
           import './style.css'
修改代码
   src\App.vue
           <script setup>
           </script>
           <template>
                   dengruicode.com
           </template>
           <style scoped>
           </style>
清空App.vue自带的内容