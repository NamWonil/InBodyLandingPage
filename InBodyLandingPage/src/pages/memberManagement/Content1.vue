<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <div class="wrapper__box1__inner1">
                <div class="wrapper__box1__inner1__item">
                    <img src="@/assets/images/healthReport/files.png" alt="">
                </div>
                <p class="wrapper__box1__inner1__title">
                    Member management
                </p>
            </div>
            <div class="wrapper__box1__inner2">
                <p class="wrapper__box1__inner2__text1">{{ $t('memberManagementTitle') }}</p>
                <p class="wrapper__box1__inner2__text2">
                    {{ $t('memberManagementText1') }}
                </p>
            </div>
        </div>
        <div class="wrapper__box2">
            <img class="wrapper__box2__img" :src="$t('memberManagementImgContent1')" alt="">
        </div>
    </div>
</template>
<script lang="ts" setup name="Content1">

</script>
<style lang="scss" scoped src="@/assets/styles/memberManagement/Content1.scss">
@use '@/assets/styles/memberManagement/Content1.scss';
</style>