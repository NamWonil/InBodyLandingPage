<template>
    <div class="wrapper">
        <div class="wrapper__box">
            <div class="wrapper__box__inner1">
                <div class="wrapper__box__inner1__item">
                    <img src="@/assets/images/healthReport/files.png" alt="">
                </div>
                <p class="wrapper__box__inner1__title">
                    Health report
                </p>
            </div>
            <div class="wrapper__box__inner2">
                <p class="wrapper__box__inner2__text1">{{ $t('healthReportTitle') }}</p>
                <p class="wrapper__box__inner2__text2">
                    {{ $t('healthReportText1') }}
                </p>
            </div>
        </div>
        <img class="wrapper__img" :src="$t('healthReportImgContent1')" alt="">
    </div>
</template>
<script lang="ts" setup name="Content1">
</script>
<style lang="scss" scoped src="@/assets/styles/healthReport/Content1.scss">
@use '@/assets/styles/healthReport/Content1.scss';
</style>