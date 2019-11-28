import {ADD_CONTENT,ADD_TO_CART} from './mutation-types'
export default {
        addCart(context,payLoad){
            // payload新添加的商品
            // 1 查找数组中是否有该商品 find
             // 设置变量oldProduct
             return new Promise((resolve,reject)=>{
                let oldProduct = context.state.cartList.find((item)=>{
                    // 三个等号
                    return item.iid === payLoad.iid
                })
                
                // product指向该item商品，进行修改
                if(oldProduct != null ){
                   context.commit(ADD_CONTENT,oldProduct)
                    resolve('商品数量加一')
                }else{
                    payLoad.count = 1
                    context.commit(ADD_TO_CART,payLoad)
                    resolve('加入购物车成功')
                }
             }
           
)
        }
    
}
