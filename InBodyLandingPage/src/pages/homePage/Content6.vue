<template>
    <div class="content6 scrolling-element" ref="scrollElement">
        <div class="content6__wrapper">
            <div class="content6__wrapper__box1">
                <div class="content6__wrapper__box1__inner">
                    <button class="content6__wrapper__box1__inner__btn">{{ $t('content6Text1') }}</button>
                    <p class="content6__wrapper__box1__inner__txt">{{ $t('content6Text2') }}</p>
                </div>
                <p class="content6__wrapper__box1__txt">{{ $t('content6Text3') }}</p>
            </div>
            <div class="content6__wrapper__box2">
                <button class="content6__wrapper__box2__btn" @click="goToDashBoard">{{ $t('content6Text4') }}</button>
                <img class="content6__wrapper__box2__img" src="@/assets/images/home/right-large.svg" alt="Icon"
                    style="width: 16px;height: auto">
            </div>
            <img :src="isNarrow ? $t('content6Img390') : $t('content6Img')" alt="content6"
                class="content6__wrapper__img">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content6">
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
const goToDashBoard = () => {
    router.push('/dashboard')
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content6.scss';
</style>