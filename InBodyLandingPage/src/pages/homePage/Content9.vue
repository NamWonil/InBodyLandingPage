<template>
    <div class="content9 scrolling-element" ref="scrollElement">
        <div class="content9__wrapper">
            <div class="content9__wrapper__box1">
                <p class="content9__wrapper__box1__txt">{{ $t('content9Text1') }}</p>
                <button class="content9__wrapper__box1__btn" @click="goToServiceDownload">
                    <span class="content9__wrapper__box1__btn__txt">{{ $t('content9Text2') }}</span>
                </button>
            </div>
            <div class="content9__wrapper__box2">
                <div class="content9__wrapper__box2__inner">
                    <p class="content9__wrapper__box2__inner__txt1">{{ $t('content9Text3') }}</p>

                    <p class="content9__wrapper__box2__inner__txt2">{{ $t('content9Text4') }}</p>
                    <div class="content9__wrapper__box2__inner__img">
                        <img src="@/assets/images/home/LookinBody1.svg" alt="" style="width: 100%; height: auto;" />
                    </div>
                    <p class="content9__wrapper__box2__inner__txt3">{{ $t('content9Text5') }}</p>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Content9">
import { useRouter } from 'vue-router'
const router = useRouter()
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
const goToServiceDownload = () => {
    router.push('/serviceDownload')
}
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content9.scss';
</style>