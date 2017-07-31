<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import top from './components/top'
import middle from './components/middle.vue'
import bottom from './components/bottom.vue'
import panel from './components/float.vue'
export default {
  name: 'app',
  components: {
      top,middle,bottom,panel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
  li{
    list-style: none;
  }
  div,li,span,label{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
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
</style>
