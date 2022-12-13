<template>
      <div>
        <div class="news-con" v-for="item in newsList" :key="item.id">
          <h3>{{item.title}}</h3>
          <p class="time">{{item.time}}</p>
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
          <p class="detail"><i class="el-icon-s-custom"></i><span>{{item.author}}</span></p>
        </div>
      </div>
</template>
<script>
export default {
  name: 'desc',
  data () {
    return {
      isMobile: false,
      newsList: [
        {
          id: '1',
          img: '../../assets/img/start.jpg',
          title: '2021年质量院年会',
          time: '2021年12月3日',
          author: 'isak',
          cate: '时事',
          desc: '美国核管理委员会（NRC）刚刚发布了一份报告，得出结论，NGA东部地面运动特征模型是…'
        },
        {
          id: '2',
          img: '../../assets/img/start.jpg',
          title: '2020年质量院年会',
          time: '2020年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'Wadie Chalgham在加州大学洛杉矶分校2020年大满贯决赛上获得观众选择奖。'
        },
        {
          id: '3',
          img: '../../assets/img/start.jpg',
          title: '2019年质量院年会',
          time: '2019年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。'
        },
        {
          id: '4',
          img: '../../assets/img/start.jpg',
          title: '2018年质量院年会',
          time: '2018年12月3日',
          author: 'isak',
          cate: '时事',
          desc: 'B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。B.John Garrick风险科学研究所诚挚邀请您参加Nathan Siu博士关于“NRC的PRA和风险知情决策：一些趋势和挑战”的研讨会。研讨会将于2020年2月21日下午1点至2点在加州大学洛杉矶分校工程五号楼5101室举行。'
        }
      ]
    }
  },
  methods: {
    jumpTo (id) {
      this.$router.push({ name: 'AMDetail', params: { id: id } })
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
