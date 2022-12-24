<template>
      <div>
        <h2>质量与可靠性研究院简介</h2>
        <div class="img">
          <img :src="imgUrl" width="50%"/>
        </div>
        <div v-for="item in info" :key="item.title">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
      </div>
</template>
<script>
import { baseImgUrl, getOverview } from '@/apis/index'
export default {
  name: 'desc',
  data () {
    return {
      imgUrl: '',
      info: []
    }
  },
  mounted () {
    getOverview().then((res) => {
      console.log(res)
      res.forEach(item => {
        if (item.img) {
          item.img = baseImgUrl + item.img
          this.imgUrl = item.img
        } else {
          this.info.push(item)
        }
      })
    })
  }
}
</script>

<style lang = "less" scoped>
h2{
  color: @dark_bgColor;
  font-size: 1.5rem;
}
h3{
  color: @dark_bgColor;
  font-size: 1.0rem;
  font-weight: bolder;
  margin: 20px 0;
}
.img{
  text-align: center;
}
p{
  line-height: 30px;
  text-indent: 2rem;
  color: #666666;
  font-size: 1.0rem;
}
</style>
