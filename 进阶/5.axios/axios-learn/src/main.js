import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//一、使用全局axios
//3.设置默认配置(有很多配置)TODO
// axios.defaults.baseURL = 'http://localhost:9000'
// axios.defaults.timeout = 5000

//1.发送普通请求
// axios({
//   url: '/column/findAll',
//   /*默认是get*/
//   method: 'get',
  //参数
  /*params: {
    type: 'pop',
    page: 1
  }*/
// }).then(res => {
//   console.log(res);
// })

//2.发送并发请求（axios中内容与上面的一致）
/*axios.all([axios(),axios()])
    .then(axios.spread((res1,res2) => {
        console.log(res1);
        console.log(res2);
}))*/


//二、创建axios示例
//创建实例
/*const instance1 = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 5000
})*/
//使用实例
/*
instance1({
  url:  '/column/findAll'
}).then(res => {
  console.log(res)
})*/

//三、封装axios模块

import {request} from "./network/request"
/*
request(
    {
        url: '/column/findAll'
    }, res => {
        console.log(res);
    }, err => {
        console.log(err);
    }
)*/

//四、最终方案

request({
  url: '/column/findAll'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})