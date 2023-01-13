<template>
      <div>
        <div v-for="item in list" :key="item.cat">
          <h3 class="con-title">{{item.cat}}</h3>
          <div class="container">
            <div v-for="p in item.people" :key="p.name" class="p-con" :class="{limit:item.people.length>1}" @click="jumpTo(p.id)">
                <div class="con-img">
                  <img :src="p.img ? p.img : '../assets/img/default.png'"/>
                </div>
                <div class="con-desc">
                    <h3>{{p.name}}</h3>
                    <p>{{p.brief}}</p>
                    <p>邮件:{{p.email}}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import { getPeopleList, baseImgUrl } from '@/apis/index'
export default {
  name: 'peopleList',
  data () {
    return {
      list: [
        {
          cat: '专家队伍',
          people: []
        },
        {
          cat: '博士后助理',
          people: []
        },
        {
          cat: '研究生，博士',
          people: []
        }
      ]
    }
  },
  mounted () {
    getPeopleList({ category: 2, sort: 'sort' }).then((res) => {
      console.log(res)
      res.content.forEach(item => {
        if (item.img) {
          item.img = baseImgUrl + item.img
        }
        if (item.type === 100) {
          this.list[0].people.push(item)
        } else if (item.type === 101) {
          this.list[1].people.push(item)
        } else {
          this.list[2].people.push(item)
        }
      })
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
.img{
  text-align: center;
}
p{
  line-height: 30px;
  text-align: justify;
  text-indent: 2rem;
  color: #666666;
  font-size: 1.0rem;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.p-con{
  display: flex;
  margin-top:50px;
  justify-content: space-around;
  img{
    width: 140px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    margin-right:10px;
  }
}
.con-title{
  margin-top:40px;
  font-size: 1.2rem;
}
.con-desc{
  padding: 10px;
  h3{
    margin-top:-10px;
    font-size:1.0rem;
  }
}
.limit{
  flex-basis: 48%;
}
@media screen and (max-width: 1000px) {
  .container{
    display: block;
  }
}
@media screen and (max-width: 500px) {
  .container{
    display: block;
    .p-con{
      display: block;
    }
    .con-img{
      text-align: center;
    }
    .con-desc{
      h3{
        text-align: center;
        margin-top:5px;
      }
    }
  }
}
</style>
