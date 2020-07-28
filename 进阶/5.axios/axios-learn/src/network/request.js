import axios from 'axios'
export function request(config) {
    //1.创建axios实例
    const instance1 = axios.create({
        baseURL: 'http://localhost:9000'
    })

    //2.axios拦截器
        //2.1请求拦截
    /*instance1.interceptors.request.use(config => {
        //在这里执行操作，例如：一些不符合浏览器要求的信息、一些显示在响应拿到前的信息、登录token
        console.log(config);
        return config;
    },err => {
        console.log(err);
    });*/
        //2.2响应拦截
    instance1.interceptors.response.use(res => {
        console.log(res);
    },err => {
        console.log(err);
    });

    //3.返回实例
    return instance1(config)
}
