<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <p class="wrapper__box1__text1">{{ $t('healthReportText3') }}</p>
            <p class="wrapper__box1__text2">{{ $t('healthReportText4') }}</p>
        </div>
        <div class="wrapper__box2 ">
            <div class="wrapper__box2__item" v-for="(item, index) in contentList" :key="item.id">
                <div class="wrapper__box2__item__inner1">
                    <p class="wrapper__box2__item__inner1__text1">{{ item.title }}</p>
                    <p class="wrapper__box2__item__inner1__text2">{{ item.content }}</p>
                </div>
                <div class="wrapper__box2__item__inner2">
                    <img class="wrapper__box2__item__inner2__img" :src="isTablet ? item.img960 : item.img" />
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
const isTablet = inject('isTablet', false);
const contentList: ComputedRef = computed(() => {
    return [{
        title: t('healthReportContent3.0.title'),
        content: t('healthReportContent3.0.content'),
        img: t('healthReportContent3.0.img'),
        img960: t('healthReportContent3.0.img960'),

    },
    {
        title: t('healthReportContent3.1.title'),
        content: t('healthReportContent3.1.content'),
        img: t('healthReportContent3.1.img'),
        img960: t('healthReportContent3.1.img960'),

    },
    {
        title: t('healthReportContent3.2.title'),
        content: t('healthReportContent3.2.content'),
        img: t('healthReportContent3.2.img'),
        img960: t('healthReportContent3.2.img960'),

    },
    {
        title: t('healthReportContent3.3.title'),
        content: t('healthReportContent3.3.content'),
        img: t('healthReportContent3.3.img'),
        img960: t('healthReportContent3.3.img960'),

    }];
});
</script>
<style lang="scss" scoped>
@use '@/assets/styles/healthReport/Content3.scss';
</style>