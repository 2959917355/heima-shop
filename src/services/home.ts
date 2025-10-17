import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 获取首页轮播图数据
 * @param {number} distributionSite - 广告区域展示位置  1 为首页（默认值）2 为商品分类页
 * @returns {Promise} 返回一个Promise对象，用于处理异步请求结果
 */
export const getHomeBannerApi = (distributionSite: number = 1): Promise<any> => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 获取首页分类数据的API函数
 * 该函数用于从后端获取首页的分类信息
 * @returns {Promise} 返回一个Promise对象，包含请求结果数据
 */
export const getHomeCategoryApi = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 获取首页热门推荐数据的API函数
 * 该函数用于从后端获取首页的热门推荐商品/内容数据
 * @returns 返回一个Promise，解析为热门推荐数据数组
 */
export const getHomeHotApi = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 获取首页猜你喜欢商品列表的API函数
 * @returns 返回一个Promise，解析为HotItem类型的数组
 */
export const getHomeGuessLikeApi = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
