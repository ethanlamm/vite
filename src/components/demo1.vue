<template>
    <!-- 1.依据相对路径引用 -->
    <!-- <img src="../assets/images/sqmid1.jfif" alt=""> -->
    <!-- 2.依据已配置的images文件夹的别名引用 -->
    <!-- <img src="/images/sqmid2.jfif" alt=""> -->
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <img :src="item.pic" alt="">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script setup>
import list from '@/assets/images/pic.js'
</script>