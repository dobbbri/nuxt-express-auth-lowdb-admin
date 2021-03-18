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

  plugins: ['~/plugins/axios'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    viewer: false
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  middleware: 'auth',

  axios: {
    // proxy: true
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  auth: {
    redirect: {
      login: '/admin',
      logout: '/',
      callback: '/admin',
      home: '/admin/products'
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken'
        },
        user: {
          property: 'user'
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          me: { url: '/api/users', method: 'get' },
          logout: false
        }
      }
    }
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
