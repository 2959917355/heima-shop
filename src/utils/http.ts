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
const baceURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
/**
 * HTTP请求拦截器
 * 用于统一处理请求配置，如URL拼接、超时设置和请求头添加
 * @param options - UniApp请求配置选项
 */
const httpInterceptor = (options: UniApp.RequestOptions) => {
  // 检查URL是否以http开头，如果不是则添加基础URL
  if (!options.url.startsWith('http')) {
    options.url = baceURL + options.url
  }
  // 设置请求超时时间为10秒
  options.timeout = 10000
  // 添加自定义请求头，标识请求来源为小程序
  options.header = {
    ...options.header,
    'X-Request-Source': 'miniapp',
  }
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
