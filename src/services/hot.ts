import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type HotParams = PageParams & { subType: string }

/**
 * 热门推荐
 * 目前热门推荐分为: 抢先尝鲜,新品预告
 * @param {string} url 请求地址
 * @param {PageParams} data 请求参数
 * @returns {Promise} 返回一个Promise对象，包含请求结果数据
 */
export const getHotRecommendApi = (url: string, data?: HotParams): Promise<any> => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
