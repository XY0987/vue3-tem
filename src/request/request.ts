import axios from 'axios'

import type { AxiosInstance } from 'axios'
import { MyRequestConfig } from '../types/apiTypes'

class MyRequest {
  // request实例=>axios的实例
  instance: AxiosInstance
  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      (config) => {
        //  全局请求成功的拦截
        const token = localStorage.getItem('token')
        if (token) {
          config.headers.Authorization = token
        }
        return config
      },
      (err) => {
        console.log('全局请求失败的拦截器')
        return err
      }
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        // 这里返回的是res.data
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  //   封装网络请求的方法
  request<T = any>(config: MyRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requsetSuccessFn) {
      config = config.interceptors.requsetSuccessFn(config)
    }
    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          /*
          全局拦截器里边已经有了返回res.data
          这里拿到的是后端返回的结果，并对其进行二次限制
          */
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default MyRequest

export const myRequest = new MyRequest({
  baseURL: '/api'
})
