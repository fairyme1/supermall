<template>
  <div class="toastMessage" v-show="showMessage" >
      {{message}}
  </div>
</template>

<script>
export default {
    name:'Toast',
  components:{},
  props:{
    message:{
        type:String,
        default:''
    },
    showMessage:{
        type:Boolean,
        default:false
    }
  },
  data(){
    return {
      // showMessage:false,
      // message:'',
    }
  },
  methods:{
    // es6可以这样写默认值
    // 若使用封装的toast插件
    // show(message,duration){
    //   this.showMessage =true
    //   this.message = message
    //   setTimeout(()=>{
    //          this.isShowMsg = false;
    //          this.toastMessage =''
    //        },duration)
    // }
  },
}
</script>
<style scoped>
.toastMessage{
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
 /* 根据自己的高度和宽度偏移 */
 transform: translate(-50%,-50%);
 padding :8px 10px;
    /* background-color: dimgray; */
    color:#ffffff;
    background-color: rgba(0, 0,0, .75)

}
</style>