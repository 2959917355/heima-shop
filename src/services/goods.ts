import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

/**
 * 根据商品ID获取商品信息的API函数
 * @param id - 商品的唯一标识符
 * @returns 返回一个HTTP请求的Promise对象，包含商品信息
 */
export const getGoodsByIdApi = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: {
      id,
    },
  })
}
