<template>
    <div class="detail">
        详情页面.... {{id}} --- {{$route.query.title}}
    </div>
</template>

<script>
export default {
    props:["id"],
    created(){
        //需要获取nowplaying这边传递来的每个电影的id  /detail/:id
        console.log(this.id,this.$route.params.id)
    }
}
</script>

<style>

</style>
