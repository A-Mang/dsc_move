<!-- 首页-首页 -->
<template>
  <div class="home-index">

    <div class="swipe-wrap">
      <!-- 轮播图 -->
      <Swipe />  
    </div>
    <!-- 导航 -->
    <QuickNav />
    <!-- 滚动新闻 -->
    <SwipeNews />
    <!-- 秒杀 -->
    <MiaoSha />
    <SwipeList :swipeListDatas="swipeListDatas" />
    <div style="height:5rem"></div>
    <div>
      <div class="pintuan">
        <h1>拼团专区</h1>
        <span>拼着买更实惠</span>
      </div>
    <SwipeList :swipeListDatas="swipeListDatas" />
    </div>
    <div style="height:5rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// 引入轮播图组件
import Swipe from "@/components/Swipe.vue";
import QuickNav from "../components/QuickNav";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";
import MiaoSha from "../components/MiaoSha";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    SwipeList,
    MiaoSha,
  },
  data() {
    //这里存放数据
    return {
      //Index.vue这个组件是SwipeList.vue组件的父组件，在父组件中定义数据通过父传子，将数据传递给子组件
      swipeListDatas: [
        {
          id: 1,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅1",
        },
        {
          id: 2,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅2",
        },
        {
          id: 3,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅3",
        },
        {
          id: 4,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅4",
        },
        {
          id: 5,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅5",
        },
        {
          id: 6,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅6",
        },
        {
          id: 7,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅7",
        },
        {
          id: 8,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅8",
        },
        {
          id: 9,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅9",
        },
        {
          id: 10,
          imgsrc:
            "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg?imageView2/2/format/webp",
          title: "电饭锅10",
        },
      ],
    };
  },
};
</script>
<style lang="less">

.swipe-wrap {
  margin: 0px 10px;
  div {
    border-radius: 10px !important;
  }

}
.pintuan{
  width: 100%;
  height: 5rem;
}
</style>