<template>
  <div class="container details-show">
    <ul class="list-ul clearfix">
      <li>
        <plugins></plugins>
      </li>
      <li>
        <cookieUse></cookieUse>
      </li>
      <li>
        <middleware></middleware>
      </li>
      <li>
        <axiosUse></axiosUse>
      </li>
      <li>
        <config></config>
      </li>
    </ul>
  </div>
</template>

<script>
  import cookieUse from '~/components/cookieUse.vue'
  import plugins from '~/components/plugins.vue'
  import middleware from '~/components/middleware.vue'
  import axiosUse from '~/components/axiosUse.vue'
  import config from '~/components/config.vue'

  export default {
    components: {
      cookieUse,
      plugins,
      middleware,
      axiosUse,
      config
    },
    data:function(){
      return {
        info:null,
      }
    },
    async asyncData ({app,$codeTab}) {
      //  console.log(1);
      //  console.log(app.codeTab)
      // console.log(app.$axios)
      let { data } = await app.$axios.get('https://api.myjson.com/bins/mr6ma');
      let { data2 } = await app.$axios.get('https://api.myjson.com/bins/mr6ma');
      return { info: data,info2:data2 }
  
    },
  }

</script>

<style>

</style>
