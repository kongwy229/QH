<template>
      <div>
        <h2>质量与可靠性研究院发展历程</h2>
        <el-timeline>
          <el-timeline-item  v-for="item in info" :key="item.time" :timestamp="item.time" placement="top">
            <el-card style="text-align:center;">
              <h3>{{item.title}}</h3>
              <img :src="item.img" width="500px"/>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
</template>
<script>
import { baseImgUrl, getDevelop } from '@/apis/index'
export default {
  name: 'develop',
  data () {
    return {
      info: [
        // {
        //   title: '质量院成立',
        //   time: '2014/9/30',
        //   img: ''
        // },
        // {
        //   title: '质量院成立',
        //   time: '2014/10/3',
        //   img: ''
        // },
        // {
        //   title: '质量院成立',
        //   time: '2014/2/1',
        //   img: ''
        // }
      ]
    }
  },
  mounted () {
    getDevelop().then((res) => {
      console.log(res)
      res.forEach(item => {
        if (item.img) {
          item.img = baseImgUrl + item.img
        }
        this.info.push(item)
      })
    })
  }
}
</script>

<style lang = "less" scoped>
h2{
  color: @dark_bgColor;
}
h3{
  color: @dark_bgColor;
  font-size: 1.25rem;
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
  font-size: 16px;
}
/deep/.el-timeline-item{
  position: relative;
  padding-bottom: 20px;
  width: 80%;
  h3{
    color:#000;
  }
}
/deep/.el-timeline-item__timestamp{
    color: #46228e;
    line-height: 1;
    font-size: 1rem;
}
</style>
