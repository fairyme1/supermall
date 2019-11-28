<template>
  <div>
     <nav-bar>
         <div slot="center" class="navBar">
             <div v-for="(item,i) in titles" :key="i" class="titles"
              :class="{active:i === currentIndex}" @click="titleClick(i)"> 
                 {{item}}</div>
         </div>
         <div slot="left" class="back"  @click="back">
             <img src="~assets/img/common/back.jpg">
         </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  components:{NavBar},
  data(){
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
    }
  },
  methods:{
      titleClick(i){
          this.currentIndex = i 
          this.$emit('titleClick',i)
      },
      back(){
          this.$router.back()
      }
  },
}
</script>
<style>
.navBar{
    display: flex;
}
.titles{
   flex: 1
}
.back img{
    height: 18px;
    width: 18px;
    margin-top: 12px;
  
}
.active{
    color: red;
}
</style>