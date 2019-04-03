<template>
    <div class="comment">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="最多吐槽120字" maxlength="120"></textarea>
        <input type="submit" value="发表评论" />
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    <span>第1楼</span><span>用户名</span><span>2019-01-02 12:12:12</span>
                </div>
                <div class="cmt-content">
                    天上有
                </div>
            </div>
        </div>
        <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined">
            加载更多
        </button>
    </div>
</template>

<script>
    export default {
        name: "comment"
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
