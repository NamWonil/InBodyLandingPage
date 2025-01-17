<template>
    <div class="wrapper">
        <!-- <img class="wrapper__img" :src="$t('inBodyTouchImgContent4')" alt="inBodyTouch" /> -->
        <div class="wrapper__box" v-for="(item) in list" key="index">
            <div class="wrapper__box__inner">
                <p class="wrapper__box__inner__text1">{{ item.txt1 }}</p>
                <p class="wrapper__box__inner__text2">{{ item.txt2 }}</p>
                <p class="wrapper__box__inner__text3">{{ item.txt3 }}</p>
            </div>
            <img class="wrapper__box__img" :src="isNarrow ? item.img390 : isTablet ? item.img960 : item.img" alt="">

        </div>
    </div>

</template>
<script lang="ts" setup name="Content4">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { inject } from 'vue';
const isNarrow = inject('isNarrow');
const isTablet = inject('isTablet');
let list = computed(
    () => {
        return [
            {
                txt1: t('inBodyTouchText6'),
                txt2: t('inBodyTouchText7'),
                txt3: t('inBodyTouchText8'),
                img: t('inBodyTouchImgContent4_top'),
                img960: t('inBodyTouchImgContent4_top_960'),
                img390: t('inBodyTouchImgContent4_top_390')

            },
            {
                txt1: t('inBodyTouchText9'),
                txt2: t('inBodyTouchText10'),
                txt3: t('inBodyTouchText11'),
                img: t('inBodyTouchImgContent4_bottom'),
                img960: t('inBodyTouchImgContent4_bottom_960'),
                img390: t('inBodyTouchImgContent4_bottom_390')
            }
        ]
    }
)
</script>
<style lang="scss" scoped>
@use '@/assets/styles/InBodyTouch/Content4.scss';
</style>