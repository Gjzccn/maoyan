import Vue from 'vue'
import VueRouter from 'vue-router'

//这行代码如果注释掉，this上面都不存在$router与$route的api了
Vue.use(VueRouter)  

//引入Films组件
import Films from "@/views/Films"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import Nowplaying from "@/views/films/Nowplaying"
import Comingsoon from "@/views/films/Comingsoon"
// import Error from "@/views/Error"
import Detail from "@/views/Detail"



const routes = [
  {
    path:"/films",
    component:Films,
    //进行二级路由的配置
    children:[
      {
        path:"/films/nowplaying",
        component:Nowplaying,
      },
      {
        path:"/films/comingsoon",
        component:Comingsoon
      },
      {
        path:"",
        redirect:"/films/nowplaying"  //进行一级路由内部的重定向操作  /films ==> /films/nowplaying
      }
    ]
  },
 
  {   
    path:"/cinema",
      component:()=>import(/* webpackChunkName:'cinema' */"@/views/Cinema")   //webpack的代码分割？
    
  },
  {
    path:"/center",
    component:Center,
    
  },
  {
    name:"detail",
    path:"/detail/:id",
    component:Detail,
    props:true
  },
  
  {
    path:"/",
    redirect:'/films'  //重定向  / ==> /films ===> /fimls/nowplaying
  },
//   {
//     path:"*",
//     component:Error   //前面的路由都没有匹配上的话，就需要显示Error页面了
//   }
]

const router = new VueRouter({
  mode:"hash",//默认采用hash模式
  routes
})




export default router
