<template>
  <Tapbar>
      <TabBarItem path="/home" activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.jpg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.jpg" alt />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category"  activeColor ="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.jpg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.jpg" alt />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart"  activeColor ="red">
        <img slot="item-icon" src="~assets/img/tabbar/cart.jpg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.jpg" alt />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile"  activeColor ="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile.jpg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.jpg" alt />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </Tapbar>
</template>

<script>
import Tapbar from "components/common/tapbar/Tapbar";
import TabBarItem from "components/common/tapbar/TabBarItem";
export default {
    name:'MainTabBar',
  components:{
    Tapbar,TabBarItem
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style>
</style>