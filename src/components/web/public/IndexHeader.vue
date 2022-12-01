<template>
  <div class="header">
    <div class="container">
        <h1 class="logo-head">
            <a>
                <img src="@/assets/img/index/logoColor.png"/>
            </a>
            清华大学质量与可靠性研究院
        </h1>
        <div class="headerR">
            <div class="headerR-top">
                <a>
                    English
                </a> |
                <a>
                    登陆内网
                </a> |
                <a>
                    其他
                </a>
            </div>
            <div class="headerR-search">
                <input placeholder="请输入关键词"/>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
    </div>
    <div class = "menu-wrapper">
        <div class = "menu-item" v-for = "(item,index) in navList" :key = "index">
            <router-link :to = "item.path" ><span>{{ item.title }}</span>
            </router-link>
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
          path: require('../../../assets/img/index/logo.png')
        },
        {
          path: require('../../../assets/img/index/logoColor.png')
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
    padding: 10px 100px;
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
    flex-basis: 60%;
}
.headerR{
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.headerR-top{
    font-size:1.25rem;
    text-align: right;
    color:@nav_active_color;
    a {
      margin:0px 20px;
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
    border-top:1px solid @nav_active_color;
}
.menu-item{
    color:@nav_active_color;
    flex-grow:1;
    text-align: center;
    font-size:1.5rem;
    padding:10px;
    margin-left:5px;
    a{
      color:@nav_active_color;
    }
}
.menu-item:hover{
    transition: all .3s;
    background: @nav_active_color;
}
.menu-item:hover span{
    color:#fff;
}
</style>
