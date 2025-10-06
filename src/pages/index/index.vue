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
    <!-- 热门推荐 -->
    <view class="hot">
      <HotPanel :list="hotList" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'

import CustomNavbar from '@/components/CustomNavbar.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'

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

//获取热门推荐数据
const hotList = ref<HotItem[]>([]) // 热门推荐数据
const getHotData = async () => {
  const res = await getHomeHotApi()
  console.log('热门推荐数据', res)
  hotList.value = res.result
}

//页面加载
onLoad(() => {
  getHomeBannerData()
  getCategoryData()
  getHotData()
})
</script>

<style lang="scss" scoped>
.index {
  background: #f7f7f7;
}
</style>
