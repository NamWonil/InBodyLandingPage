<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <div class="wrapper__box1__inner">
                <p class="wrapper__box1__inner__text1">{{ $t('memberManagementContent2.0.title') }}</p>
                <p class="wrapper__box1__inner__text2">
                    {{ $t('memberManagementContent2.0.subTitle') }}
                </p>
                <p class="wrapper__box1__inner__text3">
                    {{ $t('memberManagementContent2.0.content') }}
                </p>
            </div>
            <img class="wrapper__box1__img"
                :src="isNarrow ? $t('memberManagementContent2.0.img390') : $t('memberManagementContent2.0.img')" />
        </div>
        <div class=" wrapper__box2">
            <img class="wrapper__box2__img"
                :src="isNarrow ? $t('memberManagementContent2.1.img390') : $t('memberManagementContent2.1.img')" />
            <div class="wrapper__box2__inner">
                <p class="wrapper__box2__inner__text1">{{ $t('memberManagementContent2.1.title') }}</p>
                <p class="wrapper__box2__inner__text2">
                    {{ $t('memberManagementContent2.1.subTitle') }}
                </p>
                <p class="wrapper__box2__inner__text3">
                    {{ $t('memberManagementContent2.1.content') }}
                </p>
            </div>
        </div>
        <div class="wrapper__box3">
            <div class="wrapper__box3__inner">
                <p class="wrapper__box3__inner__text1">{{ $t('memberManagementContent2.2.title') }}</p>
                <p class="wrapper__box3__inner__text2">
                    {{ $t('memberManagementContent2.2.subTitle') }}
                </p>
                <p class="wrapper__box3__inner__text3">
                    {{ $t('memberManagementContent2.2.content') }}
                </p>
            </div>
            <img class="wrapper__box3__img"
                :src="isNarrow ? $t('memberManagementContent2.2.img390') : $t('memberManagementContent2.2.img')" />
        </div>
    </div>
</template>
<script lang="ts" setup name="Content2">
import { inject } from 'vue';
const isNarrow = inject('isNarrow')
</script>
<style lang="scss" scoped>
@use '@/assets/styles/memberManagement/Content2.scss';
</style>