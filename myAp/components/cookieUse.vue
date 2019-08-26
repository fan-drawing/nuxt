<template>
  <div class="item-show">
          <h4 class="one-title">二、cookie ---- cnpm i --save cookie-universal-nuxt</h4>
          <div>
            <p class="two-title">nuxt.config.js配置</p>
            <pre>
    {
        模块：[ 
            //  简单的用法
            ' cookie-universal-nuxt '，
        
            //  有选项
            [ ' cookie-universal-nuxt '，{  alias ：' cookiz ' } ] ，   
        ]
    }
</pre>

            <div class="use">
                <p class="two-title">插件使用</p>
                <ul>
                    <li>
                        <h4>set(name,value,option)</h4>
                        <div>
                            option = {
                                path:'/',
                                maxAge:60*60*24*7
                            }
                        </div>
                        <div class="action">
                            <el-button @click="setAcookie">设置cookie</el-button>
                        </div>
                    </li>
                    <li>
                        <h4>setAll(cookieArray)</h4>
                        <div>
                            cookieArray = [
                                { name:'cookie-name1',value:'value1',opts:options },
                                { name:'cookie-name2',value:'value2',opts:options },
                                { name:'cookie-name3',value:'value3',opts:options },
                            ]
                        </div>
                    </li>
                    <li>
                        <h4>get(name,opts)</h4>
                        <div>
                            opts={
                                fromRes:true
                            }
                        </div>
                    </li>
                    <li>
                        <h4>getAll(opts)</h4>
                        <div>
                            opts={
                                fromRes:true
                            }
                        </div>
                    </li>
                    <li>
                        <h4>remove(name,opts)</h4>
                        <div>
                            opts={
                                path:'/my-path'
                            }
                        </div>
                    </li>
                    <li>
                        <h4>removeAll()</h4>
                        <div>
                            opts={
                                path:'/my-path'
                            }
                        </div>
                    </li>
                </ul>
            </div>
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
        setAcookie(){
            var date = new Date();
            this.$cookies.set("cjx","test"+date.valueOf(),{path:"/",maxAge:60*60*24*7})
       
        }
    }
  }

</script>
<style>

</style>
