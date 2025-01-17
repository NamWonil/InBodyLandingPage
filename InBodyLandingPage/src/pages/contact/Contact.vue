<template>
    <div class="wrapper">
        <form class="wrapper__container" @submit.prevent="handleSubmit">
            <div class="wrapper__container__box1">
                <p class="wrapper__container__box1__title">{{ !isConsult ? $t('contactDownloadTitle') :
                    $t('contactConsultTitle') }}</p>
                <p class="wrapper__container__box1__text">
                    {{ !isConsult ? $t('contactDownloadText') : $t('contactConsultText') }}
                </p>
            </div>
            <div class="wrapper__container__box2">
                <img :src="!isConsult ? $t('imgDownloadTitle') : $t('imgConsultTitle')">
            </div>
            <div class="wrapper__container__box3">
                <div class="wrapper__container__box3__inner1">
                    <div class="wrapper__container__box3__inner1__input" v-for="(item, index) in inputList"
                        :key="index">
                        <p class="wrapper__container__box3__inner1__input__title">{{ item.title.slice(0, -1) }}
                            <span class="highlight">{{
                                item.title.slice(-1) }}</span>
                        </p>

                        <input :type="item.type" class="wrapper__container__box3__inner1__input__input"
                            :placeholder="item.placeholder" v-model="formData[item.model]" required
                            :ref="`input${index}`" />
                    </div>
                    <div class="wrapper__container__box3__inner1__childDownload" v-if="!isConsult">
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
                    <div class="wrapper__container__box3__inner1__childQuestion" v-if="isConsult">
                        <p class="wrapper__container__box3__inner1__childQuestion__text">
                            {{ $t('checkboxTitle') }}
                        </p>
                        <textarea class="wrapper__container__box3__inner1__childQuestion__textarea"
                            v-model="formData.curious" :placeholder="$t('textareaPlaceholder')" required />
                    </div>
                </div>
                <div class="wrapper__container__box3__inner2">
                    <div class="wrapper__container__box3__inner2__child" v-for="(item, index) in checkboxList"
                        :key="index">
                        <input type="checkbox" class="wrapper__container__box3__inner2__child__chk"
                            v-model="checkedList[index]" />
                        <span class="wrapper__container__box3__inner2__child__text">{{ item.title }}</span>

                    </div>
                </div>
            </div>

            <button class="wrapper__container__button" :disabled="!allChecked && !loading"
                :class="{ active: allChecked && !loading }">{{
                    !isConsult ?
                        $t('buttonDownloadText') :
                        $t('buttonConsultText') }}</button>

        </form>
        <div v-if="result" class="result">
            {{ sendSuccess ? $t('sendSuccess') : $t('sendError') }}
        </div>
    </div>
</template>
<script lang="ts" setup name="ServiceDownload">
import { computed, ref, onMounted, type ComputedRef, type Ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import axios from 'axios'

const { t } = useI18n()
const route = useRoute()
const isConsult = ref(false);
const loading = ref(false);
const result = ref(false);
const sendSuccess = ref(false);
const formData: Ref<{ [key: string]: string }> = ref({
    subject: '',
    bossname: '',
    name: '',
    email: '',
    phone: '',
    curious: '',
})
const needConsultation = ref('y');
const checkedList = ref([false, false]);
const allChecked = computed(() => {
    return ((checkedList.value.every((isChecked) => isChecked)) && isConsult.value) ||
        (needConsultation.value === 'y' && !isConsult.value && (checkedList.value.every((isChecked) => isChecked)))
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
        needConsultation.value = 'y';

    } else {
        radioData.value[0].img = 'radioList.1.img';
        radioData.value[1].img = 'radioList.0.img';
        needConsultation.value = 'n';
    }
}
const handleSubmit = () => {
    fetchData();

}
const fetchData = async () => {
    try {
        loading.value = true;
        await axios.post('http://localhost:5000/Email', JSON.stringify(formData.value), {
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
onMounted(() => {
    isConsult.value = route.query.type === 'consult'
    formData.value.subject = isConsult.value ? t('subjectConsult') : t('subjectDownload');
    if (!isConsult.value) {
        formData.value.curious = '';
    }
    console.log('isConsult:', route.query.type);
});
let inputList: ComputedRef = computed(() => {
    return [{
        title: t('inputList.0.title'),
        placeholder: t('inputList.0.placeholder'),
        model: 'bossname',
        type: 'text',
    }, {
        title: t('inputList.1.title'),
        placeholder: t('inputList.1.placeholder'),
        model: 'name',
        type: 'text',
    }, {
        title: t('inputList.2.title'),
        placeholder: 'id@company.com',
        model: 'email',
        type: 'email',
    }, {
        title: t('inputList.3.title'),
        placeholder: t('inputList.3.placeholder'),
        model: 'phone',
        type: 'tel',
    }];
});
const radioData = ref([
    {
        title: 'radioList.0.title',
        img: 'radioList.0.img',
    },
    {
        title: 'radioList.1.title',
        img: 'radioList.1.img',
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
        title: t('checkboxList.0.title'),
        img: t('checkboxList.0.img'),
    },
    {
        title: t('checkboxList.1.title'),
        img: t('checkboxList.1.img'),
    }
    ];
});

</script>
<style lang="scss" scoped>
@use '@/assets/styles/contact/contact.scss';
</style>