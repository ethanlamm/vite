<template>
    <!-- 1.依据相对路径引用 -->
    <!-- <img src="../assets/images/sqmid1.jfif" alt=""> -->
    <!-- 2.依据已配置的images文件夹的别名引用 -->
    <!-- <img src="/images/sqmid2.jfif" alt=""> -->

    <div>count:{{ count }}</div>
    <div>person:{{ person.name}}--{{ person.age }}</div>
    <button @click="changeNum">changeNum</button>
    <button @click="changeInfo">changeInfo</button>
    <ul>
        <li v-for="(item,index) in list" :key="index">
            <img :src="item.pic" alt="">
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>

<script setup>
import list from '@/assets/images/pic.js'

// 配置代理后，测试接口
import axios from 'axios'
axios.get('/api/userInfo').then(data => {
    console.log(data);
})

// 配置了自动引入，则不再需要写 import {xxx} from 'vue'
const count = ref(0)
const person = reactive({
    name: 'zs',
    age:18
})
const changeNum = () => {
    count.value++
}
const changeInfo = () => {
    person.name = 'ethan lam'
    person.age = 20
    
}
</script>