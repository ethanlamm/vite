<template>
    <div>{{ name }}</div>
    <!-- 1.依据相对路径引用 -->
    <img src="../assets/images/sqmid1.jfif" alt="">
    <!-- 2.依据已配置的images文件夹的别名引用 -->
    <img src="/images/sqmid2.jfif" alt="">
</template>

<script setup>
import { ref } from 'vue'
const name = ref('ethan lam')
</script>