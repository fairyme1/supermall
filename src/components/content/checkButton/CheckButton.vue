<template>
  <div class="checkbutton" :class="{active:isChecked}">
    <img src="~assets/img/cart/timg.jpg" v-show="isChecked" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  data() {
    return {
      
    };
  },
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  methods: {
   
  }
};
</script>
<style scoped>
.checkbutton {
  height: 25px;
  width: 25px;

  border-radius: 50%;
  border: 2px solid #aaaaaa;
}



.checkbutton img {
  color: blueviolet;
  height: 13px;
  width: 13px;
  margin-left: 3px;
  margin-top: 3px;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
}
.active{
  background-color: crimson;
}
</style>