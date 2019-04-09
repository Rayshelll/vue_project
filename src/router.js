// 导入vue-router包
import VueRouter from 'vue-router'
// 导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PictureList from './components/pictures/PictureList.vue'
import PictureInfo from './components/pictures/PictureInfo.vue'
import Goodslist from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsTuwen from './components/goods/GoodsTuwen.vue'
import GoodsPingjia from './components/goods/GoodsPingjia.vue'

// 创建路由对象
let router = new VueRouter({
    routes:[
        {path: '/', redirect: '/home'},
        {path: '/home', component: HomeContainer},
        {path: '/member', component: MemberContainer},
        {path: '/shopcar', component: ShopcarContainer},
        {path: '/search', component: SearchContainer},
        {path: '/home/newslist', component: NewsList},
        {path: '/home/newsinfo/:id', component: NewsInfo},
        {path: '/home/picturelist', component: PictureList},
        {path: '/home/picturelist/:id', component: PictureInfo},
        {path: '/home/goodslist', component: Goodslist},
        {path: '/home/goodslist/:id', component: GoodsInfo, name: 'goodsinfo'},
        {path: '/home/goodstuwen', component: GoodsTuwen, name: 'goodstuwen'},
        {path: '/home/goodspingjia', component: GoodsPingjia, name: 'goodspingjia'},
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的类router-link-active
})
// 将router对象暴露出去
export default router
