import {createRouter, createWebHistory} from 'vue-router'
import HomeContent from '@/pages/homePage/HomeContent.vue'
import HealthReport from '@/pages/healthReport/HealthReport.vue'
import DashBoard from '@/pages/dashBoard/DashBoard.vue'
import InBodyTouch from '@/pages/InBodyTouch/InBodyTouch.vue'
import MemberManagement from '@/pages/memberManagement/MemberManagement.vue'
import Contact from '@/pages/contact/Contact.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomeContent
		},
		{
			path: '/healthReport',
			component: HealthReport
		},
		{
			path: '/dashBoard',
			component: DashBoard
		},
		{
			path: '/InBodyTouch',
			component: InBodyTouch
		},
		{
			path: '/memberManagement',
			component: MemberManagement
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/serviceDownload',
			component: Contact
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return {top: 0}
	}
})
export default router
