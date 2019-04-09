<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!--不同页面使用不同宽高轮播图解决方法：
    搞清楚width是100%还是自适应，分歧点
    定义一个属性解决使用class样式判断是否加width:100%-->

</template>

<script>
    export default {
        name: "swiper",
        data(){
            return {

            }
        },
        props: ["lunbotuList","isfull"]

    }
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }

    /*scss交集选择器*/
    .mint-swipe-item {
        text-align: center;
        /*&:nth-child(1) {*/
            /*background-color: #8a6de9;*/
        /*}*/

        /*&:nth-child(2) {*/
            /*background-color: #2ac845;*/
        /*}*/

        /*&:nth-child(3) {*/
            /*background-color: #0062cc;*/
        /*}*/

        img {
            height: 100%;
        }
        .full{
            width: 100%;
        }
    }

</style>
