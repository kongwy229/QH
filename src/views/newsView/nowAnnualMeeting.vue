<template>
      <div>
        <h2>{{info.title}}</h2>
        <div>
          <h3>年会简介</h3>
          <p>{{info.content}}</p>
        </div>
        <div>
          <h3>年会时间</h3>
          <p>{{info.time}}</p>
        </div>
        <div>
           <h3>年会报名</h3>
           <div class="join">
            <div>
              <p>{{info.joinWay}}</p>
            </div>
            <div class="img">
              <img :src="info.qrcode"/>
            </div>
           </div>
        </div>
        <div class="people">
          <h3>组委会名单</h3>
          <div class="people-list">
            <div v-for="item in peopleList" :key="item.id">
                <h3>{{item.name}}</h3>
                <p>{{item.title}}</p>
                <p class="limit">{{item.desc}}</p>
                <p class="more" @click="jumpTo(item.id)">查看更多 <i class="el-icon-right"></i></p>
            </div>
          </div>
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
      info: {},
      joinM: [
        '1. 用户注册：通会议网站浏览会议注册页，填写注册信息提交即可。',
        '2. 在会议开始前，组委会通过电子邮箱给已注册用户发送会议链接和密码。',
        '3. 使用会议链接和密码进行登陆参会。',
        '次会议线上参会免收注册费。注册截止日期：2022年8月13日 24:00'
      ],
      peopleList: [
        {
          id: '1',
          name: '李京山',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '李京山首先对智能制造的概念和范畴进行了阐述，并且指出了智能制造在三个方面的关注点：一是智慧、互联，以数据化作为支撑，将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '2',
          name: '郑力',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '李京山首先对智能制造的概念和范畴进行了阐述，并且指出了智能制造在三个方面的关注点：一是智慧、互联，以数据化作为支撑，将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '3',
          name: '李志忠',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '5',
          name: '王凯波',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '6',
          name: '李彦夫',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '7',
          name: '李乐飞',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '4',
          name: '吴甦',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '李京山首先对智能制造的概念和范畴进行了阐述，并且指出了智能制造在三个方面的关注点：一是智慧、互联，以数据化作为支撑，将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        },
        {
          id: '8',
          name: '邓柯',
          avator: '../../assets/img/people.png',
          title: '教授',
          desc: '将数据采集、分析，并且实现数据在数字化应用中的最优控制和调度；'
        }
      ]
    }
  },
  mounted () {
    getAnnul({ isCurrent: 1 })
      .then((res) => {
        this.info = res.content[0]
        this.info.qrcode = this.info.qrcode.indexOf('http') === -1 ? baseImgUrl + this.info.qrcode : this.info.qrcode
      })
  },
  methods: {
    jumpTo (id) {
      this.$router.push({ name: 'peopleDetail', params: { id: id } })
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
p{
  line-height: 30px;
  text-indent: 2rem;
  color: #666666;
  font-size: 16px;
}
.join{
  display: flex;
  justify-content: space-between;
  img{
    width:250px;
  }
}
.people-list{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  div{
    margin-bottom: 30px;
    flex-basis: 30%;
    h3{
      font-weight: normal;
    }
    p{
      text-indent: 0;
    }
  }
}
.more{
  color: @dark_titleColor;
  font-weight: bold;
  font-size:1rem;
  cursor: pointer;
}
.more:hover{
  color:#000;
}
@media screen and (max-width: 1000px) {
  .join{
     display: block;
  }
  .people-list{
    display: block;
  }
}
</style>
