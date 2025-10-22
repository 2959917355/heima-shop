<script setup lang="ts">
import { deleteMemberAddressByIdAPI, getMemberAddressApi } from '@/services/address'
import type { AddressItem } from '@/types/goods'
import { routerTo, showToast } from '@/utils/common'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

//获取用户收获地址列表
const addressList = ref<AddressItem[]>()
const getMemberAddressData = async () => {
  const res = await getMemberAddressApi()
  console.log('用户收获地址列表', res)
  addressList.value = res.result
}
//删除地址
const delAddress = (id: string) => {
  uni.showModal({
    title: '提示',
    content: '确定要删除该地址吗？',
    success: async (res) => {
      if (res.confirm) {
        // 删除地址
        const res = await deleteMemberAddressByIdAPI(id)
        console.log('删除地址', res)
        if (res.code === '1') showToast({ title: '删除成功' })
        // 更新地址列表
        getMemberAddressData()
      }
    },
  })
}

//页面显示时触发
onShow(() => {
  getMemberAddressData()
})
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addressList?.length" class="address">
        <uni-swipe-action class="address-list">
          <!-- 收货地址项 -->
          <view class="item" v-for="item in addressList" :key="item.id">
            <view class="item-content">
              <view class="left">
                <view class="user">
                  {{ item.receiver }}
                  <text class="contact">{{ item.contact }}</text>
                  <text v-if="item.isDefault" class="badge">默认</text>
                </view>
                <view class="locate">{{ item.fullLocation }} {{ item.address }}</view>
              </view>
              <view class="right">
                <button
                  type="warn"
                  size="mini"
                  class="edit"
                  @click="routerTo(`/pagesMember/address-form/address-form?id=${item.id}`)"
                >
                  修改
                </button>
                <!-- 右侧按钮 -->
                <button @tap="delAddress(item.id)" class="btn" type="primary" size="mini">
                  删除
                </button>
              </view>
            </view>
          </view>

          <!-- 收货地址项 -->
        </uni-swipe-action>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/address-form/address-form">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  color: #fff;
  border-radius: 0;
  padding: 0;
  background-color: #cf4444;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    width: 100%;
    display: flex;
    // 主要内容
    .left {
      width: 80%;
      flex-shrink: 0;
      padding: 40rpx 10rpx 38rpx;
      border-bottom: 1rpx solid #ddd;
    }

    //操作按钮
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10rpx;
      text-align: center;
      border-bottom: 1rpx solid #ddd;
    }
  }
  .address-list {
    .item:last-child .left,
    .item:last-child .right {
      border-bottom: none;
    }
  }
  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;

    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
