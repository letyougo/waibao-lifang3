<template>

    <div class="bottom">
        <div class="bottom-content">
            <el-row>
                <el-col :span="6">
                    <el-row>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                        <el-col :span="12">
                            <a href="#">关于我们</a>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-col :push="2" :span="10" style="vertical-align: middle;text-align: center"><img src="../assets/code1.png" width="150" height="150"/></el-col>
                    <el-col :span="10" style="vertical-align: middle;text-align: center"><img src="../assets/code2.png" width="150" height="150"/></el-col>
                </el-col>
                <el-col :span="6">
                    <div class="bottom-service">
                        <p>客服热线（工作日：8.30：21.00）</p>
                        <p class="phone"><icon name="phone" scale="2"></icon>&nbsp;&nbsp;400-015-8800</p>
                        <p>在线有客服请点击右侧浮窗</p>
                        <p>在线客服（工作日：8.30-21.00）</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <div class="bottom-copy">
                    <p>版权所有</p>
                    <p>Copyright 最终解释权为理房网所有</p>
                </div>
            </el-row>
        </div>

    </div>
</template>
<script>
export default {
    name :'bottom'
}
</script>
<style scope>
    .bottom{
        padding: 20px;
        background: #324157;
        line-height: 40px;
    }
    .bottom-content{
        width: 1280px;
        margin: 0 auto;
    }
    .bottom a {
        display: block;
        color: #ffffff;
        font-size: 14px;
        text-decoration: none;
        text-align: center;
        width: 100%;
    }
    .bottom a:hover{
        text-decoration: underline;
    }
    .bottom-service p{
        color: #ffffff;
        line-height: 20px;
    }
    .phone *{
        vertical-align: middle;
    }
    .phone{
        font-size: 25px;
    }
    .bottom-copy{
        padding-left: 30px;
        color: #ffffff;
    }
</style>