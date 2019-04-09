<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea style="font-size: 10px" placeholder="最多吐槽120字" maxlength="120" v-model="msg"></textarea>
        <input type="submit" value="发表评论" @click="postComment"/>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.time">
                <div class="cmt-title">
                    <span>第{{ i+1 }}楼</span><span>{{item.user_name }}</span><span>{{ item.time | dateFormat}}</span>
                </div>
                <div class="cmt-content">
                    {{ item.comment == "" ? "此用户很懒，没有留下什么":item.comment}}
                </div>
            </div>
        </div>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="getMore">
            加载更多
        </button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "comment",
        data(){
            return {
                comments:[],
                pageIndex: 1,
                msg:''
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            getComments(){
                this.$http.get("comments.json").then(result => {
                // this.$http.get("comments.json/" + this.id + "?pageindex="+ this.pageIndex).then(result => {
                    if (result.body.status === 0){
                        this.comments = result.body.message
                        // 拼接老评论
                        // this.comments = this.comments.concat(result.body.message)
                    } else {
                        Toast('加载失败')
                    }
                })
            },
            getMore(){
                this.pageIndex++
                this.getComments()
            },
            postComment(){
                if (this.msg.trim().length === 0 ){
                    Toast('评论不能为空！')
                }
                //使用“JSONPlaceholder”网站提供的API接口来模拟post和get
                this.$http.post('http://jsonplaceholder.typicode.com/posts', {comment: this.msg.trim()}).then(function (result) {
                    if (result.body){
                        var cmt = {
                            user_name: '匿名用户', time: Date.now(),comment: this.msg.trim()
                        }
                        this.comments.unshift(cmt)
                        this.msg = ""
                    }
                })
            }
        },
        // 使用父组件的值
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
    .comment{
        h3{
            font-size: 14px;
        }
        input, button{
            width: 100%;
        }
        .cmt-list{
            .cmt-title{
                padding-top: 5px;
                padding-bottom: 5px;
                font-size: 12px;
                background-color: #cccccc;
                display: flex;
                justify-content: space-around;
            }
            .cmt-content{
                padding: 5px 20px 5px 20px;
                font-size: 12px;
            }
        }
    }
</style>
