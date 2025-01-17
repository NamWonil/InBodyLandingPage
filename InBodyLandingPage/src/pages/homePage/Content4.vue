<template>
    <div class="content4 scrolling-element" ref="scrollElement">
        <div class="content4__wrapper">
            <div class="content4__wrapper__box1">
                <div class="content4__wrapper__box1__inner">
                    <button class="content4__wrapper__box1__inner__btn">{{ $t('content4Text1') }}</button>
                    <p class="content4__wrapper__box1__inner__text">{{ $t('content4Text2') }}</p>
                </div>
                <p class="content4__wrapper__box1__text">{{ $t('content4Text3') }}</p>
            </div>
            <div class="content4__wrapper__box2">
                <button class="content4__wrapper__box2__btn" @click="goToMemberManagement">{{ $t('content4Text1')
                    }}</button>
                <img class="content4__wrapper__box2__img" src="@/assets/images/home/right-large.svg" alt="Icon"
                    style="width: 1.17vw;height: 100%;">
            </div>
            <img :src="isNarrow ? $t('content4Img390') : $t('content4Img')" alt="content4"
                class="content4__wrapper__img">

        </div>
    </div>
</template>
<script lang="ts" setup name="Content4">
import { onMounted, ref, inject } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
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
const goToMemberManagement = () => {
    router.push('/memberManagement');
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content4.scss';
</style>