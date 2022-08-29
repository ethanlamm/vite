代理配置项（proxy）

请求

```js
import axios from 'axios'
axios.get('/api/userInfo').then(data => {
    console.log(data);
})
```



情况一：服务器有路由前缀

`server.cjs` 

```js
// 有路由前缀
router.prefix('/api')

// 指定一个url匹配
router.get('/userInfo', async (ctx) => {
    ctx.body = {
        name: 'zs',
        age:18
    }
})

// 启动服务监听本地3000端口
app.listen(3000, () => {
    console.log('服务器已启动：http://localhost:3000');
})

// 即前端的请求路径应该是 http://localhost:3000/api/userInfo
```

那么，在`vite.config.js`中设置了`/api`代理，

当`axios.get('/api/userInfo')`时，`/api`=>`http://localhost:3000`；

由于后端服务器设置的请求路径应该是 `http://localhost:3000/api/userInfo`，

所以应该保留`/api`，所以不需要重写

```js
proxy: {
      '/api': {
        	target: 'http://localhost:3000',
       }
}
```



情况二：服务器无路由前缀

`server.cjs` 

```js
// 指定一个url匹配
router.get('/userInfo', async (ctx) => {
    ctx.body = {
        name: 'zs',
        age:18
    }
})

// 启动服务监听本地3000端口
app.listen(3000, () => {
    console.log('服务器已启动：http://localhost:3000');
})

// 即前端的请求路径应该是 http://localhost:3000/userInfo
```

那么，`vite.config.js`要重写`/api`，去掉`/api`

```js
proxy: {
      '/api': {
        	target: 'http://localhost:3000',
            rewrite:(path)=>path.replace(/^\/api/,'')
       }
}
```

此时，`axios.get('/api/userInfo')`请求的接口

则是`http://localhost:3000/userInfo`



总结

- proxy中的`/api`，起一个标识符的作用，表明了只要axios请求的url中包含`/api`，则会被代理至`target`
- `/api`是否重写，与服务器真正设置的url是否包含`/api`有关，是否需要`/api`相关

- 不管是否重写`/api`，在浏览器F12的网络中，请求URL始终是与`axios.get('/api/userInfo')`相对应的

![image-20220829143813046](C:\Users\Admin\AppData\Roaming\Typora\typora-user-images\image-20220829143813046.png)



- 标头中请求URL与定义的接口的url一致，与是否重写`/api`无关

- 是否重写`/api`，在浏览器F12的网络中不能表现出来