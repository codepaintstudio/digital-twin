import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NODE_'])
  const isProd = mode === 'production'

  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        dts: 'src/auto-imports.d.js',
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: false,
        dirs: ['src/components'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
      extensions: ['.js', '.json', '.vue'],
    },
    server: {
      port: 3666,
      open: true,
      cors: true,
      host: true,
    },
    build: {
      outDir: `dist/${env.VITE_APP_ENV || 'production'}`,
      assetsDir: 'static',
      minify: 'terser',
      emptyOutDir: true,
      sourcemap: !isProd,
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd,
          pure_funcs: isProd ? ['console.log', 'console.info'] : [],
        },
        output: {
          comments: false,
        },
      },
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('element-plus')) {
                return 'element-plus'
              }
              if (id.includes('vue') || id.includes('vue-router')) {
                return 'vue-vendor'
              }
              if (id.includes('axios')) {
                return 'axios'
              }
              // Group remaining node_modules into chunks by their first level directory name
              const match = id.match(/node_modules\/(.+?)[\/]/);
              if (match && match[1]) {
                return `vendor-${match[1]}`;
              }
            }
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'static/img/[name]-[hash][extname]';
            }
            if (/\.(ttf|woff2?|eot)$/.test(name ?? '')) {
              return 'static/fonts/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name ?? '')) {
              return 'static/css/[name]-[hash][extname]';
            }
            return 'static/[ext]/[name]-[hash][extname]';
          },
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'axios', 'element-plus'],
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
    },
  }
})