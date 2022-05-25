import axios from 'axios'
import {
  Notify
} from 'vant'
import { getJwtToken } from './token'
const axiosInstance = axios.create({
  baseURL: 'https://www.tideway.store/dance/v1/',
  // baseURL: 'http://localhost:12000/v1/',
  // 超时时间 ms
  timeout: 5000,
  headers: {}
})

// 拦截器
// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.timestamp = Date.now()
  config.headers.token = getJwtToken()
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// oop 面向对象编程
// aop 面向切面编程

// 全局异常处理
// 统一处理返回体
// axios拦截器 请求拦截器和恢复拦截器

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么

  //   对成功的数据也可以进行处理
  return response.data.response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么

  // 给用户进行提示
  const {
    status
  } = error.response
  console.log('拦截器触发了错误的:错误的状态码为', status)
  let errorMessage = ''
  if ([404, 405].indexOf(status) !== -1) {
    errorMessage = [status, '请检查接口Api是否存在，或者请求方式是否正确'].join(':')
  } else if (status >= 500) {
    // 500 开头是服务器异常
    errorMessage = [status, '服务器开小差了~'].join(':')
  } else {
    console.log(error)
    //   用户操作的异常
    const {
      errorCode,
      message
    } = error.response.data
    errorMessage = [errorCode, message].join(':')
  }
  Notify(errorMessage)
  return Promise.reject(error)
})

export default axiosInstance
