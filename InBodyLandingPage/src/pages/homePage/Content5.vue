<template>
    <div class="content5 scrolling-element" ref="scrollElement">
        <div class="content5__wrapper">
            <div class="content5__wrapper__box1">
                <div class="content5__wrapper__box1__inner">
                    <button class="content5__wrapper__box1__inner__btn">{{ $t('content5Text1') }}</button>
                    <p class="content5__wrapper__box1__inner__txt">{{ $t('content5Text2') }}</p>
                </div>
                <p class="content5__wrapper__box1__txt">{{ $t('content5Text3') }}</p>
            </div>
            <div class="content5__wrapper__box2">
                <button class="content5__wrapper__box2__btn" @click="goToHealthReport">{{ $t('content5Text1')
                    }}</button>
                <img class="content5__wrapper__box2__img" src="@/assets/images/home/right-large.svg" alt="Icon"
                    style="width: 1.17vw;height: 100%;">
            </div>
            <img :src="isNarrow ? $t('content5Img390') : $t('content5Img')" alt="content5"
                class="content5__wrapper__img">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content5">
import { useRouter } from 'vue-router'
const router = useRouter()
import { onMounted, ref, inject } from 'vue';
const isNarrow = inject('isNarrow');
const scrollElement = ref(null);

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
const goToHealthReport = () => {
    router.push('/healthReport')
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content5.scss';
</style>