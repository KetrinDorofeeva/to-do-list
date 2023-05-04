import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/to-do-list/',
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto'
    })
  ],
})
