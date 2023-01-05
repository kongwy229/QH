<template>
      <div>
        <div class="cu-desc">
            <h2>招聘信息</h2>
            <h3 class="desc-title">招聘介绍</h3>
            <p>{{ newsList.info }}</p>
            <h3 class="desc-title">合作导师</h3>
            <p>{{ newsList.expert }}</p>
            <h3 class="desc-title">聘用职务</h3>
            <div v-for="(item,index) in newsList.position" :key="index">
              <span>职务名称:{{item.name}}({{ item.count }}名)</span>
              <div v-html="item.content"></div>
            </div>
            <div>
              <h3 class="desc-title">待遇</h3>
              <div v-html="newsList.salary"></div>
              <h3 class="desc-title">联系方式</h3>
              <div v-html="newsList.contact"></div>
            </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'contactUs',
  data () {
    return {
      info: {
        name: '',
        email: '',
        message: ''
      },
      newsList: {
        info: '清华大学质量与可靠性研究院因发展需要，招聘1名高级质量专员、2名质量政策研究专员，开展相关领域研究工作。',
        expert: '李彦夫  清华大学质量与可靠性研究院 清华大学工业工程系 教授',
        position: [
          {
            name: '高级质量专员',
            count: 1,
            content: '<span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span><span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span><span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span>'
          },
          {
            name: '质量政策研究专员',
            count: 1,
            content: '<span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span><span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span><span>开展质量政策研究、开展质量基础设施研究，撰写研究报告；</span>'
          }
        ],
        salary: '<span>高级质量专员年薪底薪：20万-25万</span>', // 富文本内容,
        contact: '<p>应聘者请于2022年12月31日之前提交个人详细简历，包括个人基本情况、教育背景、工作经历、曾参与的项目、曾获得奖励。</p><p>联系人：赵老师；</p><p>邮箱地址：</p><p>zhaoxin1203@mail.tsinghua.edu.cn。</p>'
      }
    }
  }
}
</script>

<style lang = "less" scoped>
@light_bgColor:#7e2a8a;
@dark_bgColor:#46228e;
@normal_titleColor:#d69909;
  h2{
    color:@dark_bgColor;
  }
  .cu-desc {
    margin-top: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
      .desc-title{
        color: @dark_bgColor;
      }
    }

</style>
