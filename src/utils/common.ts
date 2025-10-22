//路由跳转方法
export const routerTo = (url: string, type: 'navigate' | 'redirect' | 'reLaunch' = 'navigate') => {
  if (type === 'navigate') {
    uni.navigateTo({
      url,
    })
  } else if (type === 'redirect') {
    uni.redirectTo({
      url,
    })
  } else if (type === 'reLaunch') {
    uni.reLaunch({
      url,
    })
  } else {
    return '错误信息'
  }
}
//返回上一页
export const goBack = (delta = 1) => {
  uni.navigateBack({
    delta,
  })
}
// 提示框
export const showToast = ({
  title = '',
  duration = 1500,
  icon = 'none',
  mask = false,
}: UniApp.ShowToastOptions) => {
  uni.showToast({
    title: String(title),
    duration,
    icon,
    mask,
  })
}
