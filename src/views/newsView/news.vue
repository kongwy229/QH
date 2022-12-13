<template>
      <div>
        <h2>新闻中心-{{cate[$route.params.cate]}}</h2>
        <div class="news-con" v-for="item in newsList" :key="item.id">
          <h3 @click="jumpTo(item.id)">{{item.title}}</h3>
          <p class="time">
            <i class="el-icon-time"></i><span>{{item.time}}</span>
            <i class="el-icon-user"></i><span>{{item.author}}</span>
          </p>
          <div class="container">
            <div class="img">
              <img src="../../assets/img/start.jpg"/>
            </div>
            <div class="desc">
              <p>{{item.desc}}</p>
               <p class="more" @click="jumpTo(item.id)">查看更多 <i class="el-icon-right"></i></p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
</template>
<script>
export default {
  name: 'desc',
  data () {
    return {
      isMobile: false,
      cate: {
        policy: '质量相关政策',
        notice: '通知公告',
        forum: '地方座谈会',
        communication: '企业交流',
        lecture: '学术讲座'
      },
      newsList: [
        {
          id: '1',
          img: '../../assets/img/start.jpg',
          title: '美国核管理委员会验证的NGA-East地震地面运动模型',
          time: '2022年12月3日',
          author: 'isak',
          cate: '时事',
          desc: '美国核管理委员会（NRC）刚刚发布了一份报告，得出结论，NGA东部地面运动特征模型是…'
        },
        {
          id: '2',
          img: '../../assets/img/start.jpg',
          title: 'Wadie Chalgham在加州大学洛杉矶分校2020年大满贯决赛上获得观众选择奖',
          time: '2022年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'Wadie Chalgham在加州大学洛杉矶分校2020年大满贯决赛上获得观众选择奖。'
        },
        {
          id: '3',
          img: '../../assets/img/start.jpg',
          title: '研讨会邀请：PRA和NRC风险知情决策：一些趋势和挑战',
          time: '2022年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。'
        },
        {
          id: '4',
          img: '../../assets/img/start.jpg',
          title: '美国核管理委员会验证的NGA-East地震地面运动模型',
          time: '2022年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。'
        }
      ]
    }
  },
  methods: {
    jumpTo (id) {
      this.$router.push({ name: 'newsDetail', params: { id: id } })
    }
  }
}
</script>

<style lang = "less" scoped>
.news-con{
  margin-bottom:50px;
}
h2{
  color: @dark_bgColor;
}
h3{
  color: @dark_bgColor;
  font-size: 1.25rem;
  font-weight: bolder;
  margin: 20px 0;
  cursor: pointer;
}

.container{
  display: flex;
  .img{
    width:300px;
    text-align: center;
    img{
      width:300px;
    }
  }
  .desc{
    padding-left:25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
@media screen and (max-width: 1000px) {
  .container{
     display: block;
     .desc{
      padding-left:0px;
    }
  }
}
.detail{
    color: #956609;
    font-weight: bold;
    font-size: 1.0rem;
    span{
      padding-left:10px;
    }
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
p{
  line-height: 30px;
  color: #666666;
  font-size: 1rem;
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

</style>
