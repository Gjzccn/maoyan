<template>
    <div class="center">
        center...
    </div>
</template>

<script>
export default {
    //进入Center之前
    beforeRouteEnter(to,from,next){
        console.log("Center---beforeRouteEnter...",this)
        next()
    },

    //从Center离开的时候
    beforeRouteLeave(to,from,next){
        console.log("Center-beforeRouteLeave",this)
        next()
    }
}
</script>

<style>

</style>
