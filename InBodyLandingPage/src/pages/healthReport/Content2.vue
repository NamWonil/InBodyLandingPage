<template>
    <div class="wrapper">
        <div class="wrapper__box">
            <p class="wrapper__box__text1">{{ $t('healthReportTitle2') }}</p>
            <p class="wrapper__box__text2">
                {{ $t('healthReportText2') }}
            </p>

        </div>
        <img :src='isNarrow ? imgContent2_390 : imgContent2' alt="healthReport" class="wrapper__box__img">
    </div>
</template>
<script lang="ts" setup name="Content2">
import { inject } from 'vue';
const isNarrow = inject('isNarrow', false);
const imgContent2 = new URL('@/assets/images/healthReport/imgContent2_ko.png', import.meta.url).href;
const imgContent2_390 = new URL('@/assets/images/healthReport/imgContent2_ko_390.png', import.meta.url).href;

</script>
<style lang="scss" scoped>
@use '@/assets/styles/healthReport/Content2.scss';
</style>