<template>
    <div class="wrapper">
        <form class="wrapper__container" @submit.prevent="handleSubmit">
            <div class="wrapper__container__box1">
                <p class="wrapper__container__box1__title">{{ $t('freeUseTitle') }}</p>
                <p class="wrapper__container__box1__text">
                    {{ $t('freeUseText1') }}
                </p>
            </div>
            <div class="wrapper__container__box2">
                <img :src="isTablet ? $t('imgFreeUseTitle960') : isNarrow ? $t('imgFreeUseTitle390') : $t('imgFreeUseTitle')"
                    alt="freeUse">
            </div>
            <div class="wrapper__container__box3">
                <div class="wrapper__container__box3__inner1">
                    <div class="wrapper__container__box3__inner1__input" v-for="(item, index) in inputList"
                        :key="index">
                        <p class="wrapper__container__box3__inner1__input__title">{{ item.title.slice(0, -1) }}
                            <span class="highlight">{{
                                item.title.slice(-1) }}</span>
                        </p>
                        <div class="wrapper__container__box3__inner1__input__box">
                            <input :type="item.type" class="wrapper__container__box3__inner1__input__box__input"
                                :placeholder="item.placeholder" v-model="formData[item.model]" required
                                :ref="`input${index}`" />
                            <img src="@/assets/images/Home/search.svg" alt="search" @click="handleSearch"
                                v-if="item.model === 'address'">
                        </div>

                    </div>
                    <div class="wrapper__container__box3__inner1__childDownload">
                        <p class="wrapper__container__box3__inner1__childDownload__title">
                            {{ $t('radioTitle').slice(0, -1) }}<span class="highlight">
                                {{ $t('radioTitle').slice(-1) }}</span>
                        </p>
                        <div class="wrapper__container__box3__inner1__childDownload__item">
                            <div class="wrapper__container__box3__inner1__childDownload__item__chk"
                                @click="handleSelect(index)" v-for="(item, index) in radioList" :key="index">
                                <img :src="item.img" alt="Checkbox">
                                <span class="wrapper__container__box3__inner1__childDownload__item__chk__text">{{
                                    item.title }}</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="wrapper__container__box3__inner2">
                    <div class="wrapper__container__box3__inner2__child" v-for="(item, index) in checkboxList"
                        :key="index">
                        <input type="checkbox" class="wrapper__container__box3__inner2__child__chk"
                            v-model="checkedList[index]" />
                        <div>
                            <span class="wrapper__container__box3__inner2__child__text">{{ item.option }}</span>
                            <span class="wrapper__container__box3__inner2__child__text"
                                :class="{ underline: index === 0 || locale === 'ko', hover: index === 0 || locale === 'ko' }">{{
                                    item.text1
                                }}</span>
                            <span class="wrapper__container__box3__inner2__child__text"
                                :class="{ underline: index === 1 && locale === 'en', hover: index === 1 && locale === 'en' }">{{
                                    item.text2 }}</span>
                        </div>

                    </div>
                </div>
            </div>

            <button class="wrapper__container__button" :disabled="!allChecked && !loading"
                :class="{ active: allChecked && !loading }">{{ $t('buttonFreeUseText') }}</button>

        </form>
        <div v-if="result" class="result">
            {{ sendSuccess ? $t('sendSuccess') : $t('sendError') }}
        </div>
    </div>
</template>
<script lang="ts" setup name="FreeUse">
import { computed, ref, onMounted, type ComputedRef, type Ref, watch, inject } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from 'axios'
const isTablet = inject('isTablet');
const isNarrow = inject('isNarrow');
const { t, locale } = useI18n()
const route = useRoute()
const loading = ref(false);
const result = ref(false);
const sendSuccess = ref(false);
const formData: Ref<{ [key: string]: string }> = ref({
    subject: '',
    companyName: '',
    contactInfo: '',
    email: '',
    bossName: '',
    address: '',
    isInbodyReserve: 'Y',
})
const handleSearch = () => {
    console.log('handleSearch')
}
const checkedList = ref([false, false]);
const allChecked = computed(() => {
    return ((checkedList.value.every((isChecked) => isChecked))
    )
});

const inputs = ref<HTMLInputElement[]>([]);

const isValid = (index: number) => {
    const inputElement = inputs.value[index];
    console.log('inputElement:', inputElement);
    return inputElement && inputElement.validity.valid;
};

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
        formData.value.subject = t('subjectFreeUse');
        await axios.post('http://localhost:5000/Email/FreeUse', JSON.stringify(formData.value), {
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
        title: t('freeUseInputList.3.title'),
        placeholder: t('freeUseInputList.3.placeholder'),
        model: 'bossName',
        type: 'text',
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

let checkboxList = computed(() => {
    return [{
        option: t('checkboxList.0.option'),
        text1: t('checkboxList.0.text1'),
        text2: t('checkboxList.0.text2'),
        img: t('checkboxList.0.img'),
    },
    {
        option: t('checkboxList.1.option'),
        text1: t('checkboxList.1.text1'),
        text2: t('checkboxList.1.text2'),
        img: t('checkboxList.1.img'),
    }
    ];
});

</script>
<style lang="scss" scoped>
@use '@/assets/styles/freeUse/freeUse.scss';
</style>