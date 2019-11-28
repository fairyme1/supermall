<template>
<!-- 如果加上是哪个这个div就会不轮播 -->
  <!-- <div> -->
      <swiper class="swipperItem">
          <swiper-item v-for="(item,i) in topImages" :key="i" >
              <img :src="item"/>
          </swiper-item>
      </swiper>
<!-- </div> -->
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:"DetailSwipper",
     components:{
    Swiper, SwiperItem
  },
//   展示传过来的数据
  props:{
      topImages:{
          type:Array,
          default(){
              return []
          }

      }
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style>
.swipperItem{
    height: 300px;
    overflow: hidden;
}

</style>