<template>
    <section class="content2 scrolling-element" ref="scrollElement">
        <div class="content2__wrapper1">
            <p class="content2__wrapper1__text1">{{ t('content2Text1') }}</p>
            <p class="content2__wrapper1__text2">{{ t('content2Text2') }}</p>
        </div>
        <div class="content2__wrapper2">
            <div class="content2__wrapper2__item" v-for="item in translatedList" :key="item.title">
                <img class="content2__wrapper2__item__img"
                    :src="isNarrow ? item.img390 : isTablet ? item.img960 : item.img" :alt="item.txt1">
                <div class="content2__wrapper2__item__box" :class="{ 'minHeight': $i18n.locale === 'en' }">
                    <div class="content2__wrapper2__item__box__text-box">
                        <p class="content2__wrapper2__item__box__text-box__title">{{ item.title }}</p>
                        <p class="content2__wrapper2__item__box__text-box__text1">{{ item.txt1 }}</p>
                    </div>
                    <p class="content2__wrapper2__item__box__text2">{{ item.txt2 }}</p>
                </div>

            </div>
        </div>
    </section>
</template>
<script lang="ts" setup name="Content2">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { computed, type ComputedRef } from 'vue';
import { inject } from 'vue';
const { t } = useI18n();
const scrollElement = ref(null);
const isNarrow = inject<() => void>('isNarrow')
const isTablet = inject<() => void>('isTablet')
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
const translatedList: ComputedRef<{ title: string, txt1: string, txt2: string, img: string, img960: string, img390: string }[]> = computed(() => [
    {
        title: t('content2.0.title'),
        txt1: t('content2.0.txt1'),
        txt2: t('content2.0.txt2'),
        img: new URL('/src/assets/images/home/img1Content2.png', import.meta.url).href,
        img960: new URL('/src/assets/images/home/img1Content2_960.png', import.meta.url).href,
        img390: new URL('/src/assets/images/home/img1Content2_390.png', import.meta.url).href
    },
    {
        title: t('content2.1.title'),
        txt1: t('content2.1.txt1'),
        txt2: t('content2.1.txt2'),
        img: new URL('/src/assets/images/home/img2Content2.png', import.meta.url).href,
        img960: new URL('/src/assets/images/home/img2Content2_960.png', import.meta.url).href,
        img390: new URL('/src/assets/images/home/img2Content2_390.png', import.meta.url).href
    },
    {
        title: t('content2.2.title'),
        txt1: t('content2.2.txt1'),
        txt2: t('content2.2.txt2'),
        img: new URL('/src/assets/images/home/img3Content2.png', import.meta.url).href,
        img960: new URL('/src/assets/images/home/img3Content2_960.png', import.meta.url).href,
        img390: new URL('/src/assets/images/home/img3Content2_390.png', import.meta.url).href
    },
    {
        title: t('content2.3.title'),
        txt1: t('content2.3.txt1'),
        txt2: t('content2.3.txt2'),
        img: new URL('/src/assets/images/home/img4Content2.png', import.meta.url).href,
        img960: new URL('/src/assets/images/home/img4Content2_960.png', import.meta.url).href,
        img390: new URL('/src/assets/images/home/img4Content2_390.png', import.meta.url).href
    }
]);
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content2.scss';
</style>