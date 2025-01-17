import {createApp} from 'vue'
import App from './App.vue'
import i18n from './locales'
import router from './router'
import 'normalize.css'
const app = createApp(App)
// const setRootFontSize = () => {
// 	const width = document.documentElement.clientWidth
// 	let fontSize = 16
// 	fontSize = (width * 14) / 1366
// 	document.documentElement.style.fontSize = fontSize + 'px'
// }
// setRootFontSize()
// window.addEventListener('resize', setRootFontSize)
app.use(i18n)
app.use(router)
app.mount('#app')
