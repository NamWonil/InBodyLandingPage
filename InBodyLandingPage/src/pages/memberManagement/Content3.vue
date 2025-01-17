<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <p class="wrapper__box1__text1">{{ $t('memberManagementText3') }}</p>
            <p class="wrapper__box1__text2">{{ $t('memberManagementText4') }}</p>
        </div>
        <div class="wrapper__box2 ">
            <div class="wrapper__box2__item" :style="{ background: item.bg }" v-for="(item, index) in contentList"
                :key="item.id">
                <div class="wrapper__box2__item__inner1">
                    <img class="wrapper__box2__item__inner1__img" :src="isNarrow ? item.img390 : item.img" />
                </div>
                <div class="wrapper__box2__item__inner2">
                    <p class="wrapper__box2__item__inner2__text1">{{ item.title }}</p>
                    <p class="wrapper__box2__item__inner2__text2">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Content3">
import { useI18n } from 'vue-i18n';
import { computed, type ComputedRef } from 'vue';
import { inject } from 'vue';
const { t } = useI18n();
const isTablet = inject('isTablet')
const isNarrow = inject('isNarrow')
const contentList: ComputedRef = computed(() => {
    return [{
        title: t('memberManagementContent3.0.title'),
        content: t('memberManagementContent3.0.content'),
        img: t('memberManagementContent3.0.img'),
        img960: t('memberManagementContent3.0.img960'),
        img390: t('memberManagementContent3.0.img390'),
        bg: '#eeeff3',
    },
    {
        title: t('memberManagementContent3.1.title'),
        content: t('memberManagementContent3.1.content'),
        img: t('memberManagementContent3.1.img'),
        img960: t('memberManagementContent3.1.img960'),
        img390: t('memberManagementContent3.1.img390'),
        bg: '#F6F7F9',
    },
    {
        title: t('memberManagementContent3.2.title'),
        content: t('memberManagementContent3.2.content'),
        img: t('memberManagementContent3.2.img'),
        img960: t('memberManagementContent3.2.img960'),
        img390: t('memberManagementContent3.2.img390'),
        bg: '#E4EEF6',
    },
    {
        title: t('memberManagementContent3.3.title'),
        content: t('memberManagementContent3.3.content'),
        img: t('memberManagementContent3.3.img'),
        img960: t('memberManagementContent3.3.img960'),
        img390: t('memberManagementContent3.3.img390'),
        bg: '#FAEFF1',
    }];
});
</script>
<style lang="scss" scoped>
@use '@/assets/styles/memberManagement/Content3.scss';
</style>