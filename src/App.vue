<template>
  <div id = "app">
    <div class="header">
      <div v-show="isMobile" class="mobile-nav">
        <div @click="navShow = !navShow">
          <i v-show="!navShow" class="el-icon-s-fold"></i>
          <i v-show="navShow" class="el-icon-s-unfold"></i>
          导航
        </div>
        <div v-show="navShow">
          <el-menu router :default-active="activeIndex" @select="handleSelect" text-color="#46228e">
            <el-menu-item :index="navList[0].path">
              {{navList[0].title}}
            </el-menu-item>
            <el-submenu :index="navList[1].path">
              <template slot="title">{{navList[1].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[1].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="navList[2].path">
              {{navList[2].title}}
            </el-menu-item>
            <el-menu-item :index="navList[3].path">
              {{navList[3].title}}
            </el-menu-item>
            <el-submenu :index="navList[4].path">
              <template slot="title">{{navList[4].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[4].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu>
            <el-submenu :index="navList[5].path">
              <template slot="title">{{navList[5].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[5].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="navList[6].path">
              {{navList[6].title}}
            </el-menu-item>
        </el-menu>
        </div>
      </div>
      <div class="logo">
        <img src="@/assets/img/logo.jpg" width="100px"/>
        <h1>清华大学质量与可靠性研究院</h1>
      </div>
      <div class="nav" v-show="!isMobile">
        <el-menu router :default-active="activeIndex" mode="horizontal" @select="handleSelect" text-color="#46228e">
          <el-menu-item :index="navList[0].path">
            {{navList[0].title}} <span class="line"> / </span>
          </el-menu-item>
          <el-submenu :index="navList[1].path">
            <template slot="title">{{navList[1].title}} <span class="line"> / </span></template>
            <el-menu-item  v-for="(subItem) in navList[1].children" :key="subItem.path" :index="subItem.path">
              {{subItem.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="navList[2].path">
            {{navList[2].title}} <span class="line"> / </span>
          </el-menu-item>
          <el-menu-item :index="navList[3].path">
            {{navList[3].title}} <span class="line"> / </span>
          </el-menu-item>
          <el-submenu :index="navList[4].path">
            <template slot="title">{{navList[4].title}} <span class="line"> / </span></template>
            <el-menu-item  v-for="(subItem) in navList[4].children" :key="subItem.path" :index="subItem.path">
              {{subItem.title}}
            </el-menu-item>
          </el-submenu>
          <el-submenu :index="navList[5].path">
            <template slot="title">{{navList[5].title}} <span class="line"> / </span></template>
            <el-menu-item  v-for="(subItem) in navList[5].children" :key="subItem.path" :index="subItem.path">
              {{subItem.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="navList[6].path">
            {{navList[6].title}} <span class="line"> / </span>
          </el-menu-item>
          <!-- <el-menu-item  v-for="item in navList" :key="item.path" :index="item.path">
            {{item.title}} <span class="line"> / </span>
          </el-menu-item> -->

          <!-- <el-submenu v-for="item in navList" :key="item.path" :index="item.path">
            <template slot="title">{{item.title}} <span class="line"> / </span></template>
            <el-menu-item  v-for="(subItem,index) in item.children" :key="item.path + index" :index="item.path + index">
              {{subItem}}
            </el-menu-item>
          </el-submenu> -->

        </el-menu>
        <div class="headerR-search">
            <input placeholder="请输入关键词"/>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </div>
    </div>
    <div class="con">
      <router-view></router-view>
    </div>
    <!-- <hr style="wdith:80%;margin:0 auto;" /> -->
    <div class="footer">
      <div class="left">
        <div>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_2.png"/></a>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_1.png"/></a>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_4.png"/></a>
        </div>
        <p>Copyright © 2022-2022 清华大学质量与可靠性研究院 版权所有</p>
      </div>
      <div class="right">
        <img src="./assets/img/index/logoColor.png" width="150px"/>
      </div>
    </div>
  </div>
</template>

<script>
// import IndexHeader from '@/components/new/IndexHeader'
// import Footer from '@/components/web/public/IndexFooter'
// import Link from '@/components/web/Link'
// import NewsBorad from '@/components/web/NewsBorad'
export default {
  name: 'app',
  components: {
    // NewsBorad
    // IndexHeader,
    // Footer,
    // Link
  },
  data () {
    return {
      activeIndex: 'index',
      showNavList: true,
      navShow: false,
      isMobile: false,
      navList: [
        {
          title: '首页',
          path: '/index'
        },
        {
          title: '研究院概况',
          path: '/about',
          children: [
            {
              title: '研究院简介',
              path: 'desc'
            },
            {
              title: '发展历程',
              path: 'history'
            }
          ]
        },
        {
          title: '研究院人员',
          path: 'people'
        },
        {
          title: '新闻中心',
          path: 'news',
          children: [
            {
              title: '质量相关政策',
              path: 'policy'
            },
            {
              title: '通知公告',
              path: 'notice'
            },
            {
              title: '地方座谈会',
              path: 'forum'
            },
            {
              title: '企业交流',
              path: 'communication'
            },
            {
              title: '学术讲座',
              path: 'lecture'
            }
          ]
        },
        {
          title: '科学研究',
          path: 'research',
          children: [
            {
              title: '宏观质量政策研究',
              path: 'MQPR'
            },
            {
              title: '质量管理与控制技术研究',
              path: 'RQMCT'
            },
            {
              title: '可靠性与保障性研究',
              path: 'RASR'
            },
            {
              title: '人因与安全研究',
              path: 'HFSR'
            },
            {
              title: '服务质量研究',
              path: 'ROSQ'
            }
          ]
        },
        {
          title: '质量院年会',
          path: 'conference',
          children: [
            {
              title: '当前年会',
              path: 'now'
            },
            {
              title: '历年年会',
              path: 'pass'
            }
          ]
        },
        {
          title: '加入我们',
          path: 'contactUs'
        }
      ],
      timeList: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$router)
    },
    resizeFun () {
      const width = document.documentElement.clientWidth
      if (width < 1200) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  },

  created () {
    window.addEventListener('resize', this.resizeFun, false)
  }

}
</script>

<style lang = "less">
@light_bgColor:#7e2a8a;
@dark_bgColor:#46228e;
@normal_titleColor:#d69909;
@media screen and (max-width: 1000px) {
  #app {
    .nav{
      display: block;
    }
  }
}
.logo{
  display: flex;
  align-items: center;
  h1{
    margin-left:20px;
  }
}
.header{
  width: 80%;
  margin: 20px auto 10px;
}
.mobile-nav{
  .el-menu{
    z-index:100;
  }
  div{
    line-height: 50px;
    height: 50px;
    color: #956609;
    text-align: center;
    font-size: 1.5rem;
  }
}
.nav{
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #a19ea2;
}
.headerR-search {
    display: flex;
    input{
        height: 40px;
        width: 90%;
        padding-left: 10px;
        border: 1px solid @dark_bgColor;
    }
    button {
        background-color: @dark_bgColor;
        border:1px solid @dark_bgColor;
        border-radius: 0px;
        height:42px;
    }
}
.el-button--primary:focus, .el-button--primary:hover {
    background: #7757b9 !important;
    border-color: #7757b9 !important;
    color: #FFF;
}
.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
  display: none;
}
.el-submenu__title{
  padding: 0 3px !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    font-weight: bold;
    font-size: 1.2rem;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color:@light_bgColor !important;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: 2px solid @light_bgColor !important;
  color: @light_bgColor !important;
}
.el-menu-item{
  font-size:1.2rem !important;
  font-weight: bold !important;
  padding:0px 4px !important;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #9c27b0 !important;
}
.el-menu-item.is-active{
  color:  @light_bgColor !important;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px #a19ea2 !important;
}
.con{
  width: 80%;
  margin: 0 auto;
}
.footer{
  width:80%;
  margin: 80px auto 0px;
  height:150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #9a9a9a;
  /* background: #fbf7fd; */
  /* background:linear-gradient(to right, @dark_bgColor, #7e2a8a); */
  color:@dark_bgColor;
  p{
    /* padding-left:30px; */
  }
  .left div{
    margin: 30px 0px 20px 20px;
    a{
      display: inline-block;
      width: 35px;
      background: @dark_bgColor;
      border-radius: 50%;
      margin-left: 13px;
    }
    img{
      width:100%;
    }
  }
  .right{
    width:20%;
  }
}

</style>
