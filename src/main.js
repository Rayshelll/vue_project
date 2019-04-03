// 入口文件
import Vue from 'vue'
// 导入App根组件
import app from './App.vue'

// 导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入自己的router.js路由模块
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
// 安装
Vue.use(VueResource)
// 设置请求根路径
Vue.http.options.root = '../data/'


// 导入mint-ui中的组件
import { Header, Swipe, SwipeItem, Toast} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast.name, Toast);

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入时间插件moment
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})
// vm实例
let vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
