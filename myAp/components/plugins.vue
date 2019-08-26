<template>
    <div class="item-show">
          <h4 class="one-title">一、plugins配置 ---- nuxt官方文档最坑的地方</h4>
          <div>
            <p class="two-title">plugins配置</p>
<pre>
    引入 crypto-js 为例

    第一步：cnpm install crypto-js --save-dev

    第二步：plugins 文件下添加 crypto-js.js 文件
        import Vue from 'vue'
        import cryptoJs from 'crypto-js'

        const key = "313233343536373a";
        function jiami(word){...}
        function jiemi(word){...}

        export default ({ app }) => {
            app.codeTab = codeTab;
        }
        //给服务端使用
        Vue.prototype.$codeTab = codeTab;
        //给客户端使用 不要使用Vue.use() 不好使
        
    第三步：编辑nuxt.config.js
         plugins: [
            '@/plugins/element-ui',
            { src: '@/plugins/crypto-js',ssr:true }
        ],
    
    第四步：使用
        async asyncData ({app}) {
            console.log(1);
            console.log(app.codeTab)
        },
</pre>
          </div>
    </div>
</template>

<style>

</style>
