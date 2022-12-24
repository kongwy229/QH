<template>
      <div>
        <h2>{{info.title}}</h2>
        <div class="img">
          <img :src="info.previewImg" width="50%"/>
        </div>
        <div>
          <h3>年会简介</h3>
          <p>{{info.content}}</p>
        </div>
        <div>
          <h3>年会时间</h3>
          <p>{{info.time}}</p>
        </div>
        <div>
          <h3>会议议程</h3>
          <div class="editor-content-view" v-html="info.agenda">
          </div>
        </div>
      </div>
</template>
<script>
import { getAnnul, baseImgUrl } from '@/apis/index'
export default {
  name: 'desc',
  data () {
    return {
      info: {}
    }
  },
  mounted () {
    getAnnul({ id: this.$route.params.id })
      .then((res) => {
        this.info = res.content[0]
        this.info.previewImg = this.info.previewImg.indexOf('http') === -1 ? baseImgUrl + this.info.previewImg : this.info.previewImg
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
</style>
