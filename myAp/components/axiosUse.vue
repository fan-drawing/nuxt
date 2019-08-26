<template>
<div class="item-show">
          <h4 class="one-title">四、nuxt-axios 使用</h4>
          <p>引入专门的：cnpm i @nuxtjs/axios @nuxtjs/proxy -D   / 上传数据处理qs：npm install --save qs</p>
          <div>
            <p class="two-title">axios -- 配置</p>
<pre>
module.exports = {
    ... // 原先的配置
    build:{
        vendor: ['axios']
    }
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    proxy: [
        ['/app', { target: 'http://xxx.com:8080' }] //代理 跨域使用
    ],
    ...// 原先的配置
}
</pre>
          </div>
        <div class="action">
            <el-button @click="axiosLook">查询axios</el-button>
        </div>
</div>
</template>

<script>

  export default {
    data:function(){
        return {
            msg:"nuxt cookie 使用",
        }
    },
    methods:{
        axiosLook(){
            console.log(this.$store.state.counter)
            this.$store.state.counter++;
            console.log(this)
       
        }
    }
  }

</script>
<style>

</style>
