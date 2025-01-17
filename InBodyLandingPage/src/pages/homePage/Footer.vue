<template>
    <div class="footer">
        <div class="footer__wrapper1">
            <div class="footer__wrapper1__logo">
                <img src="@/assets/images/home/logo_inbody.svg" alt="logo" width="100%" height="auto" />
            </div>
            <div class="footer__wrapper1__box">
                <p class="footer__wrapper1__box__text" @click="goToHome()">{{ t('footerText1') }}</p>
                <div class="footer__wrapper1__box__inner">
                    <div class="footer__wrapper1__box__inner__item" v-for="(group, index) in translatedItemList">
                        <p class="footer__wrapper1__box__inner__item__title">{{ group.title }}</p>
                        <div class="footer__wrapper1__box__inner__item__children">
                            <p class="footer__wrapper1__box__inner__item__children__txt"
                                v-for="(item, subIndex) in group.subTitle" @click="handleClick(index, subIndex)">
                                {{ item }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__wrapper2">
            <div class="footer__wrapper2__box1">
                <div class="footer__wrapper2__box1__inner1">
                    <span class="footer__wrapper2__box1__inner1__txt">{{ t('footerText2') }}</span>
                    <div class="footer__wrapper2__box1__inner1__img">
                        <img src="@/assets/images/home/vertical-bar-medium.svg" alt="" width="100%" height="auto" />
                    </div>


                    <span class="footer__wrapper2__box1__inner1__txt">{{ t('footerText3') }}</span>
                </div>
                <div class="footer__wrapper2__box1__inner2">
                    <span class="footer__wrapper2__box1__inner2__txt">{{ t('footerText4') }}</span>
                    <span class="footer__wrapper2__box1__inner2__txt">{{ t('footerText5') }}</span>
                    <div class="footer__wrapper2__box1__inner2__img">
                        <img src="@/assets/images/home/vertical-bar-medium.svg" alt="" width="100%" height="auto" />
                    </div>
                    <span class="footer__wrapper2__box1__inner2__txt">{{ t('footerText6') }}</span>
                    <span class="footer__wrapper2__box1__inner2__txt">{{ t('footerText7') }}</span>

                </div>
                <p class="footer__wrapper2__box1__txt">{{ t('footerText8') }}</p>
            </div>
            <div class="footer__wrapper2__box2">
                <span class="footer__wrapper2__box2__txt">{{ t('footerText9') }}</span>
                <div class="footer__wrapper2__box2__img">
                    <img src="@/assets/images/home/vertical-bar-medium.svg" alt="" width="100%" height="auto" />
                </div>
                <span class="footer__wrapper2__box2__txt">{{ t('footerText10') }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Footer">
import { computed, type ComputedRef, type Reactive, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter();
const { t } = useI18n();
const itemList: Reactive<{ titleKey: string, subTitleKeys: string[] }[]> = reactive([
    {
        titleKey: 'footerItemTitle1',
        subTitleKeys: ['footerItemTitle1SubTitle1', 'footerItemTitle1SubTitle2', 'footerItemTitle1SubTitle3'],
    },
    // {
    //     titleKey: 'footerItemTitle2',
    //     subTitleKeys: ['footerItemTitle2SubTitle1'],
    // },
    {
        titleKey: 'footerItemTitle3',
        subTitleKeys: ['footerItemTitle3SubTitle1'],
    }
]);

// computed 
const translatedItemList: ComputedRef = computed(() =>
    itemList.map(item => ({
        title: t(item.titleKey),
        subTitle: item.subTitleKeys.map(subTitleKey => t(subTitleKey)),
    }))
);

const goToHome = () => {
    router.push('/');
}

const handleClick = (index: number, subIndex: number) => {
    console.log(index, subIndex);
    if (index === 0) {
        if (subIndex === 0) {
            router.push('/memberManagement');
        } else if (subIndex === 1) {
            router.push('/healthReport');
        } else if (subIndex === 2) {
            router.push('/dashBoard');
        }
    } else if (index === 10) {
        router.push({
            path: '/serviceDownload',
            query: {
                type: 'download'
            }
        })

    } else if (index === 1) {
        router.push('/inBodyTouch');
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/Home/Footer.scss';
</style>
