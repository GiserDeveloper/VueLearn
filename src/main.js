//入口文件
//import Vue from "../node_modules/vue/dist/vue.js";
import Vue from 'vue';

//导入路由的包
import VueRouter from 'vue-router'

//安装路由
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'

//安装 vue-resource
Vue.use(VueResource)


//导入MUI的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//按需导入Mint-UI中的组件
import {Header , Swipe, SwipeItem} from 'mint-ui';
//注册组件
Vue.component(Header.name , Header);
Vue.component(Swipe.name , Swipe);
Vue.component(SwipeItem.name , SwipeItem);

//导入自己的router-js路由模块
import router from './router.js'

//导入App 根组件
import app from './App.vue';

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //挂载路由对象到VM实例上
    router
});

