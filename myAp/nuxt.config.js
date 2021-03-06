
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'turn'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:   '/css/reset.css'},
      { rel: 'stylesheet', href:   '/css/main.css'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    // '@/plugins/crypto-js',
    { src: '@/plugins/crypto-js',ssr:true },
    { src: '@/plugins/axios',ssr:true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  ** 一个小插曲在Nuxt中，~与@都指向的是根目录。
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt', //cookie 获取
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  axios: {
    proxy: true,
    prefix:"/api/",
    credentials: true,
  },
  proxy: {
    '/api/': { 
      target: 'http://v.juhe.cn', 
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      } 
    }
  },
 
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
