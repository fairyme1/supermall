<template>
  <div class="bottom-bar">
  <div class="checkAll">
     <check-button :isChecked="isSelectAll" @click.native="selectAll"></check-button>
     <span>全选</span>
  </div>
     <div class="totalPrice">
        合计：{{totalPrice}}
     </div>
     <div class="goCalc">去结算({{checkedLength}})</div>
  </div>
  
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
    name:'CartBottomBar',
  components:{CheckButton},
  data(){
    return {
    }
  },
  computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
          return '￥' +this.$store.state.cartList.filter(item=>{
              return item.checked
          }).reduce((preValue,item)=>{
              return preValue + item.price *item.count
          },0).toFixed(2)
      },
      checkedLength(){
          return this.$store.state.cartList.filter(item=>
          {return item.checked}).length
      },
      isSelectAll(){
          if(this.cartList.length ===0) return false
        //   方法一 用过滤filter查找
        //   ! 10 = false,!0 = true,找到未选中的item，取反它的长度
        //  return ! this.cartList.filter(item=>{
        //       return !item.checked
        //       }).length
        // 方法二 用find查找,找到就跳出了
       return ! this.cartList.find(item=>{
            return !item.checked
        })
             // 方法三 普通遍历
        // for(let item of this.cartList){
        //     if(!item.checked){
        //         return false
        //     }
            
        // }
        // return true          
      }
  },
  methods:{
      selectAll(){
          if(this.isSelectAll){
              this.cartList.forEach(item => item.checked=false)
          }else{
              this.cartList.forEach(item=>item.checked = true)
          }
          
      }
  },
}
</script>
<style scoped>
.bottom-bar{
    height: 49px;
    background-color: #ffffff;
    position: relative;
    display: flex;

  
}
.checkAll{
     margin-left: 30px;
     width: 50px;
}
.totalPrice{
    margin-left: 20px;
    margin-top: 14px;
    font-size: 20px;
    flex: 1
}
.goCalc{
   
 width: 120px; 
 height: 50px;
 line-height: 50px;
  text-align: center;
  color: #ffffff;
   
         justify-content: center;
    background-color:rgb(238, 45, 45);

}
</style>