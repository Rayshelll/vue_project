// 导入vue-router包
import VueRouter from 'vue-router'
// 导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
// 创建路由对象
let router = new VueRouter({
    routes:[
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer}
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的类router-link-active
})
// 将router对象暴露出去
export default router
