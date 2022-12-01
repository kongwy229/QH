<template>
    <div class="peopleInfo">
        <h3>专家介绍</h3>
        <el-carousel indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="(item,index) in list" :key="index">
            <div class="container">
                <div v-for="sub in item" :key="sub.id" class="con">
                    <img src="../../assets/img/people.png"/>
                    <div>
                        <h3>{{sub.name}}</h3>
                        <p>{{sub.title}}</p>
                        <p class="limit">{{sub.desc}}</p>
                        <p class="more">查看更多 <i class="el-icon-right"></i></p>
                    </div>
                </div>
            </div>
            </el-carousel-item>
        </el-carousel>
        <h3 style="margin-top:50px;">友情链接</h3>
        <div class="friendLink">
            <p v-for="item in friendLink" :key="item.title">{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'peopleInfo',
  data () {
    return {
      friendLink: [
        {
          title: '国家市场监督管理总局',
          href: ''
        },
        {
          title: '清华大学工业工程系链接',
          href: ''
        },
        {
          title: '合作单位1',
          href: ''
        },
        {
          title: '合作单位2',
          href: ''
        },
        {
          title: '合作单位3',
          href: ''
        },
        {
          title: '合作单位4',
          href: ''
        },
        {
          title: '合作单位5',
          href: ''
        }
      ],
      list: [
        [
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
          }
        ],
        [
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
          }
        ],
        [
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
      ]
    }
  }
}
</script>
<style scoped lang="less">
    @light_bgColor:#7e2a8a;
    @dark_bgColor:#46228e;
    @normal_titleColor:#d69909;
.friendLink {
    display: flex;
    flex-wrap: wrap;
    p{
        font-size:1.2rem;
        color: #956609;
        overflow: hidden;
        white-space: wrap;
        padding:0px 20px;
        margin-left: 3.0rem;
    }
}
.peopleInfo{
    width:100%;
    margin: 0 auto;
    h3{
        color: @dark_bgColor;
    }
    .container{
        width: 100%;
        display: flex;
        .con{
            display: flex;
            div{
                padding: 0px 20px 0px 20px;
            }
            h3{
                color:#956609;
                font-size: 1.5rem;
            }
            p{
                line-height: 30px;
                color:#666666;
                font-size:16px;
            }
            .limit{
                max-height:120px;
                overflow: hidden;
            }
            .more{
                color: #956609;
                font-weight: bold;
                font-size:1.0rem;
                cursor: pointer;
            }
            .more:hover{
                color:#000;
            }
        }
    }
}
</style>
