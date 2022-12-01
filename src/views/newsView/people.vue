<template>
      <div>
        <div v-for="item in list" :key="item.cat">
          <h3 class="con-title">{{item.cat}}</h3>
          <div class="container">
            <div v-for="p in item.people" :key="p.name" class="con" :class="{limit:item.people.length>1}">
                <div>
                  <img src="../../assets/img/default.png"/>
                </div>
                <div class="con-desc">
                    <h3>{{p.name}}</h3>
                    <p>{{p.desc}}</p>
                    <p>邮件:{{p.email}}</p>
                    <p v-show="p.pwl">个人网页:{{p.pwl}}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'desc',
  data () {
    return {
      desc: '加里克研究所高级研究员的职位是为杰出的工程师、科学家和其他在一个或多个风险科学领域取得国际知名地位的专业人士设立的。高级研究员个人和集体的主要作用是为加里克研究所提供关于研究计划、具体项目的执行和教育活动的高级建议和指导。高级研究员预计将在研究所所在地花费部分时间，以帮助培养在开发、推广和应用风险科学方面的卓越文化和领导力。',
      list: [
        {
          cat: '首席研究员',
          people: [
            {
              name: '李彦夫',
              avator: '',
              desc: '李严福博士现任清华大学质量与可靠性研究所副所长，也是清华大学工业工程系（IE）的正教授。2010年，他在新加坡国立大学获得了工业工程博士学位。2011年至2016年，他是法国中央苏佩莱工业工程实验室的教员。他的研究领域包括RAMS（可靠性、可用性、可维护性、安全性）评估和优化，以及在能源系统、运输系统、，李博士发表了100多篇研究论文，其中包括50多篇经同行评审的国际期刊论文，H指数为26。他目前是《IEEE可靠性学报》副主编、IEEE可靠性协会AdCom成员、IEEE和IISE高级成员以及INFORMS成员。他是中国系统工程学会系统可靠性分会副会长。他是资助机构的专家考官，包括国家自然科学基金委员会、荷兰研究委员会（NWO）。他是多个政府项目的首席研究员（PI），包括中国国家自然科学基金会资助的重点项目、中国国家重点研发计划项目，并参与了欧盟或法国资助机构支持的多个项目。他在工业研究方面也很有经验，合作伙伴包括华为、中国铁路、大众、三菱重工、EDF、阿尔斯通等。总资金超过1000万元人民币。',
              email: 'liyanfu@tsinghua.edu.cn',
              pwl: 'http://www2.ie.tsinghua.edu.cn/liyanfu/indexe.htm'
            }
          ]
        },
        {
          cat: '博士后助理',
          people: [
            {
              name: 'Mu-Xia1',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia2',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia3',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia4',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            }
          ]
        },
        {
          cat: '研究生，博士',
          people: [
            {
              name: 'Mu-Xia1',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia2',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia3',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia4',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia5',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            },
            {
              name: 'Mu-Xia6',
              avator: '',
              desc: '他于2010年在华南理工大学（SCUT）获得理学学士学位，2012年和2013年分别在南特大学和SCUT获得理学硕士学位，2019年在巴黎萨克莱大学获得哲学博士学位。自2020年以来，他一直在清华大学担任工业工程系博士后研究员。他目前的研究兴趣包括工业和通信系统的可靠性评估和优化、鲁棒优化和近似算法设计。',
              email: 'muxiasun@mail.tsinghua.edu.cn',
              pwl: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang = "less" scoped>
@light_bgColor:#7e2a8a;
@dark_bgColor:#46228e;
@normal_titleColor:#d69909;
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
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.con{
  display: flex;
  margin-top:50px;
  justify-content: space-around;
  img{
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    margin-right:10px;
  }
}
.con-title{
  margin-top:40px;
}
.con-desc{
  padding: 10px;
  h3{
    margin-top:-10px;
  }
}
.limit{
  flex-basis: 40%;
}
</style>
