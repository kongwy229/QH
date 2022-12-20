<template>
      <div>
        <div class="people-detail">
            <div>
              <img :src="avator"/>
            </div>
            <div class="con-desc">
                <h3>{{name}}</h3>
                <p>邮件:{{email}}</p>
                <p>{{brief}}</p>
            </div>
        </div>
        <div v-html="intro">
        </div>
      </div>
</template>
<script>
import { getPeopleDetail, baseImgUrl } from '@/apis/index'
export default {
  name: 'peopleDe',
  data () {
    return {
      name: '',
      avator: '',
      brief: '',
      email: '',
      intro: ''
    }
  },
  mounted () {
    getPeopleDetail(this.$route.params.id).then((res) => {
      console.log(this.$route.params.id, res)
      const item = res.content[0]
      this.name = item.name
      this.brief = item.brief
      this.email = item.email
      this.intro = item.intro
      if (item.img && item.img.indexOf('http') === -1) {
        this.avator = baseImgUrl + item.img
      } else {
        this.avator = item.img
      }
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
.people-detail{
  padding-top:50px;
  display: flex;
  /* justify-content: space-between; */
  img{
    max-width: 170px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    margin-right:10px;
  }
}
.con-desc{
  padding: 10px;
  h3{
    margin-top:-10px;
  }
}
</style>
