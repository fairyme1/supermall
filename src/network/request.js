// 封装多个实例,一个实例封装一个，导出可分开导出
import axios from 'axios'
// 第三种方式-promise
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/v1',
        timeout: 5000
    })
   
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        console.log(err)
    })
 
    instance.interceptors.response.use(
    res=>{
            return res.data
        },
    err=>{console.log(err)})
   return instance(config)
}

