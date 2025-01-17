import {createI18n} from 'vue-i18n'

import en from './en'
import ko from './ko'

const userLanguage: string =
	localStorage.getItem('user-language') ||
	navigator.language.split('-')[0] ||
	'en'

const i18n = createI18n({
	legacy: false, // 禁用传统模式
	globalInjection: true, // 启用全局注入
	locale: 'ko', // 设置语言
	fallbackLocale: 'en', // 添加回退语言
	messages: {ko, en}
})
document.title = i18n.global.t('title')
type Locale = 'en' | 'ko'
export const loadLocaleMessages = async (locale: Locale) => {
	try {
		if (!i18n.global.availableLocales.includes(locale)) {
			let messages
			switch (locale) {
				case 'ko':
					messages = await import('./ko')
					break
				case 'en':
					messages = await import('./en')
					break
				default:
					messages = await import('./en')
					break
			}
			i18n.global.setLocaleMessage(locale, messages.default)
		}
		console.log(typeof i18n.global.locale.value)
		i18n.global.locale.value = locale
		document.title = i18n.global.t('title')
	} catch (error) {
		console.error(`Failed to load language pack for ${locale}:`, error)
		i18n.global.locale.value = 'en'
	}
}
export default i18n
