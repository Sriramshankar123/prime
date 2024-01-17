import PrimeVue from "primevue/config";
import Lara from '@/presets/lara';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    unstyled: true,
    pt: Lara

  });
});

// app.use(PrimeVue, { 
//   pt: {
//       button: {
//           root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
//           label: 'text-white font-bold text-xl', // OR { class: 'text-white font-bold text-xl' }
//           icon: 'text-white text-2xl' 
//       },
//       panel: {
//           header: 'bg-primary border-primary',
//           content: 'border-primary text-lg text-primary-700',
//           title: 'bg-primary text-xl',
//           toggler: 'bg-primary hover:bg-primary-reverse'
//       }
//   } 
// });
