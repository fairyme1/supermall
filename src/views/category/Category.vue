<template>
  <div class="warpper" ref="aaa">

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

export default {
     name:"Category",
    // 此处设置的滚动不能用created,要用mounted组件挂在完调用
  
  components:{},
  data(){
    return {
      scroll:null
    }
  },
  created(){},
   mounted(){
     console.log(document.querySelector('.warpper'))  ////也可直接传(类.content)
    this.scroll =  new BScroll(document.querySelector('.warpper'),{
      probeType:3,
      pullUpLoad:true
   })  
    this.scroll.on('scroll',(position)=>{
      // console.log(position)
    })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
        setTimeout(()=>{this.scroll.finishPullUp()},2000)

    })

     },
  methods:{},
}
</script>
<style scoped>
.warpper{
  height: 160px;
  background-color: red;
  /* 滑动下面的隐藏 */
  overflow: hidden;
  /* overflow-y:scroll; */
  
}
</style>