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
	// css: {
	// 	postcss: {
	// 		plugins: [
	// 			postcssPxtorem({
	// 				rootValue: 16, // 基准值，可以根据设计稿的字体大小调整
	// 				propList: ['*'], // 转换所有属性的 px 单位
	// 				selectorBlackList: [], // 不转换的选择器，空数组表示没有排除的选择器
	// 				replace: true, // 是否替换原 px 为 rem
	// 				mediaQuery: false, // 是否转换媒体查询中的 px
	// 				minPixelValue: 2 // 小于此值的 px 不转换
	// 			})
	// 		]
	// 	}
	// },
	optimizeDeps: {
		include: ['vue-i18n'] // 确保 vue-i18n 被正确优化
	},
	server: {
		host: '0.0.0.0'
	}
})
