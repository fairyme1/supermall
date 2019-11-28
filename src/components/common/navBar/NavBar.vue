<template>
<!-- 可能存在多个导航，故用class不用id -->
  <div class="nav-bar">
    <div class="left"> <slot name="left"></slot></div>
    <div class="center"> <slot name="center"></slot></div>
    <div class="right"> <slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar',
  components:{},
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style>
.nav-bar{
  /* display flex布局 */
  display: flex;
  /* 行高字体撑起来的，无字无高 */
    height: 44px;
  line-height: 44px;

  text-align: center;
     box-shadow: 0 2px 2px rgba(100, 100, 183, 0.1),
}

.left,.right{
    width: 60px
}
.center{
    flex: 1;
}
</style>