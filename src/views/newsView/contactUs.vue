<template>
      <div>
        <div class="cu-desc">
          <div class="cu-right">
            <img :src="img"/>
            <hr/>
          </div>
          <div class="cu-left">
            <h2>招聘信息</h2>
              <ul>
                <li v-for="(subItem, index) in list" :key="subItem.key">
                  {{index+1}}.{{subItem.value}}
                </li>
              </ul>
            <div>
              <h2>地址信息</h2>
              <div class="button">北京市海淀区双清路77号院1 </div>
            </div>
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
              <el-input type="textarea" v-model="info.remark"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="button" style="width:100px;" @click="submit">提交</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
</template>
<script>
import { postContact, getMessage, baseImgUrl } from '@/apis/index'
export default {
  name: 'contactUs',
  data () {
    return {
      info: {
        name: '',
        email: '',
        remark: ''
      },
      img: '',
      list: [
      ]
    }
  },
  mounted () {
    getMessage()
      .then((res) => {
        const data = res.content.filter((item) => {
          return item.id === 3
        })[0]
        this.list = JSON.parse(data.context)
        const img = res.content.filter((item) => {
          return item.id === 4
        })[0].context
        this.img = img.indexOf('http') === -1 ? baseImgUrl + img : img
      })
  },
  methods: {
    submit () {
      const data = {
        name: this.info.name,
        email: this.info.email,
        remark: this.info.remark
      }
      postContact(data)
        .then((res) => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
          this.info.name = ''
          this.info.email = ''
          this.info.remark = ''
        })
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
      order: 1;
      width: 60%;
      hr{
        margin:20px auto;
      }
      img{
        width:100%;
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
  @media screen and (max-width: 1000px) {
    .form{
      width:100%;
    }
    .cu-desc {
      display: block;
      .cu-left{
        width:100%;
      }
      .cu-right{
        width: 100%;
      }
    }
  }
</style>
