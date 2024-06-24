import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Patrick Binkert',
      short_name: 'Patrick Binkert',
      description: 'Patrick Binkert',
      theme_color: '#ffffff',
    },
    
    workbox: {
      globPatterns: ['**/*.{svg,png,ico,jpg,jpeg}'],
      cleanupOutdatedCaches: true,
      clientsClaim: false,
      sourcemap: true,
    },
    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})