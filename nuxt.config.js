export default {
  target: 'server',
  telemetry: false,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    viewer: false,
    jit: true
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      'vue-currency-input/nuxt',
      { globalOptions: { currency: null, locale: 'pt-BR', precision: 2, autoDecimalMode: true, allowNegative: false } }
    ],
    [
      'nuxt-tailvue',
      {
        all: true,
        toast: {
          defaultProps: {
            timeout: 10,
            classTitle: 'text-white opacity-75',
            classMessage: 'text-white',
            classClose: 'text-gray-900',
            classTimeout: 'bg-white opacity-50'
          }
        }
      }
    ]
  ],

  middleware: 'auth',

  auth: {
    redirect: {
      login: '/admin'
    },
    localStorage: false,
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 1800,
          type: 'Bearer',
          required: true
        },
        refreshToken: {
          property: 'token.refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/users', method: 'get' },
          logout: false
        }
      }
    }
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  /*
   ** For deployment you might want to edit host and port
   */
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
