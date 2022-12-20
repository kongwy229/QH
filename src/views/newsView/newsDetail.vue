<template>
      <div>
        <h2 class="canClick" @click="jumpTo($route.params.cate)">
          {{$route.name.indexOf('research') === -1 ? '新闻中心' :'科学研究'}}-{{cate[$route.params.cate]}}</h2>
        <h3>{{form.title}}</h3>
        <p class="time">
          <i class="el-icon-time"></i><span>{{form.time}}</span>
          <i class="el-icon-user"></i><span>{{form.author}}</span>
        </p>
        <div class="img">
          <img :src="form.previewImg"/>
          <div class="content" v-html="form.content">
          </div>
        </div>
      </div>
</template>
<script>
import { getNewsList, baseImgUrl } from '@/apis/index'
export default {
  name: 'desc',
  data () {
    return {
      cate: {
        policy: '质量相关政策',
        notice: '通知公告',
        forum: '地方座谈会',
        communication: '企业交流',
        lecture: '学术讲座'
      },
      form: {
        title: '',
        time: '',
        content: '',
        author: '',
        id: '',
        previewImg: ''
      }
    }
  },
  mounted () {
    this.getList(this.$route.params.id)
  },
  watch: {
    '$route.params.id': function (v) {
      this.getList(v)
    }
  },
  methods: {
    getList (id) {
      this.form = {
        title: '',
        time: '',
        content: '',
        author: '',
        previewImg: '',
        id: id
      }
      getNewsList({ id: id })
        .then((res) => {
          const data = res.content[0]
          this.form = {
            title: data.title,
            time: data.updateTime,
            content: data.content,
            author: data.author,
            previewImg: data.previewImg && data.previewImg.indexOf('http') === -1 ? baseImgUrl + data.previewImg : data.previewImg,
            id: id
          }
        })
    },
    jumpTo (cate) {
      this.$router.push({ name: 'newsCate', params: { cate: cate } })
    }
  }
}
</script>

<style lang = "less" scoped>
.canClick{
  cursor: pointer;
}
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
  img{
    max-width: 50%;
  }
  .content{
    text-align: left;
  }
}
p{
  line-height: 30px;
  text-indent: 2rem;
  color: #666666;
  font-size: 16px;
}
.time{
  color:@dark_titleColor;
  text-indent: 0;
  font-size: 1rem;
  font-weight: bold;
  i{
    margin-right:5px;
  }
  span{
    margin-right:20px;
  }
}
</style>
