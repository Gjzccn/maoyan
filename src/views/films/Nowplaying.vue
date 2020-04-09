<template>
    <div class="nowplaying">
        正在热映....
       

        <ul>
            <router-link
                v-for="data in datalist"
                :key="data"
                :to="{
                    name:'detail',
                    params:{id:data},
                    query:{title:'文章二'}                     
                }"
                tag="li"
            >{{data}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            datalist:["1111","2222","3333"]
        } 
    },
    methods:{    
        toDetail(id){
            //组件的$router上面提供了很多的跳转方法，把这些跳转的方式称之为编程式导航。
            // this.$router.push("/center")
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style>

</style>
