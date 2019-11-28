<template>
  <div id="home">
    <Nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </Nav-bar>
    <tab-control :titles="TabControls" @tabClick1="tabclick" 
    class="tab-control" 
    ref="topTabControl" v-show="isShowNvb"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @position_scroll="positionScroll"
      :pull-up-load="true"
      @pullUpLoad="pullUpLoad"
    >
      <home-swiper :banners="banners" @swipperLoad="swipperLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control :titles="TabControls" @tabClick1="tabclick" 
       ref="tabControl"></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top class="backTop" @click.native="backTopClick" v-if="this.isShowTop"></back-top>
  </div>
</template>
<script>
// import Vue from 'vue'
// 导入分类
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
// import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import {itemListenerMixin,backTopMixin} from 'common/mixin'

export default {
  name: "Home",
  components: {
    // 尽量与导出顺序保持一致
    HomeSwiper,
    RecommendView,
    FeatureView,

    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    // BackTop
  },

  data() {
    return {
      banners: [],
      recommends: [],
      // result:null
      TabControls: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowTop: false,
      isShowNvb: false,
      offsetTop: 0,
      save_y:0,
      //使用混入
      // itemImgListener:null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
   destoryed(){
    console.log('home銷毀')
  },
  activated(){ console.log('home activated')
  this.$refs.scroll.scrollTo(0,this.save_y)
  this.$refs.scroll.refresh()
  },
  deactivated(){ console.log('deactivated')
  // 1保存Y值
  this.save_y= this.$refs.scroll.getScrollY()
  // 取消当前页面全局事件监听
  this.$bus.$off('itemImageLoad',this.itemImgListener)
  },

  created() {
    // 发送请求多个数据（轮播图，推荐图）
    this.getHomeMultidata();
    // 请求分类商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },

 mixins:[itemListenerMixin,backTopMixin],
  mounted() {
    // 使用混入mixin
    // 这里的refresh不能加括号，要不就成调用结果了了
    // const refresh = debounce(this.$refs.scroll.refresh, 50);
    // this.itemImgListener = () => refresh()
    // this.$bus.$on("itmeImgLoad", this.itemImgListener);

    // 获取组件tabController 的offsetTop属性
    // 所有的组件都有一个属性$el,用于获取组件的属性
    //这里要等到上面的图片都加载完成之后得到的offsetTop才准确
    console.log(this.$refs.tabControl.$el.offsetTop);
  },
  methods: {
    /**
     *事件监听相关的
     */
    tabclick(i) {
      switch (i) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      console.log('tabcilck'+i);
      // 让两个tabController保持一致
      this.$refs.tabControl.currentIndex = i;
      this.$refs.topTabControl.currentIndex = i;
      // this.$refs.tabControl1.currentIndex= i
    },
    // backTopClick() {
    //   this.$refs.scroll.scrollTo(0, 0, 500);
    // },
    positionScroll(position) {
      // console.log(position);
      this.isShowTop = -position.y > 1000;
      this.isShowNvb = -position.y > this.offsetTop;
    },
    pullUpLoad() {
      //  发送请求
      this.getHomeGoods(this.currentType);
      //
      this.$refs.scroll.finishPullUp();
    },
    swipperLoad() {
      console.log(this.$refs.tabControl.$el.offsetTop);
      this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // this.result = res;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  /* 不让导航栏一起滚动，固定它 */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  /* 层叠谁在上面 ,谁的Z-index属性大，谁就显示在上面；脱离标准流*/
  z-index: 9;
}
.tab-control {
  /* 移动端一般都支持，有的浏览器不支持 */
  /* 当它达到某一值的时候，就从滑动变为固定 */
  /* position: sticky; */
  position: relative;
  z-index: 9;
  background-color: #ffffff;

}
.content {
  /* height:calc(100% - 93px); 100%要去掉padding-top*/
  top: 44px;
  bottom: 49px;
  position: absolute;
  overflow: hidden;
}
</style>