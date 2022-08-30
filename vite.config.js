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
      imports:['vue']
    })
  ],
  // 服务器选项
  server: {
    port: 8080,   // 默认5173，比较难记，可更改为8080
  },

  // 公共基础路径
  // 默认'/'，为防止部署项目时发生资源路径访问错误的隐患，这里配置相对路径来避免
  base: './',

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
  },

  // 构建选项
  build: {
    minify: 'terser', // 默认为esbuild，将模式改为'terser'，terserOptions才生效
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true // 生产环境移除debugger
      }
    }
  },
})
