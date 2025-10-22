// 会员中心-地址管理
// 添加收货地址
// POST
// /member/address
// isDefault:是否为默认，1为是，0为否 ，注意：此处按照接口实现

import type { AddressItem, AddressParams } from '@/types/address'
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

/**
 * 获取会员地址列表接口
 */
export const getMemberAddressApi = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收获地址详情接口
 * @param {string} id - 地址ID(路径参数)
 */
export const getMemberAddressDetailApi = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

/**
 * 修改会员地址接口
 * @param {string} id - 地址ID(路径参数)
 * @param {AddressParams} data - 地址参数对象，包含地址相关信息
 */
export const putMemberAddressApi = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
