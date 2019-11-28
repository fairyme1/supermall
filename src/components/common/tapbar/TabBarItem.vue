<template>
 <div class="tab-bar-item" @click="itemclick">
     <div v-if="!isActive"><slot  name="item-icon"></slot></div>
     <div v-else><slot  name="item-icon-active"></slot></div>
     <!-- <div :class="{active:isActive}"> -->
       <!-- 动态绑定样式 -->
     <div :style="activeStyle">
     <slot name="item-text"></slot>
     </div>
      
 </div>
</template>
<script>
export default {
 name:"TabBarItem",
  components:{},
  props:{
    path: String ,
    activeColor:{

      type:String,
      default:'red'

    }
  },
  data(){
    return {
        // isActive:true
    }
  },
  computed:{
    isActive(){
      // 活跃的路由如果跟path一致，则返回true
      // !=-1是找到了一直路由，return true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      //先判断是否处于活跃
      console.log('hhhh')
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path)
      console.log('itemcilck')
    }
     
  },
}
</script>
<style>
.tab-bar-item {
  /* 均等分 */
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  /* 去掉两个div间的3px空隙 */
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active{
    color: red
} */
</style>