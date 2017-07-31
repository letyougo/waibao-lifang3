<template>
    <div class="index">
        <top></top>
        <div class="item-1" style="height:450px">1</div>

        <div class="item-2" style="height:450px">2</div>
        <middle></middle>
        <float></float>
        <bottom></bottom>
    </div>
</template>

<script>
    import bottom from '../components/bottom.vue'
    import top from '../components/top.vue'
    import middle from '../components/middle.vue'
    import float from '../components/float.vue'
    export default {
        name:'index',
        components:{
            bottom,top,middle,float
        }
    }
</script>