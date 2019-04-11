<template>
    <div>
        <div class="mui-numbox" data-number-min="1" :data-number-max="max">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input class="mui-input-numbox" type="number" value="1" @change="selectChange" ref="numbox"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "goodsinfo_numbox",
        mounted(){
            // 初始化数字选择框
            mui(".mui-numbox").numbox()
        },
        methods: {
            selectChange(){
                // console.log(this.$refs.numbox.value)
                this.$emit("getBoxNum",parseInt(this.$refs.numbox.value));
            }
        },
        props:["max"],
        watch:{
            max:function (newVal, oldVal) {
                mui(".mui-numbox").numbox().setOption("max",newVal)
            }
        },
    }
</script>

<style scoped>

</style>
