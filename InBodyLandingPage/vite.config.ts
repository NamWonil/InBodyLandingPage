import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import postcssPxtorem from 'postcss-pxtorem'
// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	optimizeDeps: {
		include: ['vue-i18n'] // 确保 vue-i18n 被正确优化
	},
	server: {
		host: '0.0.0.0'
	},
	base: 'InBodyLandingPage'
})
