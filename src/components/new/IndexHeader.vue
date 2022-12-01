<template>
  <div class="header">
    <div class="container">
        <h1 class="logo-head">
            <a>
                <img src="@/assets/img/logo.jpg" width="100px"/>
            </a>
            <!-- 清华大学质量与可靠性研究院 -->
        </h1>
        <div class="headerR">
            <div class="headerR-top">
                <a>
                    English
                </a>
                <a>
                    登陆内网
                </a>
                <a>
                    <i class="el-icon-search"></i>
                </a>
            </div>
            <!-- <div class="headerR-search">
                <input placeholder="请输入关键词"/>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div> -->
            <div class = "menu-wrapper"  @mouseover="menuDetailShow=true" @mouseout="menuDetailShow=false">
                <div class = "menu-item" v-for = "(item,index) in navList" :key = "index">
                    <router-link :to = "item.path" ><span>{{ item.title }} <i class="el-icon-arrow-down"></i></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-detail" v-show="menuDetailShow">
      <div class="menu-sub" v-for="(item,index) in [1,2,3]" :key="index">
        <div class="menu-title">General Info</div>
        <div class="menu-content">Leadership</div>
        <div class="menu-content">Leadership</div>
        <div class="menu-content">Leadership</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      menuDetailShow: false,
      navList: [
        {
          title: '首页',
          path: '/index'
        },
        {
          title: '研究院概况',
          path: '/news'
        },
        {
          title: '专家介绍',
          path: '/product'
        },
        {
          title: '新闻中心',
          path: '/job'
        },
        {
          title: '科学研究',
          path: '/job'
        },
        {
          title: '质量院年会',
          path: '/job'
        },
        {
          title: '加入我们',
          path: '/job'
        }
      ],
      logo_img: [
        {
          path: require('../../assets/img/index/logo.png')
        },
        {
          path: require('../../assets/img/index/logoColor.png')
        }
      ]
    }
  },
  computed: mapState(['headerShadowActive', 'headerShow', 'headerLogoShow', 'navDarkActive']),
  mounted () {
  },
  methods: {
  }

}
</script>

<style lang = "less" scoped>
@nav_active_color: #791CB5;
   span {
      transition: color .3s;
      :hover {
        color: @nav_active_color;
      }
  }
.header {
    padding: 10px 0px;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
}
.logo-head {
    flex-basis: 30%;
}
.headerR{
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.headerR-top{
    font-size:1.25rem;
    text-align: right;
    color:@nav_active_color;
    margin-top:10px;
    a {
      display: inline-block;
      width: 90px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0px 15px;
      border-radius: 5px;
    }
    a:hover{
      background: #791CB5;
      color:#fff;
      cursor: pointer;
    }
}
.headerR-search {
    display: flex;
    input{
        height: 40px;
        width: 90%;
        padding-left: 10px;
        border: 1px solid @nav_active_color;
    }
    button {
        background-color: @nav_active_color;
        border:1px solid @nav_active_color;
        border-radius: 0px;
    }
}
.menu-wrapper{
    display: flex;
    justify-content: space-around;
    margin-top:50px;
    /* border-top:1px solid @nav_active_color; */
}
.menu-item{
    color:@nav_active_color;
    flex-grow:1;
    text-align: center;
    font-size:1.25rem;
    padding:10px;
    margin-left:5px;
    a{
      color:@nav_active_color;
    }
    i{
      font-weight: 1000;
    }
}
.menu-item:hover{
    transition: all .3s;
    background: @nav_active_color;
}
.menu-item:hover span{
    color:#fff;
}
.menu-detail{
  z-index:1000;
  position: absolute;
  left:0px;
  top:155px;
  width:calc(100% - 20px);
  background: #fff;
  height:300px;
  border-top:10px solid #791CB5;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.3);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px 10px;
  .menu-sub{
    width:300px;
    height: 100%;
    margin-right:20px;
    .menu-title{
      height:50px;
      line-height: 50px;
      text-align: left;
      padding-left:20px;
      border-bottom: 1px solid gray;
      color:gray;
      font-size:1.2rem;
      font-weight: 800;
    }
    .menu-content{
      height:50px;
      line-height: 50px;
      text-align: left;
      padding-left:20px;
      color:#791CB5;
      font-size:1.0rem;
      font-weight: 800;
    }
  }
}
</style>
