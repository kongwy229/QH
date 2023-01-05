<template>
      <div>
        <div class="cu-desc">
            <h2>招聘信息</h2>
            <h3 class="desc-title">招聘介绍</h3>
            <p>{{ newsList.info }}</p>
            <h3 class="desc-title">合作导师</h3>
            <p>{{ newsList.expert }}</p>
            <h3 class="desc-title">聘用职务</h3>
            <div style="margin-bottom:20px;" v-for="(item,index) in newsList.position" :key="index">
              <span style="font-weight:bold">{{item.name}}({{ item.count }}名)</span>
              <div v-html="item.content" style="line-height:1.5rem;"></div>
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
            content: `
<p style="font-weight:bold;">岗位职责</p>
<p>1.开展质量政策研究、开展质量基础设施研究，撰写研究报告； </p>
<p>2.负责组织并实施文献调研、实地调研工作，撰写调研报告；</p>
<p>3.协调负责质量与可靠性相关课题申请、实施和管理工作； </p>
<p>4.负责组织质量管理培训以及咨询相关工作；<p>
<p>5.协调负责研究院日常管理工作；</p>
<p>6.负责质量院外联工作，以及完成领导安排的各项任务。</p>
<p style="font-weight:bold;">聘用要求</p>
<p>1.硕士及以上学历学位，专业不限，管理、经济或工程专业博士学历优先；</p>
<p>2.具有高级职称或者同等的专业资质；</p>
<p>3.具有丰富的政策研究经历； </p>
<p>4.沟通能力强、协作能力强、做事高效细致，责任心强；<p>
<p>5.为人正直、诚实守信、服务意识强、有团队合作精神；</p>
<p>6.身体健康，能够适应出差。</p>
<p>7.符合清华大学职工专业岗位资质相关要求或具备相应水平；相关领域工作经验满3年。</p>
<p style="font-weight:bold;">所需专业</p>
<p>不限，管理或工程专业博士学历优先。</p>
            `
          },
          {
            name: '质量政策研究专员-I',
            count: 1,
            content: `
            <p style="font-weight:bold;">岗位职责</p>
<p>1.跟踪调研国际质量基础设施运转状况、质量政策实施情况；</p>
<p>2.撰写调查研究报告；</p>
<p>3.开展质量基础设施一站式服务跟踪研究；</p>
<p>4.开展一站式服务培训和咨询工作；</p>
<p>5.参与研究院相关咨询和培训工作；</p>
<p>6.参与其他相关研究课题；</p>
<p>7.完成研究院领导安排的其他工作任务。</p>

<p style="font-weight:bold;">聘用要求</p>
<p>1.硕士及以上学历，专业不限（管理类、经济或工程类相关专业优先)；</p>
<p>2.具有较强的中文写作功底和国际信息检索能力； </p>
<p>3.做事高效，责任心强，吃苦耐劳，耐心细致；  </p>
<p>4.为人正直、诚实守信、服务意识强、有团队合作精神； <p>
<p>5.身体健康，能够适应频繁出差。</p>

<p style="font-weight:bold;">所需专业</p>
<p>专业不限，管理类、经济或工程类相关专业优先。</p>
            `
          }
        ],
        salary: '<span>高级质量专员年薪底薪：20万-25万</span>', // 富文本内容,
        contact: '<p>应聘者请于2022年12月31日之前提交个人详细简历，包括个人基本情况、教育背景、工作经历、曾参与的项目、曾获得奖励。</p><p>联系人：赵老师</p><p>邮箱地址：</p><p>zhaoxin1203@mail.tsinghua.edu.cn。</p>'
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
    margin-bottom: 10px;
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
