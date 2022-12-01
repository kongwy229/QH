<template>
    <div class="link">
        <div class="link-left">
            <div v-for="(item,index) in [1,2,3,4]" :key="index"></div>
        </div>
        <div class="link-right">
            <div>
                <p><b>清华大学质量与可靠性研究院</b></p>
                <p><i class="el-icon-phone"></i> 联系电话： 010-62772989</p>
                <p><i class="el-icon-printer"></i> 传真：010-62794399</p>
                <p><i class="el-icon-message"></i> E-mail：ieoffice@tsinghua.edu.cn</p>
                <p><i class="el-icon-map-location"></i> 地址：北京市海淀区清华大学舜德楼5层</p>
            </div>
            <img src="https://www.ie.tsinghua.edu.cn/dfiles/24150/uploads/abc1/20210421/607f36498fe01.jpg"/>
        </div>
    </div>
</template>
<script>
export default {
  name: 'link'
}
</script>
<style lang="less" scoped>
    .link{
        width:100%;
        height:200px;
        background: #eee;
        margin-top:20px;
        padding-bottom:50px;
        padding-top:20px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        .link-left{
            width:40%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: space-around;
            div{
                width:200px;
                height:50px;
                margin-left:40px;
                margin-top:20px;
                margin-bottom: 20px;
                background: #fff;
            }
        }
        .link-right{
            width:60%;
            height:100%;
            padding-top:20px;
            display: flex;
            justify-content: space-around;
            border-left:1px solid #ccc;
            i{
                color:#711989;
            }
        }
    }
</style>
