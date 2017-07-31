<template>
    <div class="index">
        <top></top>

        <el-card>
            <img src="http://img5.imgtn.bdimg.com/it/u=2183157230,2924689045&fm=26&gp=0.jpg" style="vertical-align: middle"/>

            <span style="height: 225px;display: inline-block;vertical-align: middle">
                <p>规划师详情页面</p>
                <p>
                    <label><icon name="mobile-phone" :scale="1.2"/>&nbsp;&nbsp;职位:</label><label>规划师</label>
                </p>
                                             <p><label><icon name="mobile-phone"
                                                              :scale="1.2"/>&nbsp;&nbsp;所在:</label><label>北京</label>
                                             </p>
                                             <p>
                                                 <label><icon name="mobile-phone"
                                                              :scale="1.2"/>&nbsp;&nbsp;电话:</label><label>130000000</label>
                                             </p>
                                             <p>
                                                 <label><icon name="hand-o-right"
                                                              :scale="1.2"/>&nbsp;&nbsp;门店:</label><label>北京总店</label>
                                             </p>
                                         </span>
        </el-card>
        <bottom></bottom>
    </div>
</template>

<script>
    import bottom from '../components/bottom.vue'
    import top from '../components/top.vue'
    import middle from '../components/middle.vue'
    import float from '../components/float.vue'
    export default {
        name: 'detail',
        components: {
            bottom, top
        }
    }
</script>