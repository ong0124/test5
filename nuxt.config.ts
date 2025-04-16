// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  hooks: {
    'nitro:config'(nitroConfig) {
      // Ensure `prerender` exists
      if (!nitroConfig.prerender) {
        nitroConfig.prerender = { routes: [] };
      }

      // Ensure `routes` array exists
      nitroConfig.prerender.routes = nitroConfig.prerender.routes ?? [];
      const dynamicRoutes = ['/', '/en-US', '/zh-CN', '/zh-TW'];

      for (const route of dynamicRoutes) {
        if (!nitroConfig.prerender.routes.includes(route)) {
          nitroConfig.prerender.routes.push(route);
        }
      }
    },
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  plugins: ['~/plugins/dayjs'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en-US', iso: 'en-US', name: 'English(US)', file: 'en-US.json' },
      { code: 'zh-CN', iso: 'zh-CN', name: '简体中文', file: 'zh-CN.json' },
      { code: 'zh-TW', iso: 'zh-TW', name: '繁體中文', file: 'zh-TW.json' },
    ],
    defaultLocale: 'zh-TW',
  },
  app: {
    baseURL: '', // Updated base URL
    buildAssetsDir: '/_nuxt/', // 静态资源路径
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${__dirname}/`,
        '~': `${__dirname}`, // 将 `@/` 映射为项目根目录
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      failOnError: false,
      routes: [
        '/',        // Updated home route
        '/en-US',   // Updated English home
        '/zh-CN',   // Updated Simplified Chinese home
        '/zh-TW'
      ],
    },
  },
});
