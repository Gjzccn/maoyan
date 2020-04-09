<template>
  <div id="app">
    
    <!--路由容器 基于slot进行封装的  根据url路径显示不同的路由组件-->
    <router-view></router-view>   
    <Tabbar></Tabbar>
  </div>
</template>

<script>
//引入Tabbar组件
import Tabbar from "@/components/Tabbar"
export default {
  components:{
    Tabbar
  }
}
</script>


<style lang="scss">
  *{
    padding: 0;
    margin:0;
  }
  ul,li{
    list-style: none;
  }
  
</style>


