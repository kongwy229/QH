<template>
      <div>
        <div class="news-con" v-for="item in newsList" :key="item.id">
          <h3>{{item.title}}</h3>
          <p class="time">{{item.updateTime}}</p>
          <div class="container">
            <div class="img">
              <img :src="item.previewImg"/>
            </div>
            <div class="desc">
              <p>{{item.content}}</p>
               <p class="more" @click="jumpTo(item.id)">查看更多 <i class="el-icon-right"></i></p>
            </div>
          </div>
          <hr/>
          <p class="detail"><i class="el-icon-s-custom"></i><span>{{item.author}}</span></p>
        </div>
      </div>
</template>
<script>
import { getAnnul, baseImgUrl } from '@/apis/index'
export default {
  name: 'desc',
  data () {
    return {
      isMobile: false,
      newsList: [
      ]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList (id) {
      this.newsList = []
      getAnnul({ isCurrent: 0 })
        .then((res) => {
          console.log(res)
          res.content.forEach((item) => {
            if (item.previewImg && item.previewImg.indexOf('http') === -1) {
              item.previewImg = baseImgUrl + item.previewImg
            }
            this.newsList.push(item)
          })
        })
    },
    jumpTo (id) {
      this.$router.push({ name: 'AMDetail', params: { id: id } })
    }
  }
}
</script>

<style lang = "less" scoped>
.news-con{
  margin-bottom:50px;
}
h2{
  font-size:1.25rem;
  color: @dark_bgColor;
}
h3{
  color: @dark_bgColor;
  font-size: 1.0rem;
  font-weight: bolder;
  margin: 20px 0;
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
    font-size: 0.8rem;
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
}
p{
  line-height: 30px;
  text-indent: 2rem;
  color: #666666;
  font-size: 0.8rem;
}
.more{
  color: @dark_titleColor;
  text-indent: 0rem;
  font-weight: bold;
  font-size:0.8rem;
  cursor: pointer;
}
.more:hover{
  color:#000;
}

</style>
