<template>
  <view class="index">
    <!-- 自定义头部导航 -->
    <view class="header">
      <CustomNavbar />
    </view>
    <!-- 轮播图 -->
    <view class="banner">
      <XtxSwiper :list="bannerList" />
    </view>
    <!-- 首页分类 -->
    <view class="category">
      <CategoryPanel :list="categoryList" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem, CategoryItem } from '@/types/home'

import CustomNavbar from '@/components/CustomNavbar.vue'
import { getHomeBannerApi, getHomeCategoryApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/components/CategoryPanel.vue'

//获取轮播图数据
const bannerList = ref<BannerItem[]>([]) // 轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  console.log('轮播图数据', res)
  bannerList.value = res.result
}

//获取前台分类数据
const categoryList = ref<CategoryItem[]>([]) // 前台分类数据
const getCategoryData = async () => {
  const res = await getHomeCategoryApi()
  console.log('前台分类数据', res)
  categoryList.value = res.result
}
//页面加载
onLoad(() => {
  getHomeBannerData()
  getCategoryData()
})
</script>

<style lang="scss" scoped>
.index {
  background: #f7f7f7;
}
</style>
