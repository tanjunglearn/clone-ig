// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.TITLE,
      link: [
        { 'data-default-icon': 'https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png', rel: 'icon', sizes: '192x192', href: 'https://static.cdninstagram.com/rsrc.php/v3/yb/r/lswP1OF1o6P.png' }
      ],
      meta: [
        { name: 'description', content: 'Sosmed untuk belajar Nuxt 3 dengan project Clone Instagram.' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ]
})
