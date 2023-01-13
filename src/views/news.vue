<template>
      <div>
        <h2 v-if="$route.name.indexOf('research') === -1">新闻中心</h2>
        <h2 v-else>科学研究-{{cate[$route.params.cate].label}}</h2>
        <div class="limit-height" v-show="newsList.length > 0" v-loading="loading">
          <div class="news-con" v-for="item in newsList" :key="item.id">
            <h3 @click="jumpTo(item.id)">{{item.title}}</h3>
            <p v-show="item.cooperate" class="time">
              <span>合作单位：{{item.cooperate}}</span>
            </p>
            <div class="container">
              <div class="img">
                <img :src="item.previewImg? item.previewImg:'../../assets/img/start.jpg'"/>
              </div>
              <div class="desc">
                <p>{{item.brief}}</p>
                <p class="more" @click="jumpTo(item.id)">查看更多 <i class="el-icon-right"></i></p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
        <div class="page">
          <el-pagination
            :hide-on-single-page="true"
            :current-page.sync="pager.pageNow"
            :page-size="pager.pageSize"
            layout="prev, pager, next"
            :total="pager.total"
            @current-change="handlePaginationChange">
          </el-pagination>
        </div>
        <div class="empty" v-show="newsList.length === 0">
          当前无数据
        </div>
      </div>
</template>
<script>
import { getNewsList, baseImgUrl, getNewsCenterList } from '@/apis/index'
export default {
  name: 'news',
  data () {
    return {
      isMobile: false,
      loading: false,
      pager: {
        pageNow: 1,
        pageSize: 5,
        total: 0
      },
      cate: {
        MQPR: {
          label: '宏观质量政策研究',
          key: 6
        },
        RQMCT: {
          label: '质量管理与控制技术研究',
          key: 7
        },
        RASR: {
          label: '可靠性与保障性研究',
          key: 8
        },
        HFSR: {
          label: '人因与安全研究',
          key: 9
        },
        ROSQ: {
          label: '服务质量研究',
          key: 10
        }
      },
      newsList: [
      ]
    }
  },
  mounted () {
    this.handlePaginationChange()
  },
  watch: {
    '$route.params': function () {
      this.handlePaginationChange()
    }
  },
  methods: {
    handlePaginationChange () {
      if (this.$route.name.indexOf('research') === -1) { // 新闻列表
        this.getNewsCenterList()
      } else {
        this.getList(this.cate[this.$route.params.cate].key)
      }
    },
    getNewsCenterList () {
      this.newsList = []
      this.loading = true
      const params = {
        page: this.pager.pageNow - 1,
        size: this.pager.pageSize
      }
      getNewsCenterList(params)
        .then((res) => {
          res.content.forEach((item) => {
            if (item.previewImg && item.previewImg.indexOf('http') === -1) {
              item.previewImg = baseImgUrl + item.previewImg
            }
            this.newsList.push(item)
          })
          this.pager.total = res.totalElements
          this.loading = false
        })
    },
    getList (id) {
      this.newsList = []
      this.loading = true
      const params = {
        page: this.pager.pageNow - 1,
        size: this.pager.pageSize
      }
      if (id !== undefined) {
        params.category = id
      }
      getNewsList(params)
        .then((res) => {
          res.content.forEach((item) => {
            if (item.previewImg && item.previewImg.indexOf('http') === -1) {
              item.previewImg = baseImgUrl + item.previewImg
            }
            this.newsList.push(item)
          })
          this.pager.total = res.totalElements
          this.loading = false
        })
    },
    jumpTo (id) {
      this.$router.push({
        name: this.$route.name.indexOf('research') === -1 ? 'newsDetail' : 'researchDetail',
        params: { id: id }
      })
    }
  }
}
</script>

<style lang = "less" scoped>
.empty{
    text-align: center;
    height: 50vh;
    color: #666666;
    line-height: 50vh;
}
.limit-height{
    min-height: 45vh;
}
.news-con{
  margin-bottom:50px;
}
h2{
  color: @dark_bgColor;
  font-size: 1.25rem;
}
h3{
  color: @dark_bgColor;
  font-size: 1.0rem;
  font-weight: bolder;
  margin: 20px 0;
  cursor: pointer;
}

.container{
  display: flex;
  .img{
    width:300px;
    text-align: center;
    img{
      width:300px;
    }
  }
  .desc{
    padding-left:25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p{
      font-size: 0.8rem;
      text-indent: 2rem;
    }
  }
}
@media screen and (max-width: 1000px) {
  .container{
     display: block;
     .desc{
      padding-left:0px;
    }
  }
}
.detail{
    color: #956609;
    font-weight: bold;
    font-size: 1.0rem;
    text-indent: 0rem;
    span{
      padding-left:10px;
    }
}
.time{
  color:@dark_titleColor;
  text-indent: 0;
  font-size: 0.8rem;
  font-weight: bold;
  i{
    margin-right:5px;
  }
  span{
    margin-right:20px;
  }
}
p{
  line-height: 30px;
  color: #666666;
  font-size: 1rem;
}
.more{
  color: @dark_titleColor;
  font-weight: bold;
  font-size:0.8rem;
  text-indent: 0rem !important;
  cursor: pointer;
}
.more:hover{
  color:#000;
}
.page{
  text-align: center;
  /deep/.el-pager li.active, /deep/.el-pager li:hover{
    color:@dark_titleColor;
  }
}
</style>
