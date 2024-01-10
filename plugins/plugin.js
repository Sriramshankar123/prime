import PrimeVue from "primevue/config";
import Lara from '@/presets/lara';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    pt: Lara
  });
});
