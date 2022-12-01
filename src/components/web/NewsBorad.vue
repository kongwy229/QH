<template>
    <div class="news">
        <div class="news-title">
            <h3>专家介绍</h3>
        </div>
        <div class="news-container">
            <div v-for="(item,index) in list" :key="index" class="news-deatil">
                    <img :src="item.img"/>
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                    <p class="more">查看更多 <i class="el-icon-right"></i></p>
                    <p class="time">{{item.time}}</p>
                </div>
            </div>
        </div>
        <div class="news-title">
            <h3>友情链接</h3>
        </div>
        <div class="friendLink">
            <p v-for="item in friendLink" :key="item.title">{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'newsBorad',
  data () {
    return {
      list: [
        {
          img: 'https://www.ie.tsinghua.edu.cn/__local/E/54/99/6F63A8372C1FB6C024FD1EDFDF7_146BE32C_404A3.jpg',
          title: '清华大学工业工程系举办2022年毕业典礼——勇担重任迎挑战，坚定信念向未来',
          desc: '6月25日下午，工业工程系举办2022年毕业典礼，在腾讯会议平台同步直播.毕业典礼由副系主任赵磊主持。',
          time: '2022 年 11 月 7 日'
        },
        {
          img: 'https://www.tsinghua.edu.cn/image/kyxm005.jpg',
          title: '清华大学积极开展多渠道、高层次、实质性的国际合作与交流活动',
          desc: '加强国际化能力建设；与一批世界知名大学和机构建立了战略伙伴关系。通过联合培养、学生交换、开设海外名师讲堂和主办国际会议等多种形式，培养具有全球视野。',
          time: '2022 年 11 月 8 日'
        },
        {
          img: 'https://www.tsinghua.edu.cn/image/picLink04.jpg',
          title: '青年教师骨干领航工作站开展学习贯彻党的二十大精神专题交流活动',
          desc: '10月27日，青年教师骨干领航工作站开展学习贯彻党的二十大精神专题交流活动，教育研究院院长石中英作题为“学习领会党的二十大有关教育工作重要论述，努力推进教育强国建设”的报告，来自全校各单位的40余名骨干教师通过线上线下相结合的方式参加学习交流。',
          time: '2022 年 11 月 1 日'
        }
      ],
      friendLink: [
        {
          title: '国家市场监督管理总局',
          href: ''
        },
        {
          title: '清华大学工业工程系链接',
          href: ''
        }
      ]
    }
  }
}
</script>
<style lang = "less"  scoped >
@light_bgColor:#7e2a8a;
@dark_bgColor:#46228e;
@normal_titleColor:#d69909;

.news{
    /* margin: 0px auto; */
    /* padding: 20px 5px 40px; */
    /* background:linear-gradient(to top, #F2F2F2 82.6%, #FFFFFF 20%); */
}
.news-title{
    position: relative;
    height:70px;
    color:@dark_bgColor;
    margin-bottom: 10px;
    /* span{
        width: 10px;
        display: inline-block; /*第一个装饰线 */
        /* position: relative;
        background-color: #FFF;
        border-left: #711989 5px solid;
        height: 50px;
        line-height: 50px;
    }  */
    /* span::after{
        content: "";
        position: absolute;
        display: inline-block;
        right: 0;
        bottom: 0;
        width: 3px;
        height: 36px;
        line-height: 36px;
        background-color: #46228e;
    } */
    /* h2{
        position: absolute;
        top: 20px;
        left: 50px;
        font-size: 2.0rem;
    }
    h4{
        position: absolute;
        top: 50px;
        right:50px;
        color:#46228e;
        font-weight: 100;
    } */
}
/* .news-title::before {
        content: "";
        left: 0;
        position: absolute;
        bottom: 10px;
        width: 100%;
        height: 2px;
        line-height: 2px;
        background-color: #711989;
}
.news-title::after{
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 5px;
        height: 30px;
        line-height: 30px;
        background-color: #8962d5;
} */
    .news-container{
        width:100%;
        overflow: hidden;
        display: flex;
        justify-content:space-between;
        .news-deatil{
            overflow: hidden;
            width:28%;
            height:100%;
            background: #fff;
            img{
                width:100%;
                transition: all 0.25s linear;
            }
            img:hover {
                transform: rotate(0deg) scale(1.04, 1.04) skew(0deg) translate(0, 0);
            }
            h3{
                font-size:1.25rem;
                font-weight: normal;
                color: #956609;
                overflow: hidden;
                white-space: wrap;
                padding:0px 0px;
            }
            h3:hover{
                color:#000;
                cursor: pointer;
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
            p{
                line-height: 30px;
                color:#666666;
                font-size:16px;
            }
            .time{
                color:#666666;
                font-size:0.8rem;
                text-align: left;
            }
        }
    }
    .news-right{
        width:100%;
        background-color: #eeeeee;
        padding: 18px 15px 1px 18px;
        li{
            height:50px;
            width:100%;
            display: flex;
            overflow: hidden;
            margin-bottom: 30px;
            span{
                width:50px;
                height: 50px;
                background-color: #711989;
                line-height: 50px;
                text-align: center;
                color: #FFF;
                font-size: 1.0rem;
                position: relative;
                transition: all 0.2s linear;
            }
            span:hover{
                background-color: #46228e;
            }
            span::after{
                position: absolute;
                left: -10px;
                top: -10px;
                width: 14px;
                height: 10px;
                line-height: 10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px;
                border-color: transparent #8962d5 transparent transparent;
                content: "";
                transform: rotate(45deg) scale(1, 1) skew(0deg) translate(0px, 0px);
            }
            p{
                font-size:1.25rem;
                padding-left: 10px;
                width: 87%;
                color: #666666;
                margin: 0;
                line-height: 25px;
                height: 50px;
                text-overflow:ellipsis;
            }
            p:hover{
                color: #46228e;
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
.friendLink p{
    font-size:1.2rem;
    color: #956609;
    overflow: hidden;
    white-space: wrap;
    padding:0px 20px;
}
@media screen and (max-width: 1200px){
    .news-container{
       display: block;
       .news-deatil{
        width: 100%;
       }
    }
}
</style>
