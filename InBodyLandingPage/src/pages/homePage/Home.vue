<template>
    <Header />
    <RouterView :key="$route.fullPath" />
    <Footer />
    <div class="wrapper__popup" v-if="isPopup">
        <div class="wrapper__popup__box">
            <div class="wrapper__popup__box__inner1">
                <p class="wrapper__popup__box__inner1__text">{{ t('serviceLangError') }}</p>
            </div>
            <div class="wrapper__popup__box__inner2">
                <button class="wrapper__popup__box__inner2__cancle" @click="closePopup">{{ t('serviceLangCancel')
                    }}</button>
                <button class="wrapper__popup__box__inner2__confirm" @click="closePopup">{{ t('serviceLangConfirm')
                    }}</button>
            </div>
        </div>
    </div>
    <div class="container" v-if="loading">
        <div class="loading-overlay">
            <div class="loading-spinner"></div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Home">
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { ref, provide, onMounted, onUnmounted, watch } from 'vue';
const isPopup = ref(false)
const loading = ref(false)
const goToLogin = async () => {
    loading.value = true;
    console.log('loading', loading.value)
    let url: string = ''
    if (locale.value === 'ko') {
        url = 'https://kr.v2.lookinbody.com'
    } else if (locale.value === 'en') {
        url = 'https://usa.lookinbody.com'
    } else {
        url = 'https://kr.v2.lookinbody.com'
    }

    try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;

        iframe.onload = () => {
            // 加载成功，跳转
            loading.value = false;
            window.location.href = url;
            document.body.removeChild(iframe);
        };

        iframe.onerror = () => {
            isPopup.value = true;
            document.body.removeChild(iframe);
        };

        document.body.appendChild(iframe);

    } catch (error) {
        console.log('Error fetching URL:', error)
        isPopup.value = true
        loading.value = false;
    }
}
const closePopup = () => {
    isPopup.value = false
    window.location.reload()
}





provide('goToLogin', goToLogin)

</script>
<style scoped lang="scss">
@use '@/assets/styles/Home/home.scss';
</style>