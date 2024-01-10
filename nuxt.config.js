// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue",
  '@nuxtjs/color-mode'
],


  

  
  primevue: {
    unstyled: true,
    importPT: { from: path.resolve(__dirname, "./presets/presets/lara/") }, //import and apply preset
  },

});
