
// 注意：需要将server.js的后缀改为 .cjs ！！！！！！！！！

// 引入koa
const Koa = require('koa');
// 引入koa-router
const Router = require('koa-router');

// 创建koa应用
const app = new Koa()
// 创建路由，支持传递参数
const router = new Router()

// 调用router.routes()来组装匹配好的路由，返回一个合并好的中间件
// 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回 `405 Method Not Allowed` 或 `501 Not Implemented`
app.use(router.routes())
app.use(router.allowedMethods())

// 设置路由前缀
// router.prefix('/api')

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