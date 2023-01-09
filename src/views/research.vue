<template>
      <div>
        <h2>{{cate[$route.params.cate]}}</h2>
        <div class="img">
          <img src="../../assets/img/start.jpg"/>
        </div>
        <div v-for="item in info" :key="item.title">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
      </div>
</template>
<script>
export default {
  name: 'research',
  data () {
    return {
      cate: {
        MQPR: '宏观质量政策研究',
        RQMCT: '质量管理与控制技术研究',
        RASR: '可靠性与保障性研究',
        HFSR: '人因与安全研究',
        ROSQ: '服务质量研究'
      },
      info: [
        {
          title: '简介',
          content: '清华大学29日与国家质检总局签署合作协议，共建“质量与可靠性研究院”。这是清华主动应对质量与可靠性问题，加强相关研究的重要举措。清华大学校长陈吉宁表示，质量发展是兴国之道、强国之策，反映一个国家的综合实力，是企业和产业核心竞争力的体现，也是国家文明程度的重要标志。质量与可靠性学科对于国家经济、社会发展具有重要意义，关系到众多行业的发展。清华大学与国家质检总局共建“质量与可靠性研究院”是学校发展战略的重要组成部分。'
        },
        {
          title: '项目',
          content: '研究院将秉持开放式建院方针，在清华大学和国家质检总局的共同领导下，依托清华大学工业工程系开展工作，充分调动与整合清华大学多学科的科研资源，发挥清华大学的高水平人才和国际交流平台优势，开展宏观质量政策与微观质量技术的跨学科、多领域、多层次研究。'
        },
        {
          title: '科研成果',
          content: '清华大学“质量与可靠性研究院”将致力于传播正确的国民质量与可靠性意识，培养国际化的质量与可靠性人才，开展包括质量战略、质量工程和管理的研究，以可靠性工程技术为核心，结合重大工程项目，开展应用技术创新。研究院将力争建设成为国际化学术交流平台和全球最具影响的可靠性创新机构，建设成高水平质量发展战略研究咨询机构和高层次质量与可靠性研究应用平台，为服务经济社会发展、推动建设质量强国做出贡献。'
        }
      ]
    }
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
