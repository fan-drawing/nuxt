<template>
<div class="item-show">
          <h4 class="one-title">三、middleware 中间件及权限设置</h4>
          <div>
            <p class="two-title">middleware</p>
<pre>
middleware/stats.js
import axios from 'axios'

export default function ({ app , req , redirect , route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
// redirect 使用
redirect({ path: '//baidu.com' }) 
// //跳转到外网
redirect({ path: '/resign' }) 
// /跳转到本网站



nuxt.config.js 文件
module.exports = {
  router: {
    middleware: 'stats'
  }  
}
//全局使用
</pre>
          </div>
    </div>
</template>

<style>

</style>
