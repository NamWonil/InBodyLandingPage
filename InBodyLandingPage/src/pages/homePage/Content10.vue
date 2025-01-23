<template>
    <div class="content10 scroll-element" ref="scrollElement">
        <div class="content10__wrapper1">
            <p class="content10__wrapper1__title">{{ props.type === "default" ? $t('content10Text1') :
                $t('content10Text5')
                }}</p>
            <p class="content10__wrapper1__subtitle">{{ props.type === "default" ?
                $t('content10Text2') : $t('content10Text6') }}</p>
        </div>
        <div class="content10__wrapper2">
            <button class="content10__wrapper2__button1" @click="goToConsult"> <img
                    src="@/assets/images/home/earPhone.svg" alt="" style="width: 1.4vw;height: auto"><span
                    class="content10__wrapper2__button1__txt">{{
                        $t('content10Text3') }}</span></button>
            <button class="content10__wrapper2__button2" @click="login"><span
                    class="content10__wrapper2__button2__txt">{{
                        $t('content10Text4') }}</span></button>

        </div>
    </div>
</template>
<script lang="ts" setup name="Content10">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue';
import { inject } from 'vue';
const login = inject<() => void>('goToLogin')

let props = withDefaults(defineProps<{ type?: string }>(), {
    type: () => "default"
})
console.log(props.type);
//#region methhod
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
const goToConsult = () => {
    router.push({
        path: '/contact',
        query: {
            type: 'consult'
        }
    })
}
//#endregion
</script>
<style lang="scss" scoped>
@use '@/assets/styles/Home/Content10.scss';
</style>
