import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@'를 'src' 폴더 경로로 매핑
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})