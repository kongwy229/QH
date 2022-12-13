<template>
      <div>
        <h2 class="canClick" @click="jumpTo($route.params.cate)">新闻中心-{{cate[$route.params.cate]}}</h2>
        <h3>{{title}}</h3>
        <p class="time">
          <i class="el-icon-time"></i><span>{{time}}</span>
          <i class="el-icon-user"></i><span>{{author}}</span>
        </p>
        <div class="img">
          <img src="../../assets/img/start.jpg"/>
          <div v-html="content">
          </div>
        </div>
      </div>
</template>
<script>
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
      title: '美国核管理委员会验证的NGA-East地震地面运动模型',
      time: '2022年12月3日',
      content: '<p><br></p><p><br></p><p style="text-align: start;">The UCLA Natural Hazards Risk and Resiliency Research Center (NHR3) and its partners are holding a free online workshop to release a <strong>new web portal</strong> to access the NGA-Subduction ground-motion time series. The user will be able to develop suites of ground motions based on either the new NGA-Subduction Ground-Motion Models or a user-defined target spectrum for selecting, scaling, and downloading ground motions.</p><p style="text-align: start;">Dr. Silvia Mazzoni, the developer of the web portal, will present a one-hour workshop on <strong>Wednesday December 7, 10am-11am (Pacific Time)</strong>. &nbsp;</p><p style="text-align: start;">Please register (free of charge) below:</p><p style="text-align: start; line-height: 3;"><span style="color: rgb(255, 255, 255); background-color: rgb(106, 57, 201); font-size: 22px;"><strong> &nbsp; &nbsp;</strong></span><a href="https://github.com/Tencent/cherry-markdown/issues" target="_blank"><span style="color: rgb(255, 255, 255); background-color: rgb(106, 57, 201); font-size: 22px;"><strong>加入试试 &nbsp; </strong></span></a><span style="color: rgb(255, 255, 255); background-color: rgb(106, 57, 201); font-size: 22px;"><strong> </strong></span></p>',
      author: 'isak',
      id: '1'
    }
  },
  methods: {
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
