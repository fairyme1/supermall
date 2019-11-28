import Toast from 'components/common/toast/Toast'

const obj ={
}
// 自动传入vue
obj.install = function(Vue){
    console.log('执行了object的安装',Vue);
    // 1 创建组件构造器
    const toastContrustor = Vue.extend(Toast)
    // 2 创建组件对象。（new的方式，根据组件对象，可以创造出来一个组件对象。）
    const toast = new toastContrustor()
    // 3 手动挂载对象，将组件对象挂载到某一个元素上，就像vue实例挂载到appdiv上
    toast.$mount (document.createElement('div'))
    // 4 toast.$el 对应的就是div了，将它添加到body上
    document.body.appendChild(toast.$el)
    // 5 prototype 原生添加
        Vue.prototype.$toast = Toast;
        console.log(this.$toast);
    
}
// default可改名字在导出的时候
export default obj

