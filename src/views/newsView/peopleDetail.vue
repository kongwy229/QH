<template>
      <div>
        <div class="people-detail">
            <div>
              <img :src="avator"/>
            </div>
            <div class="con-desc">
                <h3>{{name}}</h3>
                <p>邮件:{{email}}</p>
                <p v-show="pwl">个人网页:{{pwl}}</p>
                <p>{{desc}}</p>
            </div>
        </div>
      </div>
</template>
<script>
import { getPeopleDetail } from '@/apis/index'
export default {
  name: 'peopleDe',
  data () {
    return {
      name: '李彦夫',
      avator: 'https://www.ie.tsinghua.edu.cn/__local/0/6E/B4/52DCE89B89B420E4C6C74678B22_81971805_3E72.jpg',
      desc: '李严福博士现任清华大学质量与可靠性研究所副所长，也是清华大学工业工程系（IE）的正教授。2010年，他在新加坡国立大学获得了工业工程博士学位。2011年至2016年，他是法国中央苏佩莱工业工程实验室的教员。他的研究领域包括RAMS（可靠性、可用性、可维护性、安全性）评估和优化，以及在能源系统、运输系统、，李博士发表了100多篇研究论文，其中包括50多篇经同行评审的国际期刊论文，H指数为26。他目前是《IEEE可靠性学报》副主编、IEEE可靠性协会AdCom成员、IEEE和IISE高级成员以及INFORMS成员。他是中国系统工程学会系统可靠性分会副会长。他是资助机构的专家考官，包括国家自然科学基金委员会、荷兰研究委员会（NWO）。他是多个政府项目的首席研究员（PI），包括中国国家自然科学基金会资助的重点项目、中国国家重点研发计划项目，并参与了欧盟或法国资助机构支持的多个项目。他在工业研究方面也很有经验，合作伙伴包括华为、中国铁路、大众、三菱重工、EDF、阿尔斯通等。总资金超过1000万元人民币。',
      email: 'liyanfu@tsinghua.edu.cn',
      pwl: 'http://www2.ie.tsinghua.edu.cn/liyanfu/indexe.htm',
      content: ''
    }
  },
  mounted () {
    getPeopleDetail(this.$route.params.id).then((res) => {
      console.log(this.$route.params.id, res)
      const item = res.content[0]
      this.name = item.name
      this.desc = item.content
      this.email = item.email
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
