<template>
  <div class="goods" @click="itemClick">
    <!-- <img :src="showImage" alt="" @load="imgLoad"/> -->
    <!-- 图片的懒加载 -->
        <img v-lazy="showImage" alt="" @load="imgLoad"/>
    <div goods-info>
        <p>{{goodsListItem.title}}</p>
        <span class="price">{{goodsListItem.price}}</span>
        <span class="collect">{{goodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"GoodsListItem",
  components:{},
  props:{
      goodsListItem:{
        type:Object,
        default(){
            return {}
        }
      }
  },
  data(){
    return {
    }
  },
  computed:{
    showImage(){
      // 逻辑或
      return this.goodsListItem.image ||this.goodsListItem.show.img
    }
  },
  methods:{
    itemClick(){
      this.$router.push('/detail/'+this.goodsListItem.iid)
    },
    imgLoad(){
      // console.log('图片加载完成')
      // this=vuecomponents
      this.$bus.$emit('itmeImgLoad')
      // 2 根据路由不同发送不同事件，让不同的页面刷新
    // if(this.$route.path.indexOf('/home'))
    // {
    //   this.$bus.$emit('homeitmeImgLoad')
    // }else if (this.$route.path.indexOf('/detail')){
    //       this.$bus.$emit('detailitemimageload')
    // }


    }
  },
}
</script>
<style scoped>
.goods {
    padding-bottom: 40px;
    width: 48%;
    position: relative;

  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

.price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .collect {
      left : 45%;
    position: relative;
  }

    .collect::before {
    content: '' ;
    position: absolute;
    left: -15px;
    top: -1px;
    width: 15px;
    height: 15px;
     background: url("~assets/img/common/collect.jpg") 0 0/14px 14px; 
  }
</style>