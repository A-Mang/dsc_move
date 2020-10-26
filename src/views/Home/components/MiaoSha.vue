<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <div>
      <span>
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
          alt
        >
      </span>
    </div>
    <div>
      <p>
        <span style="margin-right:5px">距结束还剩:</span>
        <span class="time">{{dd}}</span>
        <i>:</i>
        <span class="time">{{hh}}</span>
        <i>:</i>
        <span class="time">{{mm}}</span>
        <i>:</i>
        <span class="time">{{ss}}</span>
      </p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dd: "00",
      hh: "00",
      mm: "00",
      ss: "00",
      timer: ""
    };
  },
  methods: {
    timeFn() {
      //获取当前时间
      var date = new Date();
      var nowTime = date.getTime(); //当前时间的时间戳
      // 设置一个截至时间
      var endDate = new Date("2020-10-9 18:00:00");
      var endTime = endDate.getTime();

      // 时间差
      var oTime = endTime - nowTime;
      if (oTime > 0) {
        this.dd = Math.floor(oTime / 1000 / 60 / 60 / 24); //天
        this.hh = Math.floor((oTime / 1000 / 60 / 60) % 24); //时
        this.mm = Math.floor((oTime / 1000 / 60) % 60); //分
        this.ss = Math.floor((oTime / 1000) % 60);
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.timeFn, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="less">
.miaosha {
  margin-top: 5px;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  line-height: 5rem;
  img {
    width: 100px;
    height: 22px;
  }
  p {
    .time {
      width: 24px;
      height: 20px;
      background-color: #ff4f2e;
      border: 2px solid #ff4f2e;
      border-radius: 4px;
      color:white;
      margin-right: 5px;
      margin-left: 5px;
      
    }
    i{
      width: 20px;
      height: 20px;
      font-size: 14px;
      font-style: normal;
      text-align: center;
    }
  }
}
</style>