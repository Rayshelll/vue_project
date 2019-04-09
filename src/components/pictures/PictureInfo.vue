<template>
    <div class="picture-container">
        <h3>{{ picture.title }}</h3>
        <div class="subtitle">
            <span>发表时间：{{ picture.time | dateFormat}}</span><span>点击次数：{{picture.click}}</span>
        </div>
        <hr>
        <!--缩略图-->
        <!--<img class="preview-img" v-for="(item,index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index,list)">-->
        <vue-preview :slides="list" @close="handleClose">

        </vue-preview>
        <!--图片内容-->
        <div class="content" v-html="picture.content"></div>
        <!--评论组件-->
        <comment-box :id="picture.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'

    export default {
        name: "PictureInfo",
        data(){
            return {
                id: this.$route.params.id,
                picture: {},
                list:[]
            }
        },
        created(){
            this.getPictureInfo()
            this.getSmallPic()
        },
        methods: {
            getPictureInfo(){
                this.$http.get('picturelist.json').then(result => {
                    //console.log(result.body.status)
                    if (result.body.status == 0){
                        this.picture = result.body.message[0]
                    }
                })
            },
            getSmallPic(){
                this.$http.get('smallpic.json').then(result => {
                    // console.log(result.body.message)
                    if (result.body.status == 0){
                        result.body.message.forEach((item,index) => {
                            item.w = 600;
                            item.h = 400;
                            // console.log(index)
                            item.alt = 'picture'+index
                        })
                        this.list = result.body.message
                    }
                })
            },
            handleClose () {
                console.log('close event')
            }
        },
        components: {
            "comment-box": comment
        }
    }
</script>

<style lang="scss" scoped>
    .picture-container{
        padding: 3px;
        h3{
            font-size: 18px;
            color: #0062cc;
            text-align: center;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
        }
        .content{
            font-size: 13px;
            color: #242424 !important;
            line-height: 13px;
            padding: 0 10px;
        }
    }
</style>
