import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入path
import path from 'path'

// 安装：npm i unplugin-auto-import
// 引入自动引入的包  注意 后面加'/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue']
    })
  ],
  // 服务器选项
  server: {
    port: 8080,   // 默认5173，比较难记，可更改为8080
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // vite 需要加上，vue-cli3以上默认打开
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
        // 是否重写(即不需要'/api')，取决于服务器设置的url是否包含'/api'
      }
    }
  },
  // 公共基础路径
  base: '/',    // 默认'/'，一般不需要改动
  // 环境选项
  mode: 'staging',
  // 解析选项
  resolve: {
    alias: {
      // src 别名配置
      '@': path.resolve(__dirname, './src'),

      // 可设置图片等静态资源文件夹的别名
      // 静态资源配置注意：
      // 1.设置key时，前面必须加上'/'
      // 2.设置value时，必须是字符串，不能用path.resolve处理
      '/images': '/src/assets/images'
    }
  }
})
