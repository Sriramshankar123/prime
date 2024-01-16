// https://nuxt.com/docs/api/configuration/nuxt-config

import path from "path";
const baseUrl = "localhost:3001";
export default defineNuxtConfig({
  /*  googleFonts: {
    subsets: 'latin',
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
    families: {
      
      Inter: true,
    }
    
    
  },*/

  ssr: false,

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "nuxt-primevue",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@vite-pwa/nuxt",
    // "@pinia/nuxt",
    '@nuxt/image',

  //   ['@nuxtjs/robots', { UserAgent: '*' ,
  //  Disallow: '/' ,}]
  //   ["@cloudmpower/n3-nuxtexceptionhandler"],
  //   [
  //     "@cloudmpower/n3-apiconfigloader",
  //     {
  //       configDirPath: "/app/api/api_configs/",
  //       apiUrlFilePath: "/app/api/api_url.js",
  //     },
  //   ],
  // ],
  ],
  image: {
    quality: 80,
    format:['webp', 'avif', 'jpeg', 'jpg', 'png','and', 'gif'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
  colorMode: {
    classSuffix: "",
  },

  imports: {
    dir: ["./store"],
  },

  // buildModules: ["@pinia/nuxt"],

  // pinia: {
  //   autoImports: [
  //     // automatically imports `defineStore`
  //     "defineStore", // import { defineStore } from 'pinia'
  //     ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
  //   ],
  // },

  // build: {
  //   transpile: ["trpc-nuxt", "primevue"],
  // },
  // typescript: {
  //   shim: false,
  // },
 

  pwa: {
    
    manifest: false, // public/manifest.webmanifest
    strategies: "generateSW",
    // injectRegister: "auto",
    // registerType: "autoUpdate",
    includeAssets: ["/favicon.ico", "privacy.txt"],
    workbox: {
      // navigateFallback: "/",
      globPatterns: ["**/*.{png,svg,js,css,html}"],
     /*  navigateFallbackDenylist: [/^\/api/],
    
      runtimeCaching: [{
        urlPattern:  getBaseUrl()+"/",
        handler: 'NetworkFirst',
        options: {
            cacheName: 'my-cache-v2',
          
            cacheableResponse:{statuses:[0,200]}
        }
    },
    {
        urlPattern: '/_nuxt/',
        handler: 'NetworkFirst',
        options: {
            cacheName: 'my-cache-v2',
            
            cacheableResponse:{statuses:[0,200]}
        }
    }
] */

navigateFallback: '/',
// globPatterns: ['**/*.{js,css,html,json,svg,webp}'],
runtimeCaching: [
  {
    urlPattern: '/',
    handler: 'NetworkFirst',
  }
]
    },
    /* client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600 // 360 for testing only
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/]
    } */
  },



  
  
  primevue: {
    unstyled: true,
    importPT: { from: path.resolve(__dirname, "./presets/lara/") }, //import and apply preset
  },

  tailwindcss: {
    config: {
      content: ["presets/**/*.{js,vue,ts}"],
      theme: {
        extend: {
          colors: {
            "primary-50": "rgb(var(--primary-50))",
            "primary-100": "rgb(var(--primary-100))",
            "primary-200": "rgb(var(--primary-200))",
            "primary-300": "rgb(var(--primary-300))",
            "primary-400": "rgb(var(--primary-400))",
            "primary-500": "rgb(var(--primary-500))",
            "primary-600": "rgb(var(--primary-600))",
            "primary-700": "rgb(var(--primary-700))",
            "primary-800": "rgb(var(--primary-800))",
            "primary-900": "rgb(var(--primary-900))",
            "primary-950": "rgb(var(--primary-950))",
            "surface-0": "rgb(var(--surface-0))",
            "surface-50": "rgb(var(--surface-50))",
            "surface-100": "rgb(var(--surface-100))",
            "surface-200": "rgb(var(--surface-200))",
            "surface-300": "rgb(var(--surface-300))",
            "surface-400": "rgb(var(--surface-400))",
            "surface-500": "rgb(var(--surface-500))",
            "surface-600": "rgb(var(--surface-600))",
            "surface-700": "rgb(var(--surface-700))",
            "surface-800": "rgb(var(--surface-800))",
            "surface-900": "rgb(var(--surface-900))",
            "surface-950": "rgb(var(--surface-950))",
          },
        },
      },
    },
  },

  app: {
    head: {
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content: "",
        },

        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
      link: [
        {
          rel: "icon", type: "image/png", href: "./favicon.ico" 
        },
      ],
    },
  },
  router: {
    options: {
      hashMode: false,
    },
  },

  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "Eng",
        file: "en-US.json",
      },

      {
        code: "in-HI",
        iso: "in-HI",
        name: "हिन्दी",
        file: "in-HI.json",
      },
    ],
    defaultLocale: "en-US",
  },
});
