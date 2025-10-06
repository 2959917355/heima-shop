/**
 * 添加拦截器
 *   拦截 request 请求
 *   拦截 uploadFile 文件上传
 *  TODO：
 *    1.非 http 开头需拼接地址
 *    2.添加请求超时
 *    3.添加小程序请求标识
 *    4.添加 token 请求标识
 */

import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
/**
 * HTTP请求拦截器
 * 用于统一处理请求配置，如URL拼接、超时设置和请求头添加
 * @param options - UniApp请求配置选项
 */
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //1.非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }

    //2.添加请求超时
    options.timeout = 10000
    console.log(options)
    // 3.添加小程序请求标识
    options.header = {
      ...options.header,
      'source-header': 'miniapp',
    }
    //4.添加 token 请求标识
    const memberSore = useMemberStore()
    const token = memberSore.profile.token
    if (token) {
      options.header.Authorization = token
    }
    console.log(options)
  },
}
uni.addInterceptor('request', httpInterceptor)
// uni.addInterceptor('uploadFile', httpInterceptor){}
