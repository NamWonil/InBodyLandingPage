import HealthReport from '@/pages/healthReport/HealthReport.vue'
import InBodyTouch from '@/pages/InBodyTouch/InBodyTouch.vue'

export default {
	title: 'LB LookinBody',
	sendSuccess: '전송 완료!',
	sendError: '전송 실패!',
	en: '영어',
	ko: '한국어',
	//#region banner
	bannerTiltText1: 'Lookinbody의 A-Z를 알려드릴게요!',
	bannerTiltText2: '서비스소개서 다운로드',
	function: '기능',
	customerSupport: '고객지원',
	inbodyTouch: 'InBody Touch',
	logIn: '로그인',
	consult: '문의하기',
	freeUse: '무료로 시작하기',
	language: '한국어',
	memberManagement: '회원관리',
	healthReport: '헬스리포트',
	dashboard: '대시보드',
	serviceIntroduction: '서비스소개서',
	blog: '블로그',
	serviceLangError: '서비스 지역의 언어로 언어 설정을 맞춰주세요.',
	serviceLangConfirm: '확인',
	serviceLangCancel: '취소',
	//#endregion banner

	//#region content
	// Content1
	content1Text: `클라우드 기반 솔루션을 통해 체성분 분석부터 맞춤형 건강 상담까지, 언제 어디서나 회원의 건강 데이터를 효율적으로 관리할 수 있도록 지원합니다.`,
	// Content2
	content2Text1: `LookinBody와 함께하는
        맞춤형 건강 관리 솔루션`,
	content2Text2: `정확한 데이터와 전문적인 인사이트를 통해 건강 관리의 새로운 기준을 제시합니다. 체성분 분석부터 상담, 사후 관리까지, LookinBody가 고객의 건강 목표 달성을 돕습니다.`,
	content2ItemTitle1: 'Measurement',
	content2ItemTxt1: '체성분 측정',
	content2ItemTxt2: `InBody 장비와 LookinBody는 정밀한 체성분 분석을 통해 가치 있는 건강 인사이트와 맞춤형 권장사항을 제공합니다.`,
	content2ItemTitle2: 'Cloud integration',
	content2ItemTxt3: 'LB 클라우드 통합',
	content2ItemTxt4: `LookinBody 클라우드와 원활하게 통합하여 데이터를 저장하고 분석함으로써 효율적인 추적 및 관리를 가능하게 합니다.`,
	content2ItemTitle3: 'Consultation',
	content2ItemTxt5: '전문 상담 지원',
	content2ItemTxt6: `전문가들은 InBody의 상세한 지원을 통해 정확한 상담을 제공합니다.`,
	content2ItemTitle4: 'After care',
	content2ItemTxt7: '정기적인 사후 관리',
	content2ItemTxt8: `지속적인 사후 관리를 통해 사용자는 건강 개선을 유지하고 장기적인 건강 목표를 달성할 수 있습니다.`,
	content2: [
		{
			title: 'Measurement',
			txt1: '체성분 측정',
			txt2: `InBody 장비와 LookinBody는 정밀한 체성분 분석을 통해 가치 있는 건강 인사이트와 맞춤형 권장사항을 제공합니다.`,
			img: new URL('@/assets/images/home/img1Content2.png', import.meta.url)
				.href,
			img960: new URL(
				'@/assets/images/home/img1Content2_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/home/img1Content2_390.png',
				import.meta.url
			).href
		},
		{
			title: 'Cloud integration',
			txt1: 'LB 클라우드 통합',
			txt2: `LookinBody 클라우드와 원활하게 통합하여 데이터를 저장하고 분석함으로써 효율적인 추적 및 관리를 가능하게 합니다.`,
			img: new URL('@/assets/images/home/img2Content2.png', import.meta.url)
				.href,
			img960: new URL(
				'@/assets/images/home/img2Content2_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/home/img2Content2_390.png',
				import.meta.url
			).href
		},
		{
			title: 'Consultation',
			txt1: '전문 상담 지원',
			txt2: `전문가들은 InBody의 상세한 지원을 통해 정확한 상담을 제공합니다.`,
			img: new URL('@/assets/images/home/img3Content2.png', import.meta.url)
				.href,
			img960: new URL(
				'@/assets/images/home/img3Content2_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/home/img3Content2_390.png',
				import.meta.url
			).href
		},
		{
			title: 'After care',
			txt1: '정기적인 사후 관리',
			txt2: `지속적인 사후 관리를 통해 사용자는 건강 개선을 유지하고 장기적인 건강 목표를 달성할 수 있습니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko_390.png',
				import.meta.url
			).href
		}
	],
	// Content3
	content3Text1: '데이터 자동 연동',
	content3Text2: `입력할 필요 없이 
		자동으로 연동되는 데이터`,
	content3Text3: `클라우드를 통해 인바디 기기와 실시간으로 연동하여 회원의 건강 데이터를 자동으로 동기화하고 통합 관리합니다.`,
	// Content4
	content4Text1: '회원 관리',
	content4Text2: `회원 등록과 관리를 
		쉽고 편하게!`,
	content4Text3: `번거로운 회원 등록과 관리, 이제 간편하게 해결하세요.`,
	content4Text4: '회원관리',
	content4Img: new URL(
		'@/assets/images/home/imgContent4_ko.png',
		import.meta.url
	).href,
	content4Img390: new URL(
		'@/assets/images/home/imgContent4_ko_390.png',
		import.meta.url
	).href,

	// Content5
	content5Text1: '헬스리포트',
	content5Text2: `InBody의 모든 건강 데이터를
		한 곳에서`,
	content5Text3: `회원의 건강 데이터를 체계적으로 관리하고, 각 회원에게 맞춤형 건강 솔루션을 제공합니다.`,
	content5Img: new URL(
		'@/assets/images/home/imgContent5_ko.png',
		import.meta.url
	).href,
	content5Img390: new URL(
		'@/assets/images/home/imgContent5_ko_390.png',
		import.meta.url
	).href,
	// Content6
	content6Text1: '비즈니스 성과',
	content6Text2: `그룹별 변화 중심의
		맞춤관리`,
	content6Text3: `세분화된 맞춤 관리로 그룹별 강점을 강화하고, 변화에 맞춘 최적의 성과를 이끌어냅니다.`,
	content6Text4: '대시보드',
	content6Img: new URL(
		'@/assets/images/home/imgContent6_ko.png',
		import.meta.url
	).href,
	content6Img390: new URL(
		'@/assets/images/home/imgContent6_ko_390.png',
		import.meta.url
	).href,
	// Content7
	content7Text1: '보안',
	content7Text2: `개인정보도
	 걱정 없이`,
	content7Text3: `LookinBody는 정보보호 및 개인정보보호 관리체계에 대한 국제 표준이자 권위 있는 국제 인증을 취득했습니다.
`,

	// Content8
	content8Text1: '연동 서비스',
	content8Text2: `InBody Touch`,
	content8Text3: `검사 결과를 스스로 이해하기 힘들 때,
		터치하고 확인하는 InBody 결과 해설 무인 키오스크`,
	content8Text4: '자세히 알아보기',
	content8Img: new URL(
		'@/assets/images/home/imgContent8_ko.png',
		import.meta.url
	).href,
	content8Img390: new URL(
		'@/assets/images/home/imgContent8_ko_390.png',
		import.meta.url
	).href,
	// Content9
	content9Text1: `서비스 소개서를 통해
                    더 자세한 기능을 알아보세요`,
	content9Text2: `서비스 소개서 다운 받기`,
	content9Text3: `LookinBody`,
	content9Text4: '서비스 소개서',
	content9Text5: 'SERVICE INTRODUCTION',

	// Content10
	content10Text1: '아직도 망설여지시나요?',
	content10Text2: `LookinBody 데모를 저렴한 비용으로 체험해 보세요. 인바디 장비도 함께 지원해 드리니, 한 번 체험해 보시고 결정하세요.`,
	content10Text3: '문의하기',
	content10Text4: '무료로 시작하기',
	content10Text5: '인바디 기기를 보유하고 계시나요?',
	content10Text6: `InBody Touch 신제품으로 고객 상담을 더 효과적으로 진행해보세요! 데이터를 기반으로 맞춤형 분석과 실시간 피드백을 제공하며, 고객의 건강 목표를 명확히 제안할 수 있습니다.`,
	//#endregion Content

	//#region Content11
	content11Text1: '외부 연동 서비스',
	content11Text2: `다양한 글로벌 헬스케어 
	서비스와의 연동`,
	content11Text3: `LookinBody와 플랫폼을 연결하여 
	피트니스 여정을 개선하고 진행 상황을 쉽게 추적하세요.`,
	//#endregion Content11

	//#region Footer
	footerText1: 'LookinBody',
	footerItemTitle1: '기능',
	footerItemTitle1SubTitle1: '회원관리',
	footerItemTitle1SubTitle2: '헬스리포트',
	footerItemTitle1SubTitle3: '대시보드',
	footerItemTitle2: '고객지원',
	footerItemTitle2SubTitle1: '서비스 소개서',
	footerItemTitle3: '연동 서비스',
	footerItemTitle3SubTitle1: 'InBody Touch',
	footerText2: '(주)인바디',
	footerText3: '06106 서울시 강남구 언주로 625 인바디빌딩',
	footerText4: 'TEL',
	footerText5: '02-501-3939',
	footerText6: 'FAX',
	footerText7: '02-501-3978',
	footerText8: 'Copyright© 2022 by InBody Co., Ltd. All rights reserved.',
	footerText9: '서비스 이용약관',
	footerText10: '개인정보처리방침',
	//#endregion Footer

	//#region contact
	contactDownloadTitle: '서비스 소개서 다운로드',
	contactConsultTitle: `LookinBody에 대해
	궁금하신가요?`,
	contactDownloadText:
		'LookinBody 서비스 소개서를 통해 더 스마트한 관리 솔루션을 만나보세요. 지금 바로 다운로드하고, 최적의 성과를 위한 새로운 가능성을 확인하세요.',
	contactConsultText:
		'서비스에 대한 문의나 추가 정보가 필요하다면 언제든 편하게 연락해주세요. 담당 컨설턴트가 빠르고 친절하게 답변드리겠습니다!',
	imgDownloadTitle: new URL(
		'@/assets/images/contact/serviceDownload_ko.png',
		import.meta.url
	).href,
	imgConsultTitle: new URL(
		'@/assets/images/contact/consultation_ko.png',
		import.meta.url
	).href,
	imgConsultTitleNarrow: new URL(
		'@/assets/images/contact/consultation_390.png',
		import.meta.url
	).href,
	inputList: [
		{
			title: '사업장 이름*',
			placeholder: '인바디'
		},
		{
			title: '담당자 이름*',
			placeholder: '김바디'
		},
		{
			title: '이메일*',
			placeholder: 'inbody@inbody.com'
		},
		{
			title: '연락처*',
			placeholder: '010-1234-5678'
		}
	],
	radioTitle: 'LookinBody 도입을 계획 중이시라면, 상담을 받아보시겠어요?*',
	radioList: [
		{
			title: '네, 필요해요.',
			img: new URL('@/assets/images/contact/checkboxY.svg', import.meta.url)
				.href
		},
		{
			title: '아니요, 괜찮아요.',
			img: new URL('@/assets/images/contact/checkboxN.svg', import.meta.url)
				.href
		}
	],
	checkboxTitle: '어떤 점이 궁금하신가요?',
	textareaPlaceholder: '자세히 안내받고 싶은 내용을 입력해주세요.',
	checkboxList: [
		{
			option: '[필수] ',
			text1: '개인정보 처리방침',
			text2: ' 동의',
			img: new URL('@/assets/images/contact/checkbox.svg', import.meta.url).href
		},
		{
			option: '[선택] ',
			text1: '마케팅 정보 수신',
			text2: ' 동의',
			img: new URL('@/assets/images/contact/checkbox.svg', import.meta.url).href
		}
	],
	buttonDownloadText: '다운로드',
	buttonConsultText: '문의하기',
	emailError: '유효한 이메일 주소를 입력해주세요.',
	requiredError: '비워둘 수 없습니다.',
	subjectConsult: 'LookinBody 문의하기',
	subjectDownload: 'LookinBody 서비스 소개서 다운로드',
	//#endregion contact

	//#region healthReport
	healthReportTitle: '어려운 건강 데이터, 한 눈에!',
	healthReportText1: `쉽게 이해하고 활용할 수 있는 직관적인 분석 리포트`,
	healthReportImgContent1: new URL(
		'@/assets/images/healthReport/imgContent1_ko.png',
		import.meta.url
	).href,
	healthReportImgContent2: new URL(
		'@/assets/images/healthReport/imgContent2_ko.png',
		import.meta.url
	).href,
	healthReportImgContent2_390: new URL(
		'@/assets/images/healthReport/imgContent2_ko_390.png',
		import.meta.url
	).href,
	healthReportTitle2: '한 곳에 모이는 건강 데이터',
	healthReportText2: `다양한 건강 데이터를 한 곳에서 연결하고 관리할 수 있어, 더욱 편리하고 효율적인 건강 관리가 가능합니다.`,
	healthReportText3: `고객의 눈을 사로잡는
	 헬스리포트`,
	healthReportText4: `정확한 데이터 분석과 맞춤형 정보를 바탕으로, 고객에게 전문적이고 신뢰성 있는 상담 경험을 제공합니다.`,
	healthReportContent3: [
		{
			title: '종합 평가',
			content: `고객의 현재 건강 상태를 종합적으로 파악하고, 개선이 필요한 항목을 강조합니다.`,
			img: new URL(
				'@/assets/images/healthReport/imgContent3_1_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/healthReport/imgContent3_1_ko_960.png',
				import.meta.url
			).href
		},
		{
			title: '분석별 평가',
			content: `각 건강 지표에 대한 상세 분석을 통해, 개인 맞춤형 평가와 개선 방향을 제시합니다.`,
			img: new URL(
				'@/assets/images/healthReport/imgContent3_2_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/healthReport/imgContent3_2_ko_960.png',
				import.meta.url
			).href
		},
		{
			title: '또래 비교',
			content: `같은 성별, 연령대와 비교된 데이터를 제공하여  고객이 자신의 건강 수준을 인식하고 동기를 얻을 수 있도록 돕습니다.`,
			img: new URL(
				'@/assets/images/healthReport/imgContent3_3_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/healthReport/imgContent3_3_ko_960.png',
				import.meta.url
			).href
		},
		{
			title: '변화 모니터링',
			content: `고객이 꾸준히 건강 목표에 가까워질 수 있도록, 진행 상황을 모니터링하고 성과를 시각화합니다.`,
			img: new URL(
				'@/assets/images/healthReport/imgContent3_4_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/healthReport/imgContent3_4_ko_960.png',
				import.meta.url
			).href
		}
	],
	//#endregion healthReport

	//#region dashBoard
	dashBoardTitle: '비즈니스 운영을 더 스마트하게',
	dashBoardText1: '운영 관리 시간을 절약하고 성장의 기회를 만들어 보세요',
	dashBoardImgContent1: new URL(
		'@/assets/images/dashBoard/imgContent1_ko.png',
		import.meta.url
	).href,
	dashBoardText2: `봐야 할 데이터만 모아 체계적으로`,
	dashBoardText3: `정확한 데이터 분석과 맞춤형 정보를 바탕으로, 고객에게 전문적이고 신뢰성 있는 상담 경험을 제공합니다.`,
	dashBoardContent2: [
		{
			title: '회원 통계',
			content: `신규 회원 수, 성비, 연령비 등을 분석하여, 최적화된 프로그램 기획과 마케팅 전략 수립에 도움을 제공합니다.`,
			img: new URL(
				'@/assets/images/dashBoard/imgContent2_1_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/dashBoard/imgContent2_1_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/dashBoard/imgContent2_1_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '검사 현황',
			content: `인바디 검사 데이터를 통해 이용 현황을 파악하고, 효율적인 운영을 위한 인사이트를 얻을 수 있습니다.`,
			img: new URL(
				'@/assets/images/dashBoard/imgContent2_2_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/dashBoard/imgContent2_2_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/dashBoard/imgContent2_2_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '스마트 회원관리',
			content: `집중 관리가 필요한 회원을 자동으로 필터링하고, 맞춤형 메시지 발송까지 원스톱으로 지원합니다.`,
			img: new URL(
				'@/assets/images/dashBoard/imgContent2_3_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/dashBoard/imgContent2_3_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/dashBoard/imgContent2_3_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '랭킹',
			content: `회원 성과를 바탕으로 실시간 랭킹을 제공하여, 경쟁력을 높이고 동기 부여를 강화합니다.`,
			img: new URL(
				'@/assets/images/dashBoard/imgContent2_4_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/dashBoard/imgContent2_4_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/dashBoard/imgContent2_4_ko_390.png',
				import.meta.url
			).href
		}
	],
	dashBoardText4: `실적 분석으로 비즈니스 전략 강화`,
	dashBoardText5: `지점, 직원, 프로그램별 실적을 분석하여 개선이 필요한 부분을 진단하고,
                비즈니스 전략을 세울 수 있습니다.`,
	dashBoardContent3: [
		new URL('@/assets/images/dashBoard/imgContent3_1_ko.png', import.meta.url)
			.href,
		new URL('@/assets/images/dashBoard/imgContent3_2_ko.png', import.meta.url)
			.href
	],
	dashBoardContent3_390: [
		new URL(
			'@/assets/images/dashBoard/imgContent3_1_ko_390.png',
			import.meta.url
		).href,
		new URL(
			'@/assets/images/dashBoard/imgContent3_2_ko_390.png',
			import.meta.url
		).href
	],

	//#endregion dashBoard

	//#region memberManagement
	memberManagementTitle: '회원 관리가 쉬워집니다',
	memberManagementText1:
		'간편한 시스템으로 회원 관리의 부담을 줄이고, 생산성은 향상시켰어요.',
	memberManagementText2: '번거로운 회원 등록과 관리, 이제 간편하게 해결하세요.',
	memberManagementImgContent1: new URL(
		'@/assets/images/memberManagement/imgContent1_ko.png',
		import.meta.url
	).href,
	memberManagementContent2: [
		{
			title: '회원 일괄 등록',
			subTitle: '엑셀 업로드로 한 번에',
			content: `많은 회원을 한 번에 등록할 땐 엑셀로 일괄 추가하기 기능을 활용해 보세요.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent2_1_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent2_1_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent2_1_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '필터링',
			subTitle: '조건에 맞는 회원 찾기',
			content: `다양한 필터링 조건을 설정하여, 필요한 회원을 빠르고 정확하게 찾을 수 있습니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent2_2_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent2_2_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent2_2_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '표시항목 설정',
			subTitle: '원하는 핵심 정보만',
			content: `회원정보 테이블을 커스터마이즈하여, 필요에 맞는 핵심 정보만 확인할 수 있습니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent2_3_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent2_3_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent2_3_ko_390.png',
				import.meta.url
			).href
		}
	],

	memberManagementText3: `쉽고 간편하게
	회원과 소통하기`,
	memberManagementText4: `LookinBody 서비스 내에서 메일, 채팅, 인바디 앱 푸시 등 회원에게 손쉽게 메시지를 발송할 수 있습니다.`,
	memberManagementContent3: [
		{
			title: '인바디 결과지 전송: 맞춤형 데이터 공유',
			content: `인바디 장비로 분석된 건강 데이터 기반의 결과지를 실시간으로  제공하여 개인화된 건강 관리를 지원합니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent3_1_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent3_1_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent3_1_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '체계적인 식단 관리',
			content: `관리자가 회원이 기록한 식단을 기반으로 건강 목표 달성을 체계적으로 지원할 수 있습니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent3_2_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent3_2_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent3_2_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '설명자료: 아티클 전송',
			content: `최신 건강 정보와 전문 콘텐츠를 인바디 앱으로 공유해 회원의 이해도와 만족도를 높입니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent3_3_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent3_3_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent3_3_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '앱 푸시 알림',
			content: `클라이언트 맞춤형 프로모션 메시지를 손쉽게 발송하고, 회원들이 스마트폰에서 바로 확인할 수 있도록 지원합니다.`,
			img: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/memberManagement/imgContent3_4_ko_390.png',
				import.meta.url
			).href
		}
	],

	//#endregion memberManagement

	//#region inBodyTouch
	// inBodyTouchTitle: 'InBody Touch',
	inBodyTouchText1: '효율적인 고객상담을 위한 인바디 키오스크',
	inBodyTouchText2Red: '1억 5천 건 이상',
	inBodyTouchText2: `의 건강 데이터를 활용하여 쉽고 정확하게 고객에게 최적의 건강 상담을 제공할 수 있습니다.`,
	inBodyTouchImgContent1: new URL(
		'@/assets/images/InBodyTouch/imgContent1_ko.png',
		import.meta.url
	).href,
	inBodyTouchContent2: [
		{
			title: '디지털로 바뀌는 상담의 효율성',
			subTitle: '종이 없이 스마트한 상담으로 전환하세요',
			content: `결과지를 출력할 필요 없이, 디지털 화면에서 고객의 건강 상태와 개선이 필요한 항목을 확인하고 상담할 수 있습니다.`,
			img: new URL(
				'@/assets/images/InBodyTouch/imgContent2_1.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/InBodyTouch/imgContent2_1_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/InBodyTouch/imgContent2_1_390.png',
				import.meta.url
			).href
		},
		{
			title: '빅데이터 기반 고객 상태 분석',
			subTitle: '연령별 평균 데이터와 비교하여 상담해요',
			content: `고객과 비슷한 연령대의 데이터를 활용하여 체성분 상태를 비교하고 개선 방향을 제시할 수 있습니다.`,
			img: new URL(
				'@/assets/images/InBodyTouch/imgContent2_2_ko.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/InBodyTouch/imgContent2_2_ko_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/InBodyTouch/imgContent2_2_ko_390.png',
				import.meta.url
			).href
		},
		{
			title: '회원 일괄 등록',
			subTitle: '엑셀 업로드로 한 번에',
			content: `많은 회원을 한 번에 등록할 땐 엑셀로 일괄 추가하기 기능을 활용해 보세요.`,
			img: new URL(
				'@/assets/images/InBodyTouch/imgContent2_3.png',
				import.meta.url
			).href,
			img960: new URL(
				'@/assets/images/InBodyTouch/imgContent2_3_960.png',
				import.meta.url
			).href,
			img390: new URL(
				'@/assets/images/InBodyTouch/imgContent2_3_390.png',
				import.meta.url
			).href
		}
	],
	inBodyTouchText3: `LookinBody 연동 제품 추천`,
	inBodyTouchText4: `비즈니스 성장의 새로운 기회`,
	inBodyTouchText5: `LookinBody에 제품을 등록하면 고객의 체성분 데이터를 분석해 적합한 제품을 자동으로 추천합니다. 개인 맞춤형 제안으로 고객 만족도를 높이고, 비즈니스 기회를 확장하세요.`,
	inBodyTouchImgContent3: new URL(
		'@/assets/images/InBodyTouch/imgContent3_ko.png',
		import.meta.url
	).href,
	inBodyTouchImgContent3_960: new URL(
		'@/assets/images/InBodyTouch/imgContent3_ko_960.png',
		import.meta.url
	).href,
	inBodyTouchImgContent3_390: new URL(
		'@/assets/images/InBodyTouch/imgContent3_ko_390.png',
		import.meta.url
	).href,
	inBodyTouchText6: `실시간 랭킹과 악력 챌린지`,
	inBodyTouchText7: `즐거움과 동기부여를 한 번에`,
	inBodyTouchText8: `실시간 랭킹으로 고객에게 건강한 동기를 부여하고, 악력 챌린지로 경쟁의 즐거움을 더하세요. 목표 달성을 위한 특별한 경험을 만들어 보세요.`,
	inBodyTouchText9: `대기화면 커스텀`,
	inBodyTouchText10: `이벤트와 광고를 손쉽게 홍보하세요`,
	inBodyTouchText11: `키오스크 화면을 활용해 이벤트와 광고를 손쉽게 홍보할 수 있습니다. 이미지와 영상을 활용해 고객의 관심을 효과적으로 끌어보세요.`,
	inBodyTouchImgContent4_top: new URL(
		'@/assets/images/InBodyTouch/imgContent4_top_ko.png',
		import.meta.url
	).href,
	inBodyTouchImgContent4_top_960: new URL(
		'@/assets/images/InBodyTouch/imgContent4_top_ko_960.png',
		import.meta.url
	).href,
	inBodyTouchImgContent4_top_390: new URL(
		'@/assets/images/InBodyTouch/imgContent4_top_ko_390.png',
		import.meta.url
	).href,
	inBodyTouchImgContent4_bottom: new URL(
		'@/assets/images/InBodyTouch/imgContent4_bottom_en.png',
		import.meta.url
	).href,
	inBodyTouchImgContent4_bottom_960: new URL(
		'@/assets/images/InBodyTouch/imgContent4_bottom_en_960.png',
		import.meta.url
	).href,
	inBodyTouchImgContent4_bottom_390: new URL(
		'@/assets/images/InBodyTouch/imgContent4_bottom_en_390.png',
		import.meta.url
	).href
	//#endregion inBodyTouch
}
