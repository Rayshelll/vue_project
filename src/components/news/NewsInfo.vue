<template>
    <div class="news-container">
        <h3 class="title">{{ newsinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
            <span>点击次数：{{ newsinfo.click }}</span>
        </p>
        <div class="content"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'

    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsinfo: {}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo(){
                this.$http.get('newsinfo.json').then(result => {
                    // console.log(result.body.message)
                    // console.log(this.id)
                    if (result.body.status === 0){
                        this.newsinfo = result.body.message[this.id]
                    } else {
                        Toast('加载失败')
                    }
                })
            }
        },
        components: {
            "comment-box": comment
        }
    }
</script>

<style lang="scss" scoped>
    .news-container{
        padding: 0 4px;

        .title{
            font-size: 12px;
            color: #cf2d28;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            font-size: 13px;
            color: #0062cc;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
