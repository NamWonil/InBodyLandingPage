<template>
    <div class="wrapper">
        <div class="wrapper__box">
            <div class="wrapper__box__inner1">
                <div class="wrapper__box__inner1__item">
                    <img src="@/assets/images/dashBoard/charts.png" alt="">
                </div>
                <p class="wrapper__box__inner1__title">
                    Dashboard
                </p>
            </div>
            <div class="wrapper__box__inner2">
                <p class="wrapper__box__inner2__text1">
                    {{ $t('dashBoardTitle') }}
                </p>
                <p class="wrapper__box__inner2__text2">
                    {{ $t('dashBoardText1') }}
                </p>
            </div>
        </div>
        <img class="wrapper__img" :src="$t('dashBoardImgContent1')" alt="">
    </div>
</template>
<script lang="ts" setup name="Content1">

</script>
<style lang="scss" scoped src="@/assets/styles/dashBoard/Content1.scss">
@use '@/assets/styles/dashBoard/Content1.scss';
</style>