<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop',
  components:{},
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style scroped>
.back-top{
    height: 50px;
    width: 50px;
    bottom: 60px;
    right: 15px;
    position: fixed;
}
.back-top img {
     height: 50px;
    width: 50px;
}
</style>