<template>
    <div class="app">
        <Home />
    </div>
</template>
<script lang="ts" setup name="App">
import Home from './pages/homePage/Home.vue';
import { ref, onMounted, onUnmounted, provide } from 'vue';
const isNarrow = ref(false);
const isTablet = ref(false);
const updateScreenWidth = () => {

    if (window.innerWidth <= 390) {
        isNarrow.value = true;
        isTablet.value = false;
        console.log(isNarrow.value);
    } else if (window.innerWidth <= 960) {
        isTablet.value = true;
        isNarrow.value = false;
        console.log(isTablet.value);
    } else {
        isNarrow.value = false;
        isTablet.value = false;
        console.log(isNarrow.value);
    }
};

onMounted(() => {
    window.addEventListener('resize', updateScreenWidth);
    console.log(isNarrow.value);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenWidth);
    console.log(isNarrow.value);
});
provide('isNarrow', isNarrow)
provide('isTablet', isTablet)
</script>
<style scoped></style>
