<template>
      <div>
        <div class="cu-desc">
          <div class="cu-left">
            <h2>招聘信息</h2>
            <div v-for="(item,index) in newsList" :key="index">
              <h3 class="desc-title">{{item.title}}</h3>
              <ul>
                <li v-for="(subItem,subIndex) in item.content" :key="subIndex">
                  {{subItem}}
                </li>
              </ul>
            </div>
            <div>
              <h2>对外合作</h2>
              <div class="button">校地合作研究院</div>
              <div class="button">海外科研合作</div>
            </div>
          </div>
          <div class="cu-right">
            <img width="800px" src="../../assets/img/local1.png"/>
            <!-- <img width="800px" src="../../assets/img/local2.png"/> -->
            <hr/>
          </div>
        </div>
        <div class="cu-form">
          <h2>联系我们</h2>
          <el-form  class="form" label-width="80px" :model="info">
            <el-form-item label="姓名" required>
              <el-input v-model="info.name"></el-input>
            </el-form-item>
            <el-form-item label="邮件" required>
              <el-input v-model="info.email"></el-input>
            </el-form-item>
            <el-form-item label="备注" required>
              <el-input type="textarea" v-model="info.message"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="button" style="width:100px;">提交</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
</template>
<script>
export default {
  name: 'contactUs',
  data () {
    return {
      info: {
        name: '',
        email: '',
        message: ''
      },
      newsList: [
        {
          title: '地址',
          content: [
            '北京市海淀区双清路77号院4号楼11层1102'
          ]
        }
      ]
    }
  }
}
</script>

<style lang = "less" scoped>
  .desc {
      width:100%;
      color:#000;
      font-size:1.0rem;
      line-height:2;
      font-weight: bold;
  }
  .cu-desc {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
    .cu-left{
      width:60%;
      h2{
        font-size:1.0rem;
      }
      .desc-title{
        font-size: 1.0rem;
        color: #956609;
      }
    }
    li{
      color:#000;
      padding-left: 10px;
      height: 2.5rem;
      font-size: 1.0rem;
      line-height: 2.5rem;
    }
    .cu-right{
      hr{
        margin:20px auto;
      }
    }
  }
  .form{
    width:50%;
    /deep/.el-form-item__label{
      font-size:1.0rem;
      color:#000;
    }
  }
  .button{
    width: 80%;
    min-height:40px;
    line-height: 40px;
    font-size:1.0rem;
    text-align: center;
    background: @dark_bgColor;
    color:#fff;
    margin-top:20px;
  }
  .button:hover{
    background:#7757b9;
  }
  h2{
    font-size: 1.0rem;
  }
  h3{
    font-size: 1.0rem;
  }
</style>
