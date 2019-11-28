import {ADD_CONTENT,ADD_TO_CART} from './mutation-types'

export default {
    
        [ADD_CONTENT](state,oldProduct){
          oldProduct.count ++
        },
    
        [ADD_TO_CART](state,payLoad){
          payLoad.checked =true
          state.cartList.push(payLoad)
        },
      
    }
