<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  components: {},
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    //   通过querySelecter去查找不准确，可能有重名的class，不能确定谁是第一个。
    // 用绑定ref去拿准确
    // 1创建bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
// 2 监听滚动的位置
    this.scroll.on("scroll", position => {
      this.$emit("position_scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      // 只需要发送一个事件就可以。让首页去加载更多
      this.$emit("pullUpLoad");
      //   console.log("上拉加载更多");
      //   setTimeout(() => {
      //     this.scroll.finishPullUp();
      //   }, 2000);
    });

    console.log(this.scroll)
    // 根据最新的加载的组件去计算可滚动区域大小的
  
    
  },
  methods: {
    refresh(){
      // console.log('刷新')
      // scroll不能为空，
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x, y, time = 300) {
       this.scroll &&this.scroll.scrollTo(x, y, time);
    },
    getScrollY(){
      return this.scroll?this.scroll.y : 0
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    }
  }
};
</script>
<style scroped>
</style>