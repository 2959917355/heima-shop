// 会员中心-地址管理
// 添加收货地址
// POST
// /member/address
// isDefault:是否为默认，1为是，0为否 ，注意：此处按照接口实现

import type { AddressParams } from '@/types/address'
import { http } from '@/utils/http'

/**
 * 添加会员地址接口
 * @param data - 地址参数对象，包含地址相关信息
 * @returns 返回HTTP请求结果，包含地址添加后的相关信息
 */
export const postMemberAddressApi = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}
