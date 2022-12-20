<template>
  <div>
      <div class="container">
          <div class="left">
            <h1>清华大学质量与可靠性研究院相关公告</h1>
            <el-carousel trigger="click" height="500px">
              <el-carousel-item v-for="item in carousels" :key="item.id">
                <!-- <h3 class="small"></h3> -->
                <img height="100%" width="100%" :src="item.img"/>
              </el-carousel-item>
            </el-carousel>
            <p class="desc">
              {{notice}}
            </p>
            <hr/>
          </div>
          <div class="right">
            <div class="block" v-for="(item,index) in list" :key="index">
              <div class="title">{{item.title}}</div>
              <ul>
                <li v-for="subItem in item.array" :key="subItem.id">
                  <i></i> {{subItem.title}}
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
      <PeopleInfo :experts="experts" :links="links"></PeopleInfo>
  </div>
</template>
<script>
import { baseImgUrl, getHomePage } from '@/apis/index'
// import NewsBorad from '@/components/web/NewsBorad'
import PeopleInfo from '@/components/web/PeopleInfo'
export default {
  name: 'index',
  components: {
    PeopleInfo
  },
  data () {
    return {
      carousels: [],
      notice: '',
      list: [
        {
          title: '成果',
          array: []
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
      ],
      experts: [],
      links: []
    }
  },
  mounted () {
    getHomePage().then((res) => {
      this.notice = res.notice
      this.list[1].array = [...res.achievements]
      this.list[0].array = [...res.academics]
      this.experts = [...res.experts]
      this.links = [...res.links]
      res.carousels.forEach(item => {
        item.img = baseImgUrl + item.img
        this.carousels.push(item)
      })
    })
  }
}
</script>

<style lang = "less" scoped>
  h1{
    font-size:1.5rem;
  }
  .desc {
      width:100%;
      color:#000;
      font-size:1.0rem;
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
        font-size:1.0rem;
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
