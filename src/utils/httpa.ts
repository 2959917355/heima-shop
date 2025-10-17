const baseUrl = 'http://localhost:8080'

const OnInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //拼接url
    options.url = baseUrl + options.url

    //设置请求头
    options.header = {
      ...options.header,
      token111: 'aaaBbb1212',
      uniApp: 'uniApp',
    }

    // 添加请求超时
    options.timeout = 5000
  },
}

uni.addInterceptor('request', OnInterceptor)

export const httpA = (options: UniApp.RequestOptions) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        //数据请求成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
          //401错误 ，token过期
        } else if (res.statusCode === 401) {
          uni.showToast({ title: '登录过期，请重新登录', icon: 'none' })
        }
      },
      fail: (err) => {
        reject(err)
        uni.showToast({ title: '网络错误', icon: 'none' })
      },
    })
  })
}
