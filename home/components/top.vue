<template>
    <div class="top">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">

            <el-menu-item index="1">
                <img src="./images/logo.jpeg" height="60" width="60"/>
            </el-menu-item>

            <el-menu-item index="2">
                首页2
            </el-menu-item>


            <el-submenu index="3">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1"></el-menu-item>
                <el-menu-item index="2-2"><a href="#detail">房产再增值管理</a></el-menu-item>
                <el-menu-item index="2-3"><a href="#detail">房产再增值管理</a>业务流程</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">公司合作</template>
                <el-menu-item index="3-1"><a href="#detail">关于理房</a></el-menu-item>
                <el-menu-item index="3-2"><a href="#detail">房产安全保障</a></el-menu-item>

            </el-submenu>

            <el-submenu index="5">
                <template slot="title">新闻活动</template>
                <el-menu-item index="3-1"><a href="#detail">公司新闻</a></el-menu-item>
                <el-menu-item index="3-2"><a href="#detail">活动播报</a></el-menu-item>

            </el-submenu>

            <el-menu-item index="6">
                在线留言
            </el-menu-item>
            <!--<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>


        <el-carousel :interval="4000"   height="900px">
            <el-carousel-item>
                <div class="item-1">1</div>

            </el-carousel-item>

            <el-carousel-item  >

                <div class="item-2">2</div>
            </el-carousel-item>

            <el-carousel-item >

               <div class="item-3">3</div>
            </el-carousel-item>
        </el-carousel>





    </div>
</template>

<script>
    export default {
        name: 'top',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
        text-decoration: none;
    }
.el-menu-demo{
    background-color: #6073FF;
}
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .item-1,.item-2,.item-3{
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        color: red;
    }
    .item-1{
        background-image: url("http://www.kongsun-hldgs.com/wp-content/uploads/2015/04/home01.jpg");
    }

    .item-2{
        background-image: url("http://www.kongsun-hldgs.com/wp-content/uploads/2015/04/home02.jpg");
    }
    .item-1{
           background-image: url("http://www.kongsun-hldgs.com/wp-content/uploads/2015/04/home01.jpg");
       }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
