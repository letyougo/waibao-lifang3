<template>
    <div class="float-panel">
        <el-card :body-style="{ padding: '10px 15px' }">
            <a href="#">
                <icon name="user" scale="2" style="vertical-align: middle;text-align: center"></icon>
            </a>

        </el-card>
        <el-card :body-style="{ padding: '10px 15px' }">
            <a href="#">
                <icon name="wechat" scale="2"></icon>
            </a>
        </el-card>
        <el-card :body-style="{ padding: '10px 15px' }">
            <a href="#">
                <icon name="qq" scale="2"></icon>
            </a>

        </el-card>

    </div>
</template>
<script>
    export default {
        name : 'float'
    }
</script>
<style>
    .float-panel{
        position: fixed;
        right: 50px;
        top: 50px;
        z-index: 100;
        border-radius: 10px;
    }
</style>