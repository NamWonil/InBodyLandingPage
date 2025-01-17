<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <img class="wrapper__box1__img" src="@/assets/images/InBodyTouch/InBodyTouch.png" alt="inBodyTouch" />
            <div class="wrapper__box1__inner">
                <p class="wrapper__box1__inner__text1">{{ $t('inBodyTouchText1') }}</p>
                <p class="wrapper__box1__inner__text2">
                    <span class="wrapper__box1__inner__text2__span" v-if="locale === 'en'">{{
                        $t('inBodyTouchText2Front') }}</span><span class="wrapper__box1__inner__text2__span red">{{
                            $t('inBodyTouchText2Red') }}</span>{{
                            $t('inBodyTouchText2') }}
                </p>
            </div>
        </div>
        <img class="wrapper__img" :src="$t('inBodyTouchImgContent1')" alt="inBodyTouch" />
    </div>
</template>
<script lang="ts" setup name="Content1">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>
<style lang="scss" scoped src="@/assets/styles/InBodyTouch/Content1.scss">
@use '@/assets/styles/InBodyTouch/Content1.scss';
</style>