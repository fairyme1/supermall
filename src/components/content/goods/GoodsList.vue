<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,i) in goods" 
    :goodsListItem = "item" :key="i" class="goods-list-item" >
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      //   默认值为空数组
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.goodslist{
    display: flex;
    /* 屏幕包裹 */
    flex-wrap: wrap;
    /* 均等分 */
    justify-content:space-around;
}


</style>