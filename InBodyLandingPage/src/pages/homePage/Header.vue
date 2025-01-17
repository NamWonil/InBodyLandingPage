<template>
    <div class="banner">
        <div class="banner__wrapper">
            <!-- <div class="banner__wrapper__top">
                <div class="banner__wrapper__top__box">
                    <div class="banner__wrapper__top__box__section1">
                        <div class="banner__wrapper__top__box__section1__badges">
                            <span class="banner__wrapper__top__box__section1__badges__text">HELLO</span>
                        </div>
                        <span class="banner__wrapper__top__box__section1__text">
                            {{ t('bannerTiltText1') }}
                        </span>
                    </div>
                    <img src="@/assets/images/home/vertical-bar-small.svg" alt="Icon"
                        style="width: 0.15vw; height: auto;">
                    <div class="banner__wrapper__top__box__section2" @click="goToServiceDownload">
                        <span class="banner__wrapper__top__box__section2__text">{{ t('bannerTiltText2') }}</span>
                        <img src="@/assets/images/home/right-arrow.svg" alt="Icon" style="width: 1.02vw; height: auto;">
                    </div>
                </div>

            </div> -->
            <div class="banner__wrapper__bottom">
                <div class="banner__wrapper__bottom__box">
                    <div class="banner__wrapper__bottom__box__section1">
                        <div class="banner__wrapper__bottom__box__section1__item1" @click="goHome">
                            <img class="banner__wrapper__bottom__box__section1__item1__img"
                                src="@/assets/images/home/lookinbody.svg">
                        </div>
                        <div class=" banner__wrapper__bottom__box__section1__item2">
                            <button class="banner__wrapper__bottom__box__section1__item2__button"
                                @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave(1)">
                                <span class="banner__wrapper__bottom__box__section1__item2__button__text">{{
                                    t('function') }}</span>
                                <img src="@/assets/images/home/dropdown-arrow.svg" alt="Icon" v-if="!isHover1"
                                    style="width: 1.317vw; height: auto;">
                                <img src="@/assets/images/home/dropdown-arrow-red.svg" alt="Icon" v-else
                                    style="width: 1.317vw; height: auto;">

                                <div class="banner__wrapper__bottom__box__section1__item2__button__dropdown">
                                    <RouterLink to="/memberManagement">
                                        <p
                                            class="banner__wrapper__bottom__box__section1__item2__button__dropdown__text">
                                            {{ t('memberManagement') }}</p>
                                    </RouterLink>
                                    <RouterLink to="/healthReport">
                                        <p
                                            class="banner__wrapper__bottom__box__section1__item2__button__dropdown__text">
                                            {{ t('healthReport') }}</p>
                                    </RouterLink>
                                    <RouterLink to="/dashBoard">
                                        <p
                                            class="banner__wrapper__bottom__box__section1__item2__button__dropdown__text">
                                            {{ t('dashboard') }}</p>
                                    </RouterLink>
                                </div>
                            </button>
                            <!-- <button class="banner__wrapper__bottom__box__section1__item2__button"
                                @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave(2)">
                                <span class="banner__wrapper__bottom__box__section1__item2__button__text">{{
                                    t('customerSupport') }}</span>
                                <img src="@/assets/images/home/dropdown-arrow.svg" alt="Icon"
                                    style="width: 1.317vw; height: auto;" v-if="!isHover2">
                                <img src="@/assets/images/home/dropdown-arrow-red.svg" alt="Icon"
                                    style="width: 1.317vw; height: auto;" v-else>

                                <div
                                    class="banner__wrapper__bottom__box__section1__item2__button__dropdown h-46 second-button">
                                    <RouterLink to="">
                                        <p
                                            class="banner__wrapper__bottom__box__section1__item2__button__dropdown__text">
                                            {{ t('serviceIntroduction') }}</p>
                                    </RouterLink>
                                </div>
                            </button> -->
                            <button class="banner__wrapper__bottom__box__section1__item2__button"
                                @click="goToInBodyTouch">
                                <span class="banner__wrapper__bottom__box__section1__item2__button__text">{{
                                    t('inbodyTouch') }}</span>
                                <img src="@/assets/images/home/Specialbadges.svg" alt="Icon"
                                    style="width: 1.317vw; height: auto;">
                            </button>
                        </div>
                    </div>
                    <div class=" banner__wrapper__bottom__box__section2">
                        <div class="banner__wrapper__bottom__box__section2__item1">
                            <button class="banner__wrapper__bottom__box__section2__item1__button" @click="goToLogin">
                                <span class="banner__wrapper__bottom__box__section2__item1__button__txt">{{
                                    t('logIn') }}</span>
                            </button>
                            <img src="@/assets/images/home/vertical-bar-large.svg" alt="Icon"
                                style="width: 0.15vw; height: auto; ">

                            <div class="banner__wrapper__bottom__box__section2__item1__inner">
                                <!-- <button class="banner__wrapper__bottom__box__section2__item1__inner__button1"
                                    @click="goToConsult">
                                    <span class="banner__wrapper__bottom__box__section2__item1__inner__button1__text">{{
                                        t('consult') }}</span></button> -->
                                <button class="banner__wrapper__bottom__box__section2__item1__inner__button2"
                                    @click="goToLogin"><span
                                        class="banner__wrapper__bottom__box__section2__item1__inner__button2__text">{{
                                            t('freeUse') }}</span></button>
                            </div>
                        </div>

                        <button class="banner__wrapper__bottom__box__section2__item2">
                            <img src="@/assets/images/home/lang.svg" alt="Icon" style="width: 18px; height: auto">

                            <span class="banner__wrapper__bottom__box__section2__item2__text">{{
                                t('language') }}</span>
                            <img src="@/assets/images/home/dropdown-arrow.svg" alt="Icon"
                                style="width: 18px; height: auto">
                            <div class="banner__wrapper__bottom__box__section2__item2__dropdown" ref="scrollContainer"
                                @scroll="handleScroll">
                                <ul class="banner__wrapper__bottom__box__section2__item2__dropdown__item1"
                                    ref="listContainer">
                                    <li v-for="item in languageArray" @click.stop="changeLocale(item)"
                                        :style="{ backgroundColor: locale == item ? '#eeeff3' : 'transparent' }">{{
                                            t(item)
                                        }}</li>
                                </ul>
                                <div class="banner__wrapper__bottom__box__section2__item2__dropdown__scrollbar">
                                    <div class="banner__wrapper__bottom__box__section2__item2__dropdown__scrollbar__thumb"
                                        ref="scrollBar">
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div class="banner__wrapper__bottom__box__section2__item3" @click="openMenu">
                            <img src="@/assets/images/home/menu.svg" alt="menu">
                        </div>
                    </div>
                </div>

            </div>
            <div class="banner__wrapper__mobile menuOpen" v-if="isMenuOpen">
                <div class="banner__wrapper__mobile__box1" @click="closeMenu">
                    <img src="@/assets/images/home/cancel.svg" alt="cancel" style="width: 32px; height: auto">
                </div>
                <div class="banner__wrapper__mobile__box2">
                    <div class="banner__wrapper__mobile__box2__inner">
                        <div class="banner__wrapper__mobile__box2__inner__item1">
                            <p class="banner__wrapper__mobile__box2__inner__item1__text">{{ t('function') }}</p>
                            <div class="banner__wrapper__mobile__box2__inner__item1__list">
                                <p class="banner__wrapper__mobile__box2__inner__item1__list__item"
                                    @click="goToMemberManagement">{{ t('memberManagement') }}</p>
                                <p class="banner__wrapper__mobile__box2__inner__item1__list__item"
                                    @click="goToHealthReport">{{ t('healthReport') }}</p>
                                <p class="banner__wrapper__mobile__box2__inner__item1__list__item"
                                    @click="goToDashBoard">{{ t('dashboard') }}</p>

                            </div>
                        </div>
                        <img src="@/assets/images/home/horizontal-bar.svg" alt="Icon" style="width: 100%; height: auto">
                        <div class="banner__wrapper__mobile__box2__inner__item3">

                            <p class="banner__wrapper__mobile__box2__inner__item3__text" @click="goToInBodyTouch">{{
                                t('inbodyTouch') }}
                            </p>

                        </div>
                        <div class="banner__wrapper__mobile__box2__inner__item4">
                            <button class="banner__wrapper__mobile__box2__inner__item4__freeuse" @click="goToLogin">
                                <p>{{ t('freeUse') }}</p>
                            </button>
                            <button class="banner__wrapper__mobile__box2__inner__item4__login" @click="goToLogin">
                                <p>{{ t('logIn') }}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup name="Header">
import { useI18n } from 'vue-i18n';
import { loadLocaleMessages } from '@/locales';
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref, onMounted, inject } from 'vue';
const { t, locale, availableLocales } = useI18n();
const router = useRouter()
let isHover1 = ref(false)
let isHover2 = ref(false)
const scrollContainer = ref<HTMLElement | null>(null)
const listContainer = ref<HTMLElement | null>(null)
const scrollBar = ref<HTMLElement | null>(null)
const languageArray: string[] = availableLocales.map(locale => locale);
const isMenuOpen = ref(false)
onMounted(() => {
    console.log('onMounted', locale.value)

    const container = scrollContainer.value
    const list = listContainer.value
    const scroll = scrollBar.value

    if (container && list && scroll) {
        if (list.clientHeight > container.clientHeight) {
            console.log('list.clientHeight', list.clientHeight)
            console.log('container.clientHeight', container.clientHeight)
            console.log('scroll.clientHeight', scroll.clientHeight)
            // 计算滚动条的高度比例
            const scrollRatio = 1 - (list.clientHeight - container.clientHeight) / list.clientHeight;
            console.log('scrollRatio', scrollRatio)
            // 设置滚动条的高度
            // scroll.style.height = `${scrollRatio * scroll.clientHeight}px`;

            // 显示滚动条
            scroll.style.display = 'block';
        } else {
            scroll.style.display = 'none';
        }
    }
})
const openMenu = () => {
    isMenuOpen.value = true;
    document.documentElement.style.overflow = 'hidden';
}

const closeMenu = () => {
    isMenuOpen.value = false;
    document.documentElement.style.overflow = '';
}
const goToLogin = inject<() => void>('goToLogin')
const changeLocale = (item: string) => {
    if (item === 'ko') {
        loadLocaleMessages('ko')
    } else {
        loadLocaleMessages('en')
    }
}
const goToInBodyTouch = () => {
    router.push('/InBodyTouch')
    closeMenu()
}
const goToConsult = () => {
    router.push({
        path: '/contact',
        query: {
            type: 'consult'
        }
    })
}
const goToMemberManagement = () => {
    router.push('/memberManagement')
    closeMenu()
}
const goToHealthReport = () => {
    router.push('/healthReport')
    closeMenu()
}
const goToDashBoard = () => {
    router.push('/dashBoard')
    closeMenu()
}
const goToServiceDownload = () => {
    router.push({
        path: '/serviceDownload',
        query: {
            type: 'download'
        }
    })
}
const goHome = () => {
    router.push('/')
}
const handleMouseEnter = (index: number) => {
    console.log('index', index)
    if (index === 1) {
        isHover1.value = true
    } else {
        isHover2.value = true
    }
}
const handleMouseLeave = (index: number) => {
    if (index === 1) {
        isHover1.value = false
    } else {
        isHover2.value = false
    }
}
const handleScroll = () => {
    const container = scrollContainer.value
    const list = listContainer.value
    const scroll = scrollBar.value
    if (container && list && scroll) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        console.log('scrollTop', scrollTop)
        console.log('scrollHeight', scrollHeight)
        console.log('clientHeight', clientHeight)
        // 计算滚动条位置
        const scrollRatio = 1 - (list.clientHeight - container.clientHeight) / list.clientHeight;
        console.log('scrollRatio', scrollRatio)
        // 设置滚动条高度和位置
        if (scrollTop > 0) {
            scroll.style.transform = `translateY(${scrollTop + 9}px)`;
        } else {
            scroll.style.transform = `translateY(${scrollTop}px)`;
        }
    }
}
</script>
<style scoped lang="scss">
@use '@/assets/styles/Home/Header.scss';
</style>
