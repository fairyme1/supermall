<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
   <main-tab-bar/>
  </div>
</template>
<script>
 import MainTabBar from './components/content/mainTabBar/MainTabBar' 
export default {
  name: 'app',
  components:{
    MainTabBar
  }
 
}
</script>

<style>
/* 样式路径导入用双引号 */
@import "assets/css/base.css"

</style>
