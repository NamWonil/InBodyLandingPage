<template>
    <section class="content1 scrolling-element" ref="scrollElement">
        <div class="content1__wrapper">
            <div class="content1__wrapper__box1">
                <p class="content1__wrapper__box1__text1" :class="{ 'enFont': $i18n.locale === 'en' }">Health in
                    Sight,<br> Business in Flight</p>
                <p class="content1__wrapper__box1__text2">{{ $t('content1Text') }}
                </p>
            </div>
            <div class="content1__wrapper__box2">
                <button class="content1__wrapper__box2__btn1" @click="goToConsult">
                    <img src="@/assets/images/home/earPhone.svg" alt="" style="width: 20px;height: auto">
                    <span class="content1__wrapper__box2__btn1__text">{{ $t('consult') }}</span>
                </button>
                <button class="content1__wrapper__box2__btn2" @click="goToFreeUse">
                    <span class="content1__wrapper__box2__btn2__text">{{ $t('freeUse') }}</span>
                </button>
            </div>
        </div>
        <img class="content1__img" src="@/assets/images/home/imgContent1.png" alt="content1-img">
    </section>
</template>
<script lang="ts" setup name="Content1">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const router = useRouter()
const scrollElement = ref(null);
import { inject } from 'vue';
const login = inject<() => void>('goToLogin')

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {

                entry.target.classList.add('scrolling-element-visible');
                observer.unobserve(entry.target);
            } else {

                entry.target.classList.remove('scrolling-element-visible');
            }
        });
    }, {
        threshold: 0.1
    });


    if (scrollElement.value) {
        observer.observe(scrollElement.value);
    }
});
const goToConsult = () => {
    router.push({
        path: '/contact',
        query: {
            type: 'consult'
        }
    })
}
const goToFreeUse = () => {
    router.push('/freeUse');
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content1.scss';
</style>
