<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)

// 环境变量的获取
// vite：import.meta.env    <=>  webpackage：process.env
console.log(import.meta.env);
/**
 * import.meta.env(Object)
 *    .BASE_URL：vite.config.js  base选项
 *    .MODE：vite.config.js  mode选项
 *    .VITE_APP_BASE_API：与相应.env文件项对应
 *    .VITE_APP_BASE_URL：与相应.env文件项对应
 */
</script>

<template>
  <h1>{{  msg   }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{  count   }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
