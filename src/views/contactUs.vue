<template>
      <div>
        <div class="cu-desc">
          <div class="cu-right">
            <img width="800px" src="https://www.tsinghua.edu.cn/__local/1/95/79/BE6722693B3BC46415290CC514C_60689166_C4100.jpg"/>
          </div>
          <div class="cu-left">
            <div>
              <h2>对外合作</h2>
              <div class="button">校地合作研究院</div>
              <div class="button">海外科研合作</div>
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
      }
    }
  }
}
</script>

<style lang = "less" scoped>
@light_bgColor:#7e2a8a;
@dark_bgColor:#46228e;
@normal_titleColor:#d69909;
  .desc {
      width:100%;
      color:#000;
      font-size:1.2rem;
      line-height:2;
      font-weight: bold;
  }
  @media screen and (max-width: 800px) {
    .cu-desc {
      display: block;
        }
  }
  .cu-form{
    margin-right: 40px;
  }

  .cu-desc {
    margin-top: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
    .cu-left{
      order:-1;
      width: 100%;
      .desc-title{
        color: #956609;
      }
    }
    li{
      color:#000;
      padding-left: 10px;
      height: 2.5rem;
      font-size: 1.25rem;
      line-height: 2.5rem;
    }
    .cu-right{
      hr{
        margin:20px auto;
      }
    }
  }
  .form{
    /deep/.el-form-item__label{
      font-size:1.25rem;
      color:#000;
    }
  }
  .button{
    width: 90%;
    min-height:50px;
    line-height: 50px;
    font-size:1.25rem;
    text-align: center;
    background: @dark_bgColor;
    color:#fff;
    margin-top:20px;
  }
  .button:hover{
    background:#7757b9;
  }
</style>
