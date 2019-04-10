<template>
    <div class="app-container">
    <!--顶部header区域-->
        <mt-header title="Vue项目">
            <span slot="left" @click="goback" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>

        </mt-header>
    <!--中间路由router-view区域-->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>

    <!--底部tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item1" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
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
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
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
</style>
