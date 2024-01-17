
<template>
  <div>
  <NuxtLayout >
     <NuxtPage></NuxtPage> 
 </NuxtLayout>
</div>
 
</template>

<script setup>
import { useColorMode } from '../node_modules/@nuxtjs/color-mode/dist/runtime/composables';

import SelectButton from 'primevue/selectbutton';
const value = ref('Off');
const options = ref(['Lara', 'Wind']);



const colorMode = useColorMode();



import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const isDarkMode = ref();


import { ref } from "vue";

onMounted(() => {
  const nuxtApp = useNuxtApp()
  window.$nuxt = nuxtApp

  $nuxt.$listen('changeTheme', () => {
    console.log('changeTheme listener', )
    const isDarkMode = colorMode.preference === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    colorMode.preference = isDarkMode ? 'light' : 'dark';
  })
})

const items = ref([



  {
    label: 'Projects',
    icon: 'pi pi-search',
  },





])

import { usePrimeVue } from 'primevue/config';

const changed=()=>{
const PrimeVue = usePrimeVue();

PrimeVue.changeTheme('md-dark-blue', 'md-light-blue', 'theme-link', () => {});
}

const { locales, locale, setLocale } = useI18n();

const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value);
    }
})

const router=useRouter()

const nav = () => {
  router.push("/dashboard")
}


</script>

<style>
@import url('~/assets/css/global.css');

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}


.dark-mode {
  background-color: #091a28;
  color: #ebf4f1;
}

label {
  color: #000;
  margin-right: 180px;
 
  

}
</style>




