<template>
  <div class="tab-control">
      <!-- 如果只是文字不一样，就不用弄插槽了 -->
      <!-- 动态绑定class对象 -->
    <div v-for="(item,i) in titles" :key="i" 
    class="tab-control-item" :class="{active:i == currentIndex}" @click="tabClick(i)">
    <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
     name:"TabControl",
  components:{},
  props:{
    //   传过来个记录标题的数组
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
    return {
        currentIndex:0
    }
  },
  methods:{
      tabClick(i){
          this.currentIndex = i;
          this.$emit('tabClick1',i)
      }

  },
}
</script>
<style>
.tab-control{
    display: flex;
    text-align: center;
}
.tab-control-item{
    flex:1;
    height: 40px;
    line-height: 40px

}

.active{
    color: var(--color-high-text)
}
.active span {
    /* 粗3px 实线  颜色  */
    border-bottom: 3px solid var(--color-tint)
}
</style>