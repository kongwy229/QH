<template>
      <div>
        <h2>质量与可靠性研究院2022年年会</h2>
        <div v-for="item in info" :key="item.title">
          <h3>{{item.title}}</h3>
          <p>{{item.content}}</p>
        </div>
        <div>
           <h3>年会报名</h3>
           <div class="join">
            <div>
              <p>注册流程:</p>
              <p v-for="item in joinM" :key="item">{{item}}</p>
            </div>
            <div class="img">
              <img src="../../assets/img/ma.png"/>
            </div>
           </div>
        </div>
        <div class="people">
          <h3>组委会名单</h3>
          <div class="people-list">
            <div v-for="item in peopleList" :key="item.id">
                <h3>{{item.name}}</h3>
                <p>{{item.title}}</p>
                <p class="limit">{{item.desc}}</p>
                <p class="more" @click="jumpTo(item.id)">查看更多 <i class="el-icon-right"></i></p>
            </div>
          </div>
        </div>
        <div>
          <h3>会议议程</h3>
          <div class="editor-content-view" v-html="content">
          </div>
          <el-button @click="submit">提交</el-button>
          <div style="border: 1px solid #ccc;">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editor"
                :defaultConfig="toolbarConfig"
                :mode="mode"
            />
            <Editor
                style="height: 500px; overflow-y: hidden;"
                v-model="html"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="onCreated"
            />
          </div>
        </div>
      </div>
</template>
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'desc',
  components: { Editor, Toolbar },
  data () {
    return {
      editor: null,
      content: '',
      html: '<p>hello</p>',
      toolbarConfig: { },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
      info: [
        {
          title: '年会简介',
          content: '清华大学质量与可靠性研究院由清华大学与原国家质量监督检验检疫总局共建，挂靠于清华大学工业工程系，研究院的成立旨在推动我国质量与可靠性科学研究的发展、人才培养及产业服务，推动质量强国战略的实施。研究院致力于先进质量与可靠性技术和管理体系的研究与应用，协助企业提升产品、工程与服务质量.发展全生命周期的系统管理的理论与方法，全面提升工业系统质量与可靠性。清华大学质量与可靠性研究院年会将于2022年8月19日至21日举行。本次撞的平台，共同推进新时代中国质量与可靠性管理和研究的水平。'
        },
        {
          title: '年会时间',
          content: '2022年8月19日至21日'
        }
      ],
      joinM: [
        '1. 用户注册：通会议网站浏览会议注册页，填写注册信息提交即可。',
        '2. 在会议开始前，组委会通过电子邮箱给已注册用户发送会议链接和密码。',
        '3. 使用会议链接和密码进行登陆参会。',
        '次会议线上参会免收注册费。注册截止日期：2022年8月13日 24:00'
      ],
      peopleList: [
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
        },
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
        },
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
    }
  },
  mounted () {
  // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    }, 1500)
  },
  beforeDestroy () {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  },
  methods: {
    onCreated (editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    jumpTo (id) {
      this.$router.push({ name: 'peopleDetail', params: { id: id } })
    },
    submit () {
      const editor = this.editor
      this.content = editor.getHtml()
    }
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
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
p{
  line-height: 30px;
  text-indent: 2rem;
  color: #666666;
  font-size: 16px;
}
.join{
  display: flex;
  justify-content: space-between;
  img{
    width:250px;
  }
}
.people-list{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  div{
    margin-bottom: 30px;
    flex-basis: 30%;
    h3{
      font-weight: normal;
    }
    p{
      text-indent: 0;
    }
  }
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
@media screen and (max-width: 1000px) {
  .join{
     display: block;
  }
  .people-list{
    display: block;
  }
}
</style>
