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

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        car:[]// {id: 1, price: 2000, count: 60, selected: true,}
    },
    mutations: {
        addToCar(state,goods){
        // 点击加入购物车，把商品信息，保存到store中的car上
            // 分析：1.如果购物车中，之前就已经有这个对应的商品了，那么只需要更新数量
            //       2.如果没有，则直接把商品数据，push到car中
            let flag = false
            state.car.some(item => {
                if(item.id == goods.id){
                    item.count += parseInt(goods.count)
                    flag = true
                    return true
                }
            })
            if (!flag){
                state.car.push(goods)
            }
        }
    },
    getters: {
        getAllCount(state){
            let c=0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }
    }
})
// 导入vue-resource
import VueResource from 'vue-resource'
// 安装
Vue.use(VueResource)
// 设置请求根路径
Vue.http.options.root = '../data/'
// 设置post时候表单的数据格式组织方式 application、x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 安装图片缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// 按需导入mint-ui中的组件
// import { Header, Swipe, SwipeItem, Toast, Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Toast.name, Toast);
// Vue.use(Lazyload);

// 全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

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
    router,
    store, // 挂载store
})
