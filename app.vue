
<template>
  <div class="card">
    <header class="bg-sky-950">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-2 p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-10 w-auto" src="./public/files/prokimage.png" alt="" />
          </a>
        </div>
        <Button @click="toggleDarkMode" outlined class="border-2">
          <img src="./public/files/nm.png" width="20" height="20">

        </Button>
        <SelectButton @change="changed" v-model="value" :options="options" aria-labelledby="basic" />

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
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                    item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <Card class="">
      <template #title> Login </template>
      <template #content>
        <div class="card flex flex-col items-center gap-3">
          <label class="ak" for="authkey1">Auth Key 1: </label>
          <InputText id="authkey1" v-model="value1" type="text" size="small" placeholder="Auth Key 1" />
          <label for="authkey2">Auth Key 2: </label>
          <InputText id="authkey2" v-model="value3" type="text" size="small" placeholder="Auth Key 2" />
        </div>
        <Button label="Login" />
      </template>
    </Card>
    <footer class="mt-96 text-xs mx-8">
      <p>© 2024 Spirogyra Software Private Limited.Inc. All rights reserved.</p>
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

const changed=()=>{
const PrimeVue = usePrimeVue();

PrimeVue.changeTheme('md-dark-blue', 'md-light-blue', 'theme-link', () => {});
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


<link id="theme-link" rel="stylesheet" href="/themes/lara-light-green/theme.css">


