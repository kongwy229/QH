<template>
  <div>
      <div class="container">
          <div class="left">
            <h1>清华大学质量与可靠性研究院相关公告</h1>
            <el-carousel trigger="click" height="500px">
              <el-carousel-item v-for="(item,index) in imgList" :key="index">
                <!-- <h3 class="small"></h3> -->
                <img height="100%" width="100%" :src="item"/>
              </el-carousel-item>
            </el-carousel>
            <p class="desc">
              清华大学质量与可靠性研究院（与原国家质检总局共建）致力于先进质量技术和管理体系的研究与应用，协助企业提升产品与服务质量，发展全生命周期的系统保障的理论与技术，提升系统的可信性和可保障性。
            </p>
            <hr/>
          </div>
          <div class="right">
            <div class="block" v-for="(item,index) in list" :key="index">
              <div class="title">{{item.title}}</div>
              <ul>
                <li v-for="(subItem,subIndex) in item.array" :key="subIndex">
                  <i></i> {{subItem}}
                </li>
              </ul>
            </div>
            <!-- <div>
              <div class="title">对外合作</div>
              <div class="button">校地合作研究院</div>
              <div class="button">海外科研合作</div>
            </div>
            <div>
              <div class="title" style="margin-top:70px;">新闻选择</div>
              <div class="time">
                  <div v-for="(item,index) in timeList" :key="index">
                    {{item}}
                  </div>
              </div>
            </div> -->
          </div>
      </div>
      <PeopleInfo></PeopleInfo>
  </div>
</template>
<script>
// import NewsBorad from '@/components/web/NewsBorad'
import PeopleInfo from '@/components/web/PeopleInfo'
export default {
  name: 'index',
  components: {
    PeopleInfo
  },
  data () {
    return {
      imgList: [
        'https://www.tsinghua.edu.cn/image/banner03.jpg',
        'https://www.tsinghua.edu.cn/image/banner07.jpg',
        'https://www.tsinghua.edu.cn/image/banner06.jpg',
        'https://www.tsinghua.edu.cn/image/banner01.jpg',
        'https://www.tsinghua.edu.cn/image/banner02.jpg'
      ],
      list: [
        {
          title: '成果',
          array: [
            '工物系王哲课题组在液体物理和胶体流变学领域取得重要成果',
            '深圳国际研究生院张锡辉团队在揭示碳纳米管电极脱盐过程复杂动力学机制上取得新进展',
            '材料学院研究团队首次实现共价键氮化硅陶瓷室温塑性变形',
            '环境学院陈吕军团队揭示能-水基础设施共生的降碳、节水与经济效益',
            '药学院刘刚课题组首次发现一种新型蛋白合成抑制剂的抗肿瘤作用']
        },
        {
          title: '学术活动',
          array: [
            '国家质量政策与宏观治理体系',
            '质量管理体系',
            '质量控制与改进',
            '企业六西格玛质量管理'
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
.container{
  display: flex;
  .left{
    width:80%;
    color:@dark_bgColor;
  }
  .ShowAll{
    width:100%;
  }
  .right{
     width:20%;
      .title{
        color: @dark_bgColor;
        font-size:1.25rem;
        font-weight: bolder;
        padding-left: 20px;
        margin: 20px 0;
      }
    .button{
      width: 90%;
      min-height:50px;
      line-height: 50px;
      font-size:1.25rem;
      text-align: center;
      background: @dark_bgColor;
      color:#fff;
      margin:20px auto;
    }
    .button:hover{
      background:#7757b9;
    }
    .time{
      display: flex;
      flex-direction: column;
    }
    .time div{
      padding-left: 50px;
      height: 30px;
      font-size:1.2rem;
      font-weight: bolder;
      line-height: 30px;
      margin-top: 20px;
      color: #956609;
    }
    .time:hover{
      color:black;
    }
     .block{
      width: 100%;
      margin: 10px 0px;
      ul{
        width:100%;
        li{
            padding-left: 20px;
            width: 100%;
            height: 50px;
            cursor: pointer;
            line-height: 25px;
            margin-top: 20px;
            color: #956609;
            display: -webkit-box;
            overflow: hidden;
            white-space: normal;
            text-overflow: ellipsis;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        li:hover{
          color:black;
        }
      }
     }
  }
}

@media screen and (max-width: 1200px){
    .container{
      display: block;
      .left{
        width:100%;
      }
      .right{
        width:100%;
        .time{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .time div{
          margin: 20px;
        }
        .title{
          padding-left:0px;
        }
      }
    }
}
</style>
