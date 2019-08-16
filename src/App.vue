<template>
    <div class="app-container">
    <!--顶部header区域-->
        <mt-header title="美味不能辜负" style="background-color: #E86F77">
            <span slot="left" @click="goback" v-show="flag">
                <mt-button icon="back"></mt-button>
            </span>
        </mt-header>
    <!--中间路由router-view区域-->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>

    <!--底部tabbar区域-->
        <nav class="bar">
            <router-link class="mui-tab-item1" to="/home">
                <img class="icon" src="./images/7.png" alt="">
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/shopcar">
                <img class="icon" src="./images/8.png" alt=""><span class="mui-badge" id="badge">1</span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/member">
                <img class="icon" src="./images/9.png" alt="">
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                flag: false
            }
        },
        created(){
            if (this.$route.path == '/home'){
                this.flag = false
            } else {
                this.flag = true
            }
        },
        methods: {
            goback(){
                // 历史回退函数
                this.$router.go(-1)
            }
        },
        watch:{// 监听路由变化
            '$route.path': function(newVal){
                if (newVal == '/home'){
                    this.flag = false
                }else {
                    this.flag = true
                }
            }
        }
    }
</script>

<style scoped>
    * {
        touch-action: pan-y; /*CSS属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作*/
    }
    .mint-header{
        z-index:999;
    }
    .app-container{
        /*padding-top: 40px;*/
        padding-bottom: 50px;
        overflow-x: hidden;
        background: #f5f5f5;
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%);/*回到原来的位置*/

    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);/*右进左出*/
        position: absolute;
    }
    .v-leave-active, .v-enter-active{
        transition: all 0.5s ease;
    }
    .mui-tab-item1{
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .bar{
        position: fixed;
        bottom: 0;
        background: #ffffff;

    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #F56556;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon{
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mui-badge {
        position: absolute;
        left: 220px;
        top: 5px;
    }
    .icon {
        width: 24px;
        position: relative;
        top: 5px;
    }
</style>
