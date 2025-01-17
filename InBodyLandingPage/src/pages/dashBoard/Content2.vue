<template>
    <div class="wrapper">
        <div class="wrapper__box1">
            <p class="wrapper__box1__text1">{{ $t('dashBoardText2') }}</p>
            <p class="wrapper__box1__text2">
                {{ $t('dashBoardText3') }}
            </p>
        </div>
        <div class="wrapper__box2 ">
            <div class="wrapper__box2__item" v-for="(item, index) in contentList" :key="item.id">
                <div class="wrapper__box2__item__inner1">
                    <img class="wrapper__box2__item__inner1__img"
                        :src="isNarrow ? item.img390 : isTablet ? item.img960 : item.img" />
                </div>
                <div class="wrapper__box2__item__inner2">
                    <p class="wrapper__box2__item__inner2__text1">{{ item.title }}</p>
                    <p class="wrapper__box2__item__inner2__text2">{{ item.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Content2">
import { useI18n } from 'vue-i18n';
import { computed, type ComputedRef } from 'vue';
import { inject } from 'vue';
const { t } = useI18n();
const isTablet = inject('isTablet', false);
const isNarrow = inject('isNarrow', false);
const contentList: ComputedRef = computed(() => {
    return [{
        title: t('dashBoardContent2.0.title'),
        content: t('dashBoardContent2.0.content'),
        img: t('dashBoardContent2.0.img'),
        img960: t('dashBoardContent2.0.img960'),
        img390: t('dashBoardContent2.0.img390'),

    },
    {
        title: t('dashBoardContent2.1.title'),
        content: t('dashBoardContent2.1.content'),
        img: t('dashBoardContent2.1.img'),
        img960: t('dashBoardContent2.1.img960'),
        img390: t('dashBoardContent2.1.img390'),

    },
    {
        title: t('dashBoardContent2.2.title'),
        content: t('dashBoardContent2.2.content'),
        img: t('dashBoardContent2.2.img'),
        img960: t('dashBoardContent2.2.img960'),
        img390: t('dashBoardContent2.2.img390'),

    },
    {
        title: t('dashBoardContent2.3.title'),
        content: t('dashBoardContent2.3.content'),
        img: t('dashBoardContent2.3.img'),
        img960: t('dashBoardContent2.3.img960'),
        img390: t('dashBoardContent2.3.img390'),

    }];
});
</script>
<style lang="scss" scoped>
@use '@/assets/styles/dashBoard/Content2.scss';
</style>