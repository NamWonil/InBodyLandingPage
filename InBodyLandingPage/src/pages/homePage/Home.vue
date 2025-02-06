<template>
    <Header />
    <RouterView :key="$route.fullPath" />
    <Footer />
    <div class="wrapper__popup" v-if="isPopup">
        <div class="wrapper__popup__box">
            <div class="wrapper__popup__box__inner1">
                <p class="wrapper__popup__box__inner1__text">{{ t('serviceLangError') }}</p>
            </div>
            <div class="wrapper__popup__box__inner2">
                <button class="wrapper__popup__box__inner2__cancle" @click="closePopup">{{ t('serviceLangCancel')
                    }}</button>
                <button class="wrapper__popup__box__inner2__confirm" @click="closePopup">{{ t('serviceLangConfirm')
                    }}</button>
            </div>
        </div>
    </div>
    <div class="container" v-if="loading">
        <div class="loading-overlay">
            <div class="loading-spinner"></div>
        </div>
    </div>
    <div class="bg" v-if="isFisrtVisit">
        <div class="demo">
            <form @submit.prevent="handleSubmit">
                <div class="demo__title">
                    <p class="demo__title__text">{{ t('demoTitle') }}</p>
                </div>
                <div class="demo__content">
                    <div class="demo__content__input" v-for="(item, index) in inputList" :key="index">
                        <p class="demo__content__input__title">{{ item.title.slice(0, -1) }}
                            <span class="highlight">{{
                                item.title.slice(-1) }}</span>
                        </p>
                        <div class="demo__content__input__box"> <input :type="item.type"
                                class="demo__content__input__box__input" :placeholder="item.placeholder"
                                v-model="formData[item.model]" required :ref="`input${index}`"><img
                                @click="handleSearch" v-if="item.model === 'address'"
                                src="@/assets/images/Home/search.svg" alt="search">
                        </div>


                    </div>
                    <div class="demo__content__item">
                        <p class="demo__content__item__title">
                            {{ t('demoText1').slice(0, -1) }} <span class="highlight">{{
                                t('demoText1').slice(-1) }}</span>
                        </p>
                        <div class="demo__content__item__chks">
                            <div class="demo__content__item__chks__chk" @click="handleSelect(index)"
                                v-for="(item, index) in radioList" :key="index">
                                <img :src="item.img" alt="Checkbox">
                                <span class="demo__content__item__chks__chk__text">{{
                                    item.title }}</span>
                            </div>
                        </div>

                    </div>
                    <div class="demo__content__checkbox">
                        <input class="demo__content__checkbox__chk" type="checkbox" v-model="checkedList" />
                        <div>
                            <span class="demo__content__checkbox__text">{{ $t('checkboxList.0.option') }} </span>
                            <span class="demo__content__checkbox__text underline">{{ $t('checkboxList.0.text1')
                                }}</span>
                            <span class="demo__content__checkbox__text"> {{ $t('checkboxList.0.text2') }}</span>
                        </div>

                    </div>

                </div>
                <div class="demo__footer">
                    <button class="demo__footer__close" @click="closeDemo">{{ t('demobtn1') }}</button>
                    <button class="demo__footer__button" :disabled="!allChecked && !loading"
                        :class="{ active: allChecked && !loading }">{{ t('demobtn2') }}</button>
                </div>
            </form>
            <div v-if="result" class="result">
                {{ sendSuccess ? $t('sendSuccess') : $t('sendError') }}
            </div>
        </div>
    </div>

</template>
<script lang="ts" setup name="Home">
import Header from './Header.vue';
import Footer from './Footer.vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { ref, provide, onMounted, type ComputedRef, computed, type Ref } from 'vue';
import axios from 'axios'
const isPopup = ref(false)
const loading = ref(false)
const result = ref(false);
const sendSuccess = ref(false);
const isFisrtVisit = ref(true);
const goToLogin = async () => {
    loading.value = true;
    console.log('loading', loading.value)
    let url: string = ''
    if (locale.value === 'ko') {
        url = 'https://kr.v2.lookinbody.com'
    } else if (locale.value === 'en') {
        url = 'https://usa.lookinbody.com'
    } else {
        url = 'https://kr.v2.lookinbody.com'
    }

    try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = url;

        iframe.onload = () => {
            // 加载成功，跳转
            loading.value = false;
            window.location.href = url;
            document.body.removeChild(iframe);
        };

        iframe.onerror = () => {
            isPopup.value = true;
            document.body.removeChild(iframe);
        };

        document.body.appendChild(iframe);

    } catch (error) {
        console.log('Error fetching URL:', error)
        isPopup.value = true
        loading.value = false;
    }
}
onMounted(() => {
    console.log('onMounted')
    if (localStorage.getItem('isFisrtVisit') === null) {
        localStorage.setItem('isFisrtVisit', 'true')
        document.documentElement.style.overflow = 'hidden';
    } else {
        isFisrtVisit.value = false;
    }
})
const closePopup = () => {
    isPopup.value = false
    window.location.reload()
}
const closeDemo = () => {
    isFisrtVisit.value = false;
    document.documentElement.style.overflow = '';
}
const handleSearch = () => {
    console.log('handleSearch')
}
const formData: Ref<{ [key: string]: string }> = ref({
    subject: '',
    companyName: '',
    contactInfo: '',
    email: '',
    address: '',
    isInbodyReserve: 'Y',
})
const checkedList = ref(false);
const allChecked = computed(() => {
    return checkedList.value
});

let inputList: ComputedRef = computed(() => {
    return [{
        title: t('freeUseInputList.0.title'),
        placeholder: t('freeUseInputList.0.placeholder'),
        model: 'companyName',
        type: 'text',
    }, {
        title: t('freeUseInputList.1.title'),
        placeholder: t('freeUseInputList.1.placeholder'),
        model: 'contactInfo',
        type: 'text',
    }, {
        title: t('freeUseInputList.2.title'),
        placeholder: t('freeUseInputList.2.placeholder'),
        model: 'email',
        type: 'email',
    }, {
        title: t('freeUseInputList.4.title'),
        placeholder: t('freeUseInputList.4.placeholder'),
        model: 'address',
        type: 'text',
    }
    ];
});
const radioData = ref([
    {
        title: 'freeUseRadioList.0.title',
        img: 'freeUseRadioList.0.img',
    },
    {
        title: 'freeUseRadioList.1.title',
        img: 'freeUseRadioList.1.img',
    },
]);
const radioList: ComputedRef = computed(() =>
    radioData.value.map(item => ({
        title: t(item.title),
        img: t(item.img),
    }))
);


const handleSelect = (index: number) => {
    console.log('index:', index);
    if (index === 0) {
        radioData.value[0].img = 'radioList.0.img';
        radioData.value[1].img = 'radioList.1.img';
        formData.value.isInbodyReserve = 'y';

    } else {
        radioData.value[0].img = 'radioList.1.img';
        radioData.value[1].img = 'radioList.0.img';
        formData.value.isInbodyReserve = 'n';
    }
}

const handleSubmit = () => {
    fetchData();

}
const fetchData = async () => {
    try {
        loading.value = true;
        formData.value.subject = t('demoTitle');
        await axios.post('http://localhost:5000/Email/Demo', JSON.stringify(formData.value), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data.message);
            console.log(response.status);
            if (response.data.message === true && response.status === 200) {
                sendSuccess.value = true;
            } else {
                sendSuccess.value = false;
            }
            loading.value = false;
            result.value = true;
            setTimeout(() => {
                result.value = false;
                isFisrtVisit.value = false;
            }, 1000);
        });
    } catch (error) {
        console.error('API 请求失败', error);
        sendSuccess.value = false;
        result.value = true;
        setTimeout(() => {
            result.value = false;
        }, 1000);
        loading.value = false;

    }
}

provide('goToLogin', goToLogin)

</script>
<style scoped lang="scss">
@use '@/assets/styles/Home/home.scss';
</style>