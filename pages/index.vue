<template>
    <div class="card">

        <img class="h-10 w-auto" src="./public/files/prokimage.png" alt="" />


        <Button @click="toggleDarkMode" outlined class="border-2 ml-32 py-1">
            <img src="/files/nm.png" width="20" height="20">

        </Button>
        <select v-model="language" id="location" name="location"
            class="mt-2 pr-1 mr-0 block p-10 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option v-for="item in locales" :key="item" :value="item.code">
                {{ item.name }}</option>

        </select>


        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
                class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="true">&rarr;</span></a>
        </div>

        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>

                </div>
                
            </DialogPanel>
        </Dialog>

        <Card class="">
            <template #title> {{ $t("card_heading") }} </template>
            <template #content>
                <div class="card flex flex-col items-center gap-3">
                    <label class="ak" for="authkey1">{{ $t("auth_key_1") }} </label>
                    <InputText id="authkey1" v-model="value1" type="text" size="small" :placeholder="$t('auth_key_1')" />
                    <label for="authkey2">{{ $t("auth_key_2") }}</label>
                    <InputText id="authkey2" v-model="value3" type="text" size="small" :placeholder="$t('auth_key_2')" />
                </div>
                <Button :label="$t('login_button')" @click="nav" />
            </template>
        </Card>
        <footer class="mt-96 text-xs mx-8">
            <p>{{ $t("footer") }}</p>
        </footer>
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

const changed = () => {
    const PrimeVue = usePrimeVue();

    PrimeVue.changeTheme('md-dark-blue', 'md-light-blue', 'theme-link', () => { });
}

const { locales, locale, setLocale } = useI18n();

const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value);
    }
})


const router = useRouter()

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




