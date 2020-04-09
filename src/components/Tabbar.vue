<template>
    <nav>
      <ul>
       

        <!--router-link的跳转-声明式导航-->
        <router-link
          v-for="nav in navlist"
          :key="nav.id"
          :to="nav.path"
          tag="li"
          active-class="active"
        >{{nav.title}}</router-link>
      </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
        navlist:[
            {id:1,title:"电影",path:"/films"},
            {id:2,title:"影院",path:"/cinema"},
            {id:3,title:"我的",path:"/center"}
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
.active{
    color:orange;
  }
  nav{
    position: fixed;
    left:0px;
    bottom:0px;
    width:100%;
    height:50px;
    ul{
      display: flex;
      li{
        flex:1;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
