<template>
  <div class = "banner">
    <div class = "Limit">
      <el-carousel :interval = "2000" arrow = "hover" :height = "BannerHeight+ 'px' " :autoplay = "true"
                   ref = "carousel" trigger = "click" indicator-position = "outside">
        <el-carousel-item v-for = "item in imgList" :key = "item.id">
          <div class = "img_con">
            <div class = "img_cover"></div>
            <img class = "element-img" alt = "" :src = "item.imgUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['BannerHeight'],
  data () {
    return {
      imgList: [
        {
          id: 0,
          imgUrl: 'https://www.tsinghua.edu.cn/__local/3/72/8C/D24D9CD6D2F17C31ECA0EFD9A3F_F7E1B60B_1C48837.jpg'
        },
        {
          id: 1,
          imgUrl: 'https://www.tsinghua.edu.cn/__local/B/DB/C6/9A5D8AB99475E780A58223ABB36_3FE172A1_5E7A8.jpg'
        },
        {
          id: 2,
          imgUrl: 'https://www.tsinghua.edu.cn/__local/6/B1/C9/F0D8205A8087E32DDFA4E6A2F6E_2261B911_857F7.jpg'
        },
        {
          id: 3,
          imgUrl: 'https://www.tsinghua.edu.cn/__local/B/E2/E3/C09DCA943F9B367ADDEE87DDB4F_18B39A77_44DFD.jpg'
        }, {
          id: 4,
          imgUrl: 'https://www.tsinghua.edu.cn/__local/A/4C/A2/DA4B883975E06F731A8BA987E5C_8CC15527_BEC73.jpg'
        }
      ]
    }
  }
}
</script>

<style lang = "less" scoped>
.banner{
  padding: 0px 100px;
}
//.img_cover{
//  width: 100%;
//  height: 100%;
//  background: rgba(51,112,255,.2);
//}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.img_con {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(51, 112, 255, .2);
    height: 100%;
    z-index: 666;
  }
}

.element-img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

/deep/ .el-carousel__arrow {
  width: 40px;
  height: 40px;
  font-size: 30px;
  background-color: rgba(255, 255, 255, .1);
}

/deep/ .el-carousel__arrow:hover {
  background-color: rgba(255, 255, 255, .3);
}
</style>
