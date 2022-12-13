<template>
    <div class="peopleInfo">
        <h3>专家介绍</h3>
        <el-carousel indicator-position="none" :autoplay="false">
            <el-carousel-item v-for="(item,index) in list" :key="index">
            <div class="container">
                <div v-for="sub in item" :key="sub.id" class="con-p">
                    <div class="img">
                      <img :src="sub.img"/>
                    </div>
                    <div>
                        <h3>{{sub.name}}</h3>
                        <p>{{sub.position}}</p>
                        <p class="limit">{{sub.intro}}</p>
                        <p class="more" @click="jumpTo(sub.id)">查看更多 <i class="el-icon-right"></i></p>
                    </div>
                </div>
            </div>
            </el-carousel-item>
        </el-carousel>
        <h3 style="margin-top:50px;">友情链接</h3>
        <div class="friendLink">
            <p v-for="item in links" :key="item.id">{{item.name}}</p>
        </div>
    </div>
</template>
<script>
import { baseImgUrl } from '@/apis/index'
export default {
  props: ['experts', 'links'],
  name: 'peopleInfo',
  data () {
    return {
      list: [
        // [
        //   {
        //     id: '1',
        //     name: '李京山',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/8/AF/AC/F7ED1289C01975B217E08DED763_56AC2176_3291.jpg',
        //     title: 'Gavriel Salvendy讲席教授，系主任',
        //     desc: '智能制造与智慧医疗服务系统的建模，分析，控制，和优...'
        //   },
        //   {
        //     id: '2',
        //     name: '郑力',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/0/05/27/2946A07A6F0347D4BC18EA08940_C70C9493_2607.jpg?e=.jpg',
        //     title: '教授，副校长',
        //     desc: '生产与物流系统分析，企业信息化，半导体/电子制造生...'
        //   },
        //   {
        //     id: '3',
        //     name: '李志忠',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/9/CD/A6/2E4D27C7B701CC56C685C15644F_4100F4C3_2D78.jpg?e=.jpg',
        //     title: '教授，系党委书记',
        //     desc: '复杂工业系统的界面设计、人的失误与可靠性、系统安全...'
        //   }
        // ],
        // [
        //   {
        //     id: '5',
        //     name: '王凯波',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/7/E7/5C/333003110E1294A8608658FCC56_0A847D55_3116.jpg?e=.jpg',
        //     title: '教授',
        //     desc: '统计质量控制，多变量统计过程控制， 数据驱动的复杂...'
        //   },
        //   {
        //     id: '6',
        //     name: '李彦夫',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/0/6E/B4/52DCE89B89B420E4C6C74678B22_81971805_3E72.jpg',
        //     title: '教授',
        //     desc: '系统可靠性、预测性维护、质量政策'
        //   },
        //   {
        //     id: '7',
        //     name: '李乐飞',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/2/8B/9B/CCB2BB4DE9F036F3B45AC38FF13_05D1C655_326F.jpeg?e=.jpg',
        //     title: '副教授，科研副系主任',
        //     desc: '智能交通，服务运作与管理，复杂系统建模与仿真'
        //   }
        // ],
        // [
        //   {
        //     id: '4',
        //     name: '吴甦',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/5/36/21/F5EBE04CD5C34E725F8CBD3D267_AF9AB41C_34E4.jpg?e=.jpg',
        //     title: '教授',
        //     desc: '制造工程，质量管理，可靠性与设备'
        //   },
        //   {
        //     id: '8',
        //     name: '邓柯',
        //     avator: 'https://www.ie.tsinghua.edu.cn/__local/F/EF/54/CF6ED1C1F5499BD1AE356F41B8A_A2E48CA9_391D.jpg?e=.jpg',
        //     title: '副教授',
        //     desc: '贝叶斯统计、统计计算、生物信息、文本分析、人工智能...'
        //   }
        // ]
      ]
    }
  },
  watch: {
    experts: function (val) {
      console.log(val)
      const list = [...this.list]
      let len = list.length
      // 保证三个一组
      if (len === 0 || list[len - 1].length === 3) {
        list.push([])
      } else {
        len = len - 1
      }
      val.forEach(item => {
        item.img = baseImgUrl + item.img
        if (list[len].length === 3) {
          len = len + 1
          list.push([])
        }
        list[len].push(item)
      })
      this.list = [...list]
    }
  },
  methods: {
    jumpTo (id) {
      this.$router.push({ name: 'peopleDetail', params: { id: id } })
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
        font-size:1.0rem;
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
    /deep/.el-carousel__container{
      border:1px solid #fff;
      height: 200px;
    }
    h3{
        color: @dark_bgColor;
        font-size: 1.0rem;
    }
    .container{
        width: 100%;
        display: flex;
        .con-p{
            width: 33%;
            display: flex;
            div{
                padding: 0px 20px 0px 20px;
            }
            .img{
              width:100%;
              padding: 0;
              max-width: 152px;
              img{
                width:100%;
              }
            }
            h3{
                color:#956609;
                font-size: 1.0rem;
            }
            p{
                line-height: 1.25rem;
                color:#666666;
                font-size:0.8rem;
            }
            .limit{
                max-height:120px;
                overflow: hidden;
            }
            .more{
                color: #956609;
                font-weight: bold;
                font-size:0.8rem;
                cursor: pointer;
            }
            .more:hover{
                color:#000;
            }
        }
    }
}
</style>
