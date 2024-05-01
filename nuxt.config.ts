import svgLoader from 'vite-svg-loader'
import { defineNuxtConfig } from 'nuxt/config'

// import stylelintPlugin from 'vite-plugin-stylelint'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [],
      viewport: 'width=device-width, initial-scale=1',
      link: [
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.googleapis.com',
        // },
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.gstatic.com',
        // },
        //
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#141627',
        },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        // {
        //   rel: 'canonical',
        //   href: '',
        // },
        // {
        //   rel: 'alternate',
        //   hreflang: 'en',
        //   href: '/en',
        // },
      ],

      meta: [
        {
          name: 'Content-Language',
          content: 'ua',
        },
        { name: 'msapplication-TileColor', content: '#141627' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#141627' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'IT Token' },
        // {
        //   property: 'og:image',
        //   content: '',
        // },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: '' },
        { property: 'og:type', content: 'website' },
        {
          name: 'twitter:image',
          content: '',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  nitro: {
    devProxy: {
      '/call/client': {
        target: '',
        changeOrigin: true,
      },
    },
  },

  ssr: true,

  css: ['reset-css', '@/assets/styles/index.scss'],

  modules: [
    '@nuxt/eslint',
    // '@nuxtjs/stylelint-module'
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    baseUrl: '/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'ua',
        iso: 'ua-UA',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: '@/localization/i18n.config.ts',
  },

  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
      // stylelintPlugin(),
    ],

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('layout')) {
              return 'layout'
            }
          },
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
              '@use \'sass:math\'; @use "@/assets/styles/utils" as *;',
        },
      },
    },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})
