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
            <!-- <el-submenu :index="navList[3].path">
              <template slot="title">{{navList[3].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[3].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu> -->
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
            <el-submenu :index="navList[6].path">
              <template slot="title">{{navList[6].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[6].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu>
        </el-menu>
        </div>
      </div>
      <div class="logo">
        <img src="@/assets/img/logo-name.png"/>
        <!-- <h1>清华大学质量与可靠性研究院</h1> -->
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
            {{navList[3].title}}<span class="line"> / </span>
          </el-menu-item>
          <!-- <el-submenu :index="navList[3].path">
            <template slot="title">{{navList[3].title}} <span class="line"> / </span></template>
            <el-menu-item  v-for="(subItem) in navList[3].children" :key="subItem.path" :index="subItem.path">
              {{subItem.title}}
            </el-menu-item>
          </el-submenu> -->
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
          <el-submenu :index="navList[6].path">
              <template slot="title">{{navList[6].title}}</template>
              <el-menu-item  v-for="(subItem) in navList[6].children" :key="subItem.path" :index="subItem.path">
                {{subItem.title}}
              </el-menu-item>
            </el-submenu>
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
            <input placeholder="请输入关键词" v-model="text" @change="search"/>
            <el-button type="primary" icon="el-icon-search" >搜索</el-button>
        </div>
      </div>
    </div>
    <div class="con">
      <router-view v-show="text===''"></router-view>
      <div v-show="text !== '' ">
        <ul class="searchList">
          <li v-for="item in list" :key="item.id">
              <a :href="item.path"><i></i>{{item.title}}</a>
          </li>
        </ul>
        <span v-show="list.length === 0"> 没有相关搜索结果</span>
      </div>
    </div>
    <!-- <hr style="wdith:80%;margin:0 auto;" /> -->
    <div class="footer">
      <div class="right">
        <img src="./assets/img/index/logoColor.png" width="150px"/>
      </div>
      <div class="left">
        <!-- <div>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_2.png"/></a>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_1.png"/></a>
          <a><img src="https://www.tsinghua.edu.cn/image/img56_4.png"/></a>
        </div> -->
        <p>Copyright © 2022-2022 清华大学质量与可靠性研究院 版权所有</p>
      </div>
    </div>
  </div>
</template>

<script>
import { search } from '@/apis/index'
export default {
  name: 'app',
  data () {
    return {
      activeIndex: 'index',
      cate: {
        1: 'news',
        2: 'news',
        3: 'news',
        4: 'news',
        5: 'news/lecture',
        6: 'research/MQPR',
        7: 'research/QMCT',
        8: 'research/RASR',
        9: 'research/HFSR',
        10: 'research/ROSQ'
      },
      showNavList: true,
      list: [],
      navShow: false,
      isMobile: false,
      text: '',
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
              path: '/desc'
            },
            {
              title: '发展历程',
              path: '/development'
            }
          ]
        },
        {
          title: '专家介绍',
          path: '/people'
        },
        {
          title: '新闻中心',
          path: '/news'
          // children: [
          //   {
          //     title: '质量相关政策',
          //     path: '/news/policy'
          //   },
          //   {
          //     title: '通知公告',
          //     path: '/news/notice'
          //   },
          //   {
          //     title: '地方座谈会',
          //     path: '/news/forum'
          //   },
          //   {
          //     title: '企业交流',
          //     path: '/news/communication'
          //   },
          //   {
          //     title: '学术讲座',
          //     path: '/news/lecture'
          //   }
          // ]
        },
        {
          title: '科学研究',
          path: '/research',
          children: [
            {
              title: '宏观质量政策研究',
              path: '/research/MQPR'
            },
            {
              title: '质量管理与控制技术研究',
              path: '/research/RQMCT'
            },
            {
              title: '可靠性与保障性研究',
              path: '/research/RASR'
            },
            {
              title: '人因与安全研究',
              path: '/research/HFSR'
            },
            {
              title: '服务质量研究',
              path: '/research/ROSQ'
            }
          ]
        },
        {
          title: '质量院年会',
          path: '/conference',
          children: [
            {
              title: `${new Date().getFullYear()}年会`,
              path: '/now'
            },
            {
              title: '历年年会',
              path: '/history'
            }
          ]
        },
        {
          title: '加入我们',
          path: 'contactUs',
          children: [
            {
              title: '招聘信息',
              path: 'hire'
            },
            {
              title: '联系我们',
              path: 'conUs'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log(this.$router)
    },
    search () {
      if (this.text === '') return
      const params = {
        text: this.text,
        sort: 'updateTime,desc',
        page: 0,
        size: 10
      }
      this.list = []
      search(params)
        .then(res => {
          console.log(res)
          res.content.forEach(element => {
            if (element.type !== 'link') {
              if (element.type === 'annual') {
                element.path = `/history/${element.oid}`
              } else if (element.type === 'expert') {
                element.path = `/people/${element.oid}`
              } else {
                element.path = '/' + this.cate[element.category] + '/' + element.oid
              }
              this.list.push({
                ...element
              })
            }
          })
          console.log(this.list)
        })
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
    this.resizeFun()
    window.addEventListener('resize', this.resizeFun, false)
  }

}
</script>
<style>
.editor-content-view img{
  max-width: 100%;
}
</style>
<style lang = "less">
@media screen and (max-width: 1000px) {
  #app {
    .nav{
      display: block;
    }
    .logo{
      img{
        width: 100%;
      }
    }
    .footer{
      padding-top:20px;
      display: block;
      height: 100px;
      text-align: center;
    }
  }
}
.logo{
  img{
    width: 45%;
  }
}
.header{
  width: 90%;
  margin: 20px auto 10px;
}
.mobile-nav{
  width:100%;
  margin:0px;
  .el-menu{
    z-index:100;
    border-right: 0px;
  }
  div{
    line-height: 50px;
    height: 50px;
    color: #956609;
    text-align: center;
    font-size: 1.0rem;
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
        height: 30px;
        width: 90%;
        font-size: 0.8rem;
        padding-left: 10px;
        border: 1px solid @dark_bgColor;
    }
    button {
        background-color: @dark_bgColor;
        border:1px solid @dark_bgColor;
        border-radius: 0px;
        height:32px;
    }
}
.el-button{
  padding: 5px 20px !important;
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
  font-weight: bold;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
    font-weight: bold;
    font-size: 1.0rem;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  color:@light_bgColor !important;
}
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{
  border-bottom: 2px solid @light_bgColor !important;
  color: @light_bgColor !important;
}
.el-menu-item{
  font-size:1.0rem !important;
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
  width: 90%;
  min-height: calc(100vh - 400px);
  margin: 0 auto;
}
.footer{
  width:90%;
  margin: 80px auto 0px;
  height:150px;
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #9a9a9a;
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
    order: 1;
    width:20%;
  }
}
.searchList{
  li{
    display: block;
  }
  a{
    text-decoration:none;
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px dashed #cccccc;
    i{
        display: block;
        width: 5px;
        height: 5px;
        position: absolute;
        left: 0;
        top: 50%;
        z-index: 0;
        margin-top: -2px;
        background-color: #46228e;
    }
  }
}
</style>
