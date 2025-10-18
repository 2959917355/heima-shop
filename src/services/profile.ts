import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人资料的函数
 * 该函数发送一个GET请求到服务器的/member/profile端点
 * @returns {Promise} 返回一个Promise对象，包含服务器响应的数据
 */
export const getMemberProfileApi = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}
