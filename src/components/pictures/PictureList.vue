<template>
    <div>
        <!--顶部滑动条-->
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item', index === 0 ? 'mui-active': '']" v-for="(item,index) in cates" :key="item.id" @tap="getPictureByCateId(item.id)">
                    {{item.title}}
                </a>
            </div>
        </div>
        <!--图片列表-->
        <ul class="p-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/picturelist/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">{{item.title}}</div>
                </div>

            </router-link>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'


    export default {
        name: "PictureList",
        data (){
            return {
                cates:[],
                list:[], // 图片列表
            }
        },
        created(){
          this.getAllCategory()
            this.getPictureByCateId(0)
        },
        mounted() {// 组件渲染好，执行这个钩子函数，要操作元素要在mounted里，这里的元素是最新的
            // 初始化滑动条
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods: {
            getAllCategory(){
                this.$http.get('picture.json').then(result => {
                    if (result.body.status === 0){
                        // 手动拼接出一个完整的分类
                        result.body.message.unshift({title:"全部"})
                        this.cates = result.body.message;
                    }
                })
            },
            getPictureByCateId(cateId){
                this.$http.get('picturelist.json').then(result => {

                    if (result.body.status === 0){
                        this.list = result.body.message;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y; /*CSS属性 touch-action 用于指定某个给定的区域是否允许用户操作，以及如何响应用户操作*/
    }
    .p-list{
        list-style:none;
        margin: 0 auto;
        padding: 10px;
        padding-bottom: 0;

        li{
            background-color: #cccccc;
            text-align: center;
            padding: 0px;
            margin-bottom: 10px;
            box-shadow: 0 0 3px #999999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            .info{
                color: white;
                position: absolute;
                text-align: left;
                bottom: 0;
                width: 100%;
                background-color: rgba(0,0,0,0.4);
                max-height: 85px;
                .info-title{
                    font-size: 14px;
                    text-align: left;
                    font-weight: bold;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    padding: 0 10px;
                }
                .info-body{
                    font-size: 13px;
                    padding: 0 10px;
                }
            }
        }

    }

</style>
