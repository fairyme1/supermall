<template>
  <div class="recommend">
      <div v-for="(item,i) in recommends" :key="i" class="recommends-item">
          <a :href="item.link">
              <img :src="item.image">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
  components:{},

  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style>
.recommend{
    display:flex;
    /* width: 100%; */
    text-align: center;
    font-size: 12px;
    /* 上 左右 下 */
    padding: 15px 0 20px ;
    border-bottom: 8px solid #eeeeee;
 
}
.recommends-item{
    /* 均等分 */
    flex: 1;
    
}
.recommends-item img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
}

</style>