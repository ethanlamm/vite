import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 服务器选项
  server: {
    port: 8080   // 默认5173，比较难记，可更改为8080
  }
})
