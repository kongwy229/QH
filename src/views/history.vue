<template>
      <div>
        <div class="cu-desc">
          <div class="cu-left">
            <h2>行车指南</h2>
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
            <img width="800px" src="https://www.tsinghua.edu.cn/__local/1/95/79/BE6722693B3BC46415290CC514C_60689166_C4100.jpg"/>
            <hr/>
            <img width="800px" src="https://www.tsinghua.edu.cn/__local/0/E9/B5/123588172AED93BD0193C0D83FA_DED4F3EB_901C6.jpg"/>
          </div>
        </div>
        <div class="cu-form"></div>
      </div>
</template>
<script>
export default {
  name: 'contactUs',
  data () {
    return {
      newsList: [
        {
          title: '从路A出发',
          content: [
            '威尔希尔大道出口-东',
            '在Westwood Blvd左转',
            '沿着校园入口',
            '如有必要，可在左侧车道附近的停车亭获得停车通行证',
            '在指定地块停车',
            '工程建筑位于Westwood Blvd东侧，毗邻停车场9'
          ]
        },
        {
          title: '从路B出发',
          content: [
            '跟随Wilshire进入Westwood',
            '在Westwood Blvd右转',
            '沿着校园入口',
            '如有必要，可在左侧车道附近的停车亭获得停车通行证',
            '工程建筑位于Westwood Blvd东侧，毗邻停车场'
          ]
        }
      ]
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
  .cu-desc {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
    .cu-left{
      width:50%;
      .desc-title{
        color: #956609;
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

</style>
