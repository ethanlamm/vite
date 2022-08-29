export default [
    {
        pic: new URL('./sqmid1.jfif', import.meta.url).href,
        name: '第1张'
    },
    {
        pic: new URL('./sqmid2.jfif', import.meta.url).href,
        name: '第2张'
    },
    {
        pic: new URL('./sqmid3.jfif', import.meta.url).href,
        name: '第3张'
    },
]
/**
 *  引入的路径，当做变量使用
 *  new URL('当前js文件相对于图片的相对路径', import.meta.url).href
 */