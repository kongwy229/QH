<template>
  <div>
      <div class="container">
          <div class="left">
            <h2>清华大学质量与可靠性研究院相关公告</h2>
            <el-carousel trigger="click" :autoplay="false">
              <el-carousel-item v-for="item in carousels" :key="item.id" style="text-align:center">
                <img height="100%" :src="item.img" @click="jumpTo(item)"/>
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
                <li v-for="subItem in item.array" :key="subItem.id" @click="jumpTo(subItem)" :class="{higher: index===1 }">
                  <i></i> {{subItem.title}}
                </li>
              </ul>
            </div>
          </div>
      </div>
      <PeopleInfo :experts="experts" :links="links"></PeopleInfo>
  </div>
</template>
<script>
import { baseImgUrl, getHomePage } from '@/apis/index'
import PeopleInfo from '@/components/web/PeopleInfo'
export default {
  name: 'index',
  components: {
    PeopleInfo
  },
  data () {
    return {
      cate: {
        1: 'news',
        2: 'news',
        3: 'news',
        4: 'news',
        5: 'news',
        6: 'research/MQPR',
        7: 'research/RQMCT',
        8: 'research/RASR',
        9: 'research/HFSR',
        10: 'research/ROSQ'
      },
      carousels: [],
      notice: '',
      list: [
        {
          title: '学术活动',
          array: []
        },
        {
          title: '成果',
          array: []
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
        if (item.img.indexOf('http') === -1) {
          item.img = baseImgUrl + item.img
        }
        this.carousels.push(item)
      })
    })
  },
  methods: {
    jumpTo (item) {
      this.$router.push({
        path: this.cate[item.category] + '/' + item.id
      })
    }
  }
}
</script>

<style lang = "less" scoped>
  h2{
    font-size:1.25rem;
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
    width:70%;
    color:@dark_bgColor;
  }
  .ShowAll{
    width:100%;
  }
  .right{
     width:30%;
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
            /* width: 100%; */
            /* height: 50px; */
            cursor: pointer;
            line-height: 25px;
            margin-top: 10px;
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
        .higher{
          line-height: 2rem;
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
