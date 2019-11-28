import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyLoad'
import toast from './components/common/toast/index'

Vue.config.productionTip = false

// 用原型给$bus赋值vue实例
Vue.prototype.$bus = new Vue()
// 图片懒加载，安装插件，可设置占位符
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/cart/tick.jpg')
})
// 安装toast插件
Vue.use(toast)
console.log(Vue);
new Vue({
  render: h => h(App),
  router,
  store,
  // toast
  
}).$mount('#app')
