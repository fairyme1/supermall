import { debounce } from "common/utils/Utils";
export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null
        }
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh, 50);
        this.itemImgListener = () => refresh()
        this.$bus.$on("itmeImgLoad", this.itemImgListener);
        console.log('我是混入的哟')
    }
}

import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            isShowTop: false
        }
    },
    methods:{
        backTopClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
          }
    },
  
}