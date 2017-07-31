/**
 * Created by xiaoxiaosu on 17/7/20.
 */


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import index from './views/index.vue'
import detail from './views/detail.vue'
var routes = [
    { path: '/', component: index },
    { path: '/index', component: index },
    { path: '/detail', component: detail }
]

export default routes