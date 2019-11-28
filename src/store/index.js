import Vue from 'vue'
import Vuex from 'vuex'

import mutations from  './mutations'

import actions from './actions'
import getters from './getters'
// 1 安装插件
 Vue.use(Vuex)
// 2 创建store对象
const state ={cartList:[]}
const store = new Vuex.Store({
    state,
    getters,
    // mutation单一职责原则做跟踪
    mutations,
        //    2 for循环
            // let oldProduct = null
            // for(item in this.cartList){
            //     if (payLoad.iid === item.iid ){
            //         oldProduct = item
            //     }
            // }   
      actions,

  
})
// 3 挂载vue实例上，导出
export default store




