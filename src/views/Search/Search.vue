<!--  -->
<template>
  <div class="search">
    <!-- 头部 -->
    <div class="body">
      <div class="category-header">
        <header>
          <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
          <form action>
            <input type="search" placeholder="搜索商品" v-model="keywords">
            <i class="iconfont icon-sousuo2"></i>
          </form>
          <a href="javascript:;" style="font-size:1.4rem" @click="searchKeywords">搜索</a>
        </header>
      </div>
      <!-- 最近搜索 -->
      <div class="search-wrap">
        <div class="search-wrap-title">
          <div class="search-title">最近搜索</div>
          <div class="iconfont icon-shanchu"></div>
        </div>
        <ul class="search-list">
          <li>手机</li>
          <li>家居</li>
        </ul>
      </div>

      <!-- 热搜 -->
      <div class="search-wrap" style="margin-top:1rem">
        <div class="search-wrap-title">
          <div class="search-title">热搜</div>
        </div>
        <ul class="search-list">
          <li>手机</li>
          <li>豆浆机</li>
          <li>电饭煲</li>
          <li>电脑</li>
          <li>家纺</li>
        </ul>
      </div>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer
  },
  data() {
    //这里存放数据
    return {
      keywords: ""
    };
  },
  methods: {
    searchKeywords() {
      if (this.keywords) {
        this.$store.dispatch("searchKeywords", { keywords: this.keywords });
        this.$router.push("/searchlist");
      }
    }
  }
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
  header {
    display: flex;
    form {
      width: 70%;
      position: relative;
      input {
        height: 3rem;
        border: 1px solid #efefef;
        width: 100%;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
.search-wrap {
  margin-top: 4rem;
  .search-wrap-title {
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    justify-content: space-between;
    margin: 0 10px;
    .search-title {
      font-size: 1.4rem;
    }
  }
  .search-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 14%;
      height: 2rem;
      border: 1px solid #ccc;
      background: #f0f2f5;
      box-sizing: border-box;
      text-align: center;
      line-height: 2rem;
      color: #686868;
      margin: 1% 2.5%;
      border-radius: 4px;
    }
  }
}
</style>