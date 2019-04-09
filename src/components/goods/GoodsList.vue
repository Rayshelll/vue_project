<template>
    <div class="goods-list">
        <!--网页中，有两种跳转方式：
            1、使用a标签跳转
            2、使用window.location.href的形式叫做编程式导航-->
        <!--<router-link :to="'/home/goodslist/'+item.id" tag="div" class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src=item.img_url>
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>{{item.stock_number}}</span>
                </p>
            </div>
        </router-link>-->
        <!--编程式导航-->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src=item.img_url>
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>{{item.stock_number}}</span>
                </p>
            </div>
        </div>
        <!--<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>-->
        <mt-button type="danger" size="large">加载更多</mt-button>

    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data(){
            return {
                // pageindex: 1,
                goodslist:[]
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList(){
                this.$http.get("goodslist.json").then(result => {
                    if (result.body.status == 0){
                        this.goodslist = result.body.message;
                        // this.goodslist = this.goodslist.concat(result.body.message);
                    }
                })
            },
            goDetail(id){
                // 使用js方式实现跳转
                // $route是路由参数对象，$router是路由导航对象
                // 1、最简单的
                // this.$router.push("/home/goodslist/"+id)
                // 2、传递对象
                // this.$router.push({path:"/home/goodslist/"+id})
                // 3、传递命名路由,path和params不能同时使用，params会被忽略
                this.$router.push({name:"goodsinfo", params:{id}})
            },
            // getMore(){
            //     this.pageindex++
            //     this.getGoodsList()
            //
            // }
        },

    }
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 8px;
        .goods-item{
            width: 49%;
            border: 1px solid #cccccc;
            box-shadow: 0 0 8px #cccccc;
            margin: 3px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 297px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
                font-weight: bold;
                /*多余的文字，省略*/
                /*white-space: nowrap;!*一排显示*!*/
                /*overflow: hidden;!*隐藏大于一排的文字*!*/
                /*text-overflow: ellipsis;  !*省略号*!*/
            }
            .info{
                background-color: #cccccc;

                .price{

                    p{
                        margin: 0;
                        padding: 4px;
                    }
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 14px;
                    }
                    .old{
                        text-decoration: line-through;
                        color: #999999;
                        font-size: 12px;
                    }
                }
                .sell{
                    display: flex;
                    justify-content: space-between;
                    padding: 0 4px;
                }
            }
        }
    }
</style>
