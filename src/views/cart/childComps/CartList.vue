<template>
      <div class="cart-list">
       <scroll class="content" ref="scroll">
         <cart-list-item v-for="(item,i) in cartList" :key="i" 
         :itemInfo="item"></cart-list-item>
      
       </scroll>
      </div>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'


export default {
  name:'CartList',
  components:{
    CartListItem,
    Scroll
  },
  computed:{
  ...mapGetters(['cartList'])
  },
   activated(){
       console.log('djjj')
    this.$refs.scroll.refresh()
    console.log('djjj')
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style scoped>
.cart-list{height: calc(100% - 49px - 44px - 49px);}
.content{
   height:100%;
   overflow: hidden;
}
</style>