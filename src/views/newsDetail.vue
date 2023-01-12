<template>
      <div>
        <h2 class="canClick" v-if="$route.name.indexOf('research') !== -1" @click="jumpTo($route.params.cate)">
          科学研究-{{cate[$route.params.cate].label}}
        </h2>
        <h2 class="canClick" v-else>
          新闻中心
        </h2>
        <h3>{{form.title}}</h3>
        <p class="time">
          <i class="el-icon-time"></i><span>{{form.time}}</span>
          <i class="el-icon-user"></i><span>{{form.author}}</span>
        </p>
        <div class="img">
          <div class="editor-content-view content" v-html="form.content">
          </div>
        </div>
      </div>
</template>
<script>
import { getNewsList, baseImgUrl } from '@/apis/index'
export default {
  name: 'newsDetail',
  data () {
    return {
      cate: {
        // policy: {
        //   label: '质量相关政策',
        //   key: 1
        // },
        // notice: {
        //   label: '通知公告',
        //   key: 2
        // },
        // forum: {
        //   label: '地方座谈会',
        //   key: 3
        // },
        // communication: {
        //   label: '企业交流',
        //   key: 4
        // },
        // lecture: {
        //   label: '学术讲座',
        //   key: 5
        // },
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
    console.log(this.$route.params.id)
    this.getList(this.$route.params.id)
  },
  watch: {
    '$route.params.id': function (v) {
      this.getList(v)
    }
  },
  methods: {
    getList (id) {
      console.log(id)
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
  font-size: 1.25rem;
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
  font-size: 0.8rem;
  font-weight: bold;
  i{
    margin-right:5px;
  }
  span{
    margin-right:20px;
  }
}
</style>
