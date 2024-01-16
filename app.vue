
<template>
  <div>
  <NuxtLayout >
     <NuxtPage></NuxtPage> 
 </NuxtLayout>
</div>
 
</template>

<script setup>


import SelectButton from 'primevue/selectbutton';
const value = ref('Off');
const options = ref(['Lara', 'Wind']);





import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);

import { ref } from "vue";

const items = ref([



  {
    label: 'Projects',
    icon: 'pi pi-search',
  },





])



const colorMode = useColorMode()
console.log(colorMode.preference)
const toggleDarkMode = () => {

  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

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


.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

label {
  color: #000;
  margin-right: 180px;
 
  

}
</style>


<link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css">




