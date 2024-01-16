<template>
    <div>
        <img class="h-10 w-auto" src="./public/files/prokimage.png" alt="" />

        <Button @click="toggleDarkMode" outlined class="border-2 ml-32 py-1">
            <img src="/files/nm.png" width="20" height="20">

        </Button>

        <select v-model="language" id="location" name="location"
            class="mt-2 pr-1 mr-0 block p-10 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option v-for="item in locales" :key="item" :value="item.code">
                {{ item.name }}</option>

        </select>
        
       



        <Card>
            <template #title>{{$t("card_heading_2")}} </template>
            <template #content>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-24 h-24 mx-28">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>


            </template>
        </Card>

        <Card>
            <template #title>{{$t("card_heading_3")}}</template>
            <template #content>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-24 h-24 mx-28">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>




            </template>
        </Card>

        <footer class="mt-96 text-xs mx-8 p-1">
            <p>{{ $t("footer") }}</p>
        </footer>


    </div>
</template>


<script setup>
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import Card from 'primevue/card';
const { locales, locale, setLocale } = useI18n();



const language = computed({
    get: () => locale.value,
    set: (value) => {
        setLocale(value);
    }
})

const colorMode = useColorMode()
console.log(colorMode.preference)
const toggleDarkMode = () => {

    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
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



}</style>
