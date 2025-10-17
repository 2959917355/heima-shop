import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

/**
 * 获取分类顶部数据的API函数
 * 该函数用于向服务器请求分类顶部相关的数据
 * @returns {Promise} 返回一个Promise对象，包含服务器响应的数据
 */
export const getCategoryTopApi = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
