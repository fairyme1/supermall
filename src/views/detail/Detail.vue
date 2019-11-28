<template>
  <div id ="detail">

    <DetailNavBar class="detailNav" @titleClick="titleClick" ref="detailnav"></DetailNavBar>
    <!-- scroll 一定不要忘记设置固定高度 -->
    <scroll class="scrollContent"  ref="scroll" :probe-type="3" 
     @position_scroll="position_scroll">
    <detail-swipper :topImages="topImages"></Detail-swipper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
   <detail-param-info :paramInfo="goodsParam" ref="params"></detail-param-info>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top class="backTop" @click.native="backTopClick" v-if="this.isShowTop"></back-top>
    <toast :message = "toastMessage" :showMessage="isShowMsg"></toast>
  </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwipper from './childComps/DetailSwipper'
import detailBaseInfo from './childComps/detailBaseInfo'
import detailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'
import GoodsList from 'components/content/goods/GoodsList'


import {itemListenerMixin,backTopMixin} from 'common/mixin'
import {debounce} from 'common/utils/Utils'

import {getDetail,goodsInfo ,Shop,GoodsParam,getRecommend} from 'network/detail'

import {mapActions} from 'vuex'


export default {
  name:"Detail",
  components:{
    DetailNavBar,
    DetailSwipper,
    detailBaseInfo,
    detailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
     DetailCommentInfo,
     Toast,
    Scroll,
    GoodsList,
    DetailBottomBar
    },
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{} ,
      shop:{},
      detailInfo:{},
      goodsParam:{},
      commentInfo:{},
      recommend:[],
           //使用混入
      // itemImgListener:null
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      toastMessage:'',
      isShowMsg:false,

    }
  },
  mixins:[itemListenerMixin,backTopMixin],
  created(){
    // 1保存查询iid
    this.iid = this.$route.params.iid
    // 2请求详情数据
    getDetail(this.iid).then(res=>{
      console.log(res)
      // 轮播图
      this.topImages =  res.result.itemInfo.topImages
           
      // 商品信息
      const data = res.result
      // goods对象
      this.goods = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
     //  取出评论信息
      if(data.rate.cRate !==0){
      this.commentInfo = data.rate.list[0]
       }
    })
    // 请求推荐数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommend = res.data.list
    })
    // 获取navbar的title的顶部位置
    this.getThemeTopY=debounce(()=>{
      this.themeTopYs=[]
     this.themeTopYs.push(0)
      this.themeTopYs.push(-this.$refs.params.$el.offsetTop) //+
      this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(-Number.MAX_VALUE)

      console.log(this.themeTopYs)
   
    },100)
  },
  mounted(){
  
  },
  
  destoty(){ console.log('destory')
  // 取消当前页面全局事件监听
  this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods:{
    ...mapActions(['addCart1']),
    addCart(){
      // 获取商品需要展示的信息
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.nowPrice;
        product.iid = this.iid;
        // 将商品添加到购物车里
        // this.$store.cartList.push()
        // 要经过mutation,
        // this.$store.commit('addCart',product)
        // 单一职责原则，提交到action
        this.$store.dispatch('addCart',product).then(res=>{
  // 1 
          console.log(res)
          this.isShowMsg = true
           this.toastMessage = res
           setTimeout(()=>{
             this.isShowMsg = false;
             this.toastMessage =''
           },2000)
          // 2 插件封装后
          // console.log(this.$toast)
          // this.$toast.show(res,2000)
        })

        // 方式二 actions映射，因为方法名重了，故用addCart1实验
        // this.addCart1(product).then(res=>{console.log(res)})
// dispatch会返回个promise
// Actions也会映射

        


        
    },
    position_scroll(position){
       this.isShowTop = -position.y > 1000;
      // console.log(position) 
      const positionY = -position.y //+
      for(var i =0; i<this.themeTopYs.length;i++){
        // console.log(i)//i是字符串类型可用i*1转为int 或 paserInt(i)
        const length=this.themeTopYs.length
        // console.log(length)
        //1 普通方式  因为i+1，会越界，故要分开判断
        // if(this.currentIndex !=i && ((i<length-1 && positionY>-this.themeTopYs[i]
        // && positionY<-this.themeTopYs[i+1])||(i === (this.themeTopYs.length-1)
        //  && positionY>-this.themeTopYs[i]))){
        //    console.log(this.themeTopYs[i])
        //   this.currentIndex = i;
        // this.$refs.detailnav.currentIndex = i;
        //   console.log(this.$refs.detailnav.currentIndex+'当前')
        // }
        // 2 hack，给数组中添加一个最大值，让其判断length-1次
        if(this.currentIndex !=i &&(i<length-1 && positionY>-this.themeTopYs[i] 
        && positionY <-this.themeTopYs[i+1])){
          this.currentIndex = i;
        this.$refs.detailnav.currentIndex = i;
        // console.log(this.currentIndex)
        }
      }
      
    },
    imgLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      console.log(index)
      this.$refs.scroll.scrollTo(0,this.themeTopYs[index],100)
 
    }
  },
}
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detailNav{
  /* 相对定位依然保持在自己原来的位置 */
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.scrollContent{
  height: calc(100% - 44px - 49px);
}

</style>