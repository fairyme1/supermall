<template>
 <swiper>
       <swiper-item v-for="(item,i) in banners" :key="i">
        <a :href="item.link">
          <img :src="item.image" @load="swipperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
 name:'HomeSwipper',
  components:{
      Swiper,SwiperItem
  },
  props:{
    //   从home拿数据传过来
      banners:{
            type:Array,
            default(){
                return []
            }
        }
  },
  data(){
    return {
      isSwipperLoaded:false
    }
  },
  methods:{
    swipperLoad(){
      console.log('1111')
      if (! this.isSwipperLoaded){
        this.$emit('swipperLoad')
        this.isSwipperLoaded = true
      } 
    },
  },
}
</script>
<style>
</style>