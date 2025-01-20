<template>
    <div class="content11 scrolling-element" ref="scrollElement">
        <div class="content11__wrapper">
            <div class="content11__wrapper__box1">
                <div class="content11__wrapper__box1__inner">
                    <button class="content11__wrapper__box1__inner__btn">{{ $t('content11Text1') }}</button>
                    <p class="content11__wrapper__box1__inner__txt">{{ $t('content11Text2') }}</p>
                </div>
                <p class="content11__wrapper__box1__txt">{{ $t('content11Text3') }}</p>
            </div>
            <img class="content11__wrapper__img" :src='isNarrow ? imgContent11_390 : imgContent11' alt="content11">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content11">
import { onMounted, ref, inject } from 'vue';
const isNarrow = inject('isNarrow');
const scrollElement = ref(null);
const imgContent11 = new URL('@/assets/images/home/imgContent11.png', import.meta.url).href;
const imgContent11_390 = new URL('@/assets/images/home/imgContent11_390.png', import.meta.url).href;
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
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content11.scss';
</style>