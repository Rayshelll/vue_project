<template>
    <div>
        <!--轮播图-->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        <!--六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                <img class="icon" src="../../images/1.png" alt="">
                <div class="mui-media-body">热门新闻</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/picturelist">
                <img class="icon" src="../../images/2.png" alt="">
                <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodslist">
               <img class="icon" src="../../images/3.png" alt="">
                <div class="mui-media-body">商品列表</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                <img class="icon" src="../../images/4.png" alt="">
                <div class="mui-media-body">留言反馈</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="#">
                <img class="icon" src="../../images/5.png" alt="">
                <div class="mui-media-body">视频专区</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                <img class="icon" src="../../images/6.png" alt="">
                <div class="mui-media-body">联系我们</div>
                </router-link></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import swiper from '../subcomponents/swiper.vue'

    export default {
        name: "HomeContainer",
        data() {
            return {
                lunbotuList: []
            }
        },
        created() {
            this.getLunbotu()
        },
        methods: {
            getLunbotu() {
                this.$http.get('data.json').then(result => {
                    // console.log(result.body.message)
                    // console.log(result.body)
                    if (result.body.status === 0){
                        this.lunbotuList = result.body.message
                    } else {
                        Toast('加载失败')
                    }
                })
            }
        },
        components: {
            swiper
        }
    }
</script>

<style lang="scss" scoped>

    /*浏览器F12查找class类，来修改*/
    .mint-swipe{
        height: 200px;
    }
    /*.mint-swipe-item:nth-child(1){*/
        /*background-color: #2ac845;*/
    /*}*/
    /*.mint-swipe-item:nth-child(2){*/
        /*background-color: #0062cc;*/
    /*}*/
    /*.mint-swipe-item:nth-child(3){*/
        /*background-color: #8a6de9;*/
    /*}*/

    /*scss交集选择器*/
    .mint-swipe-item {
        &:nth-child(1) {
             background-color: #8a6de9;
         }
        &:nth-child(2) {
             background-color: #2ac845;
         }
        &:nth-child(3) {
            background-color: #0062cc;
        }
        img {
            height: 100%;
            width: 100%;
        }

    }
    .mui-grid-view.mui-grid-9{
        background: #f5f5f5;
        border: none;
        .mui-table-view-cell{
            border: 0;
        }
    }
    .mui-media-body{
        font-size: 12px !important;
    }
    .icon {
        width: 65px;
    }
</style>
