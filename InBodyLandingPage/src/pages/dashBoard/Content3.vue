<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <p class="wrapper__box1__text1">{{ $t('dashBoardText4') }}</p>
            <p class="wrapper__box1__text2">
                {{ $t('dashBoardText5') }}
            </p>
        </div>
        <div class="wrapper__box2">
            <img :src="isNarrow ? $t('dashBoardContent3_390.0') : isTablet ? $t('dashBoardContent3_960.0') : $t('dashBoardContent3.0')"
                class="wrapper__box2__img">
            <img :src="isNarrow ? $t('dashBoardContent3_390.1') : isTablet ? $t('dashBoardContent3_960.1') : $t('dashBoardContent3.1')"
                class="wrapper__box2__img">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content3">
import { inject } from 'vue';
const isNarrow = inject('isNarrow', false);
const isTablet = inject('isTablet', false);
</script>
<style lang="scss" scoped>
@use '@/assets/styles/dashBoard/Content3.scss';
</style>