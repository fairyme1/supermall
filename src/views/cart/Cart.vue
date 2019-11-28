<template>
  <div id="cart">
    <nav-bar class="nav_cart">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list class="cartList"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
// import getters from 'store/getters',不能这样引入，它是vuex封装的
// mapGetters将getter映射成store中的计算属性computed
import {mapGetters} from 'vuex'


export default {
  name:"Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar

  },
 
  computed:{
    // 第一种语法： ...mapGetters['cartLength']
    // 第二种语法，可指定名字
     ...mapGetters({
       cartLength:'cartLength'
     })
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style scoped>

#cart{
  height:100vh;
}
.nav_cart{
  /* position: relative;
  z-index: 9; */
  height: 49px;
  background-color: var(--color-tint);
  color: aliceblue;
  font-size: 20px;
  font-weight: bold;
}

</style>