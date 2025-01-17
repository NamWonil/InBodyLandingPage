<template>

    <div class="content3 scrolling-element" ref="scrollElement">
        <div class="content3__wrapper">
            <div class="content3__wrapper__box1">
                <div class="content3__wrapper__box1__inner">
                    <button class="content3__wrapper__box1__inner__btn">{{ $t('content3Text1') }}</button>
                    <p class="content3__wrapper__box1__inner__text">{{ $t('content3Text2') }}</p>
                </div>
                <p class="content3__wrapper__box1__txt">{{ $t('content3Text3') }}</p>
            </div>
            <img class="content3__wrapper__img"
                :src="isNarrow ? '/src/assets/images/home/imgContent3_390.png' : '/src/assets/images/home/imgContent3.png'"
                alt="content3">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content3">
import { onMounted, ref, inject } from 'vue';
const scrollElement = ref(null);
const isNarrow = inject('isNarrow');
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
@use '@/assets/styles/Home/Content3.scss';
</style>