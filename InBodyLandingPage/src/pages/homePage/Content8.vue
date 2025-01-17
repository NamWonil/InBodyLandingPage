<template>
    <div class="content8 scrolling-element" ref="scrollElement">
        <div class="content8__wrapper">
            <div class="content8__wrapper__box1">
                <div class="content8__wrapper__box1__inner">
                    <img class="content8__wrapper__box1__inner__img" src="@/assets/images/home/linkage.svg" alt="Icon">
                    {{ $t('content8Text1') }}
                </div>
                <p class="content8__wrapper__box1__txt1">{{ $t('content8Text2') }}</p>
                <p class="content8__wrapper__box1__txt2">{{ $t('content8Text3') }}</p>
                <button class="content8__wrapper__box1__btn" @click="goToInBodyTouch">
                    <span class="content8__wrapper__box1__btn__txt">{{ $t('content8Text4') }}</span>
                    <img src="@/assets/images/home/right-arrow.svg" alt="Icon" style="width: 14px;height: auto;">
                </button>
            </div>
            <img :src="isNarrow ? $t('content8Img390') : $t('content8Img')" alt="content8"
                class="content8__wrapper__img">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content8">
import { useRouter } from 'vue-router'
const router = useRouter()
import { onMounted, ref } from 'vue';
const scrollElement = ref(null);
import { inject } from 'vue';
const isNarrow = inject<() => void>('isNarrow')
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
const goToInBodyTouch = () => {
    router.push('/inBodyTouch')
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content8.scss';
</style>