<template>
    <div class="goodslist-container">

        <!--商品轮播图-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品名称</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2299</del>&nbsp;&nbsp;销售价：<span class="nowprice">￥2199</span>
                    </p>
                    <p style="font-size: 14px">购买数量：<numbox style="display: inline-block"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addcart">加入购物车</mt-button>

                    </p>
                </div>
            </div>
        </div>

        <!--<div v-show="flag" class="ball"></div>-->
        <!--小球动画-->
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
        >
            <div v-show="flag" class="ball" ref="ball"></div>
        </transition>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：12324774</p>
                    <p>库存情况：12件</p>
                    <p>上架时间：2018-09-18</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="getTuwen()">图文详情</mt-button>
                <mt-button type="danger" size="large" plain @click="getPingjia()">商品评价</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue'
    import numbox from '../subcomponents/goodsinfo_numbox.vue'
    export default {
        name: "GoodsInfo",
        data(){
            return {

                id: this.$route.params.id,
                lunbotu:[],
                // flag: false
                flag: false
            }
        },
        created(){
            this.getLunbotu()
        },
        methods: {

            getLunbotu(){
                this.$http.get("goodsinfo.json").then(result => {
                    if(result.body.status == 0){
                        // 先循环轮播图每一项，为item添加img属性，img属性=src属性，轮播图组件中只认识img属性
                        result.body.message.forEach(item => {
                            item.img = item.img_url;
                        })
                        this.lunbotu = result.body.message
                    }
                })
            },
            getTuwen(){
                this.$router.push({name:'goodstuwen'})
            },
            getPingjia(){
                this.$router.push({name:'goodspingjia'})
            },
            addcart(){
                this.flag = !this.flag;
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                el.offsetWidth
                // 小球动画优化思路：
                // 不能把小球位移位置写死，局限于某一分辨率和滚动条未滚动的情况下
                // 解决办法要动态分析小球里徽章的距离
                // 使用dom.Object.getBoundingClientRect()获取徽标和小球位置，返回一个对象，包括上下左右

                // 使用ref属性获得小球的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                // console.log(this.$refs)
                // 使用dom操作获得徽标的位置
                const badgePosition = document.getElementById('badge').getBoundingClientRect();
                const xDist = badgePosition.left - ballPosition.left;
                const yDist = badgePosition.top - ballPosition.top;
                console.log(xDist,yDist)
                el.style.transform = `translate(${xDist}px,${yDist}px)`
                // el.style.transform = "translate(116.5px,366px)"
                el.style.transition = "all 0.5s cubic-bezier(.4, -0.3, 1, .68)"
                done()

            },
            afterEnter(el){
                this.flag = !this.flag;
            },

        },
        components:{
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .ball{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: red;
        z-index: 999;
        position: absolute;
        top: 388px;
        left: 145px;
        /*transform: translate(100px,270px);*/
        /*top: 764px;*/
        /*left: 237px;*/
    }
    .goodslist-container{
        background-color: #cccccc;
        overflow: hidden;
    }
    .price{
        color: #242424;
        .nowprice{
            color: red;
        }
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 10px 0;
        }
    }

</style>
