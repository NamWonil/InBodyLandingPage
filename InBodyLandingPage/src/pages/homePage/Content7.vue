<template>
    <div class="content7 scrolling-element" ref="scrollElement">
        <div class="content7__wrapper">
            <div class="content7__wrapper__box1">
                <div class="content7__wrapper__box1__inner">
                    <button class="content7__wrapper__box1__inner__btn">{{ $t('content7Text1') }}</button>
                    <p class="content7__wrapper__box1__inner__txt">{{ $t('content7Text2') }}</p>
                </div>
                <p class="content7__wrapper__box1__txt">{{ $t('content7Text3') }}</p>
            </div>


            <div class="content7__wrapper__box2">
                <div class="content7__wrapper__box2__inner">
                    <img class="content7__wrapper__box2__inner__img" src="@/assets/images/home/HIPAA.png" alt="">
                </div>
                <div class="content7__wrapper__box2__inner">
                    <img class="content7__wrapper__box2__inner__img" src="@/assets/images/home/ISO.png" alt="">
                </div>



            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Content7">
import { onMounted, ref } from 'vue';
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
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content7.scss';
</style>