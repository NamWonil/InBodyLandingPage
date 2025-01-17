<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <p class="wrapper__box1__text1">{{ $t('inBodyTouchText3') }}</p>
            <p class="wrapper__box1__text2">{{ $t('inBodyTouchText4') }}</p>
            <p class="wrapper__box1__text3">
                {{ $t('inBodyTouchText5') }}
            </p>
        </div>
        <img class="wrapper__img"
            :src="isNarrow ? $t('inBodyTouchImgContent3_390') : isTablet ? $t('inBodyTouchImgContent3_960') : $t('inBodyTouchImgContent3')"
            alt="inBodyTouch" />
    </div>
</template>
<script lang="ts" setup name="Content3">
import { inject } from 'vue';
const isTablet = inject('isTablet');
const isNarrow = inject('isNarrow');
</script>
<style lang="scss" scoped>
@use '@/assets/styles/InBodyTouch/Content3.scss';
</style>