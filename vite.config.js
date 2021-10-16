import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/* , 'img/logo.svg' */

// https://vitejs.dev/config/
// https://stackoverflow.com/questions/68380194/tranform-vue-config-js-to-vite-config-js-build-path
export default defineConfig({
  // base: '/leaflet-react-app/',
  base: process.env.NODE_ENV === 'production'
          ? '/leaflet-react-app/' // prod
          : '/', // dev
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      includeAssets: [
        'img/favicon.ico',
        'robots.txt',
        'icons/apple-touch-icon.png',
        'markers/pin-icon-end.png',
        'markers/pin-icon-start.png',
        'markers/pin-icon-wpt.png',
        'markers/pin-shadow.png',
        'markers/marker-icon.png',
        'markers/marker-icon-2x.png',
        'markers/marker-shadow.png'
      ],  
      manifest: {
        name: 'App Leaflet example with React js',
        short_name: 'App Leaflet React',
        description: 'App Leaflet example with React js',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
        start_url: '.',
        // scope: 'https://emarifer.github.io/test-vite/',
        display: 'standalone',
      }
    })
  ]
})