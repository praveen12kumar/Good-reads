import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': '/src',
      "components": ["./src/components/*"],
      "pages": ["./src/pages/*"],
      "assets":["./src/assets"],
      "layouts": ["./src/layouts/*"],
      
      "helpers":["./src/helpers/*"],
      "routes":["./src/routes/*"],
      "configs":["./src/configs/*"]
    }
  }
})
