<template>
  <view class="index">
    <!-- 自定义头部导航 -->
    <view class="header">
      <CustomNavbar />
    </view>
    <scroll-view
      scroll-y
      @refresherrefresh="onRefresh"
      @scrolltolower="onScrolltolower"
      enable-back-to-top
      refresher-enabled
      :refresher-triggered="isTriggered"
      class="scroll-view"
    >
      <PageSkeleton v-if="isTriggered" />
      <template v-else>
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
        <!-- 猜你喜欢 -->
        <view class="like">
          <XtxGuess ref="guessRef" />
        </view>
      </template>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import PageSkeleton from '@/components/PageSkeleton.vue'
import CustomNavbar from '@/components/CustomNavbar.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotApi } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from '@/components/CategoryPanel.vue'
import HotPanel from '@/components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

//获取轮播图数据
const bannerList = ref<BannerItem[]>([]) // 轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  console.log('轮播图数据', res)
  bannerList.value = res.result
}

//获取前台分类数据
const categoryList = ref<CategoryItem[]>([]) // 前台分类数据
const getHomeCategoryData = async () => {
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

//滚动触底
const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  console.log('触底了')
  guessRef.value?.getMore()
}
//下拉刷新
const isTriggered = ref(false)
const onRefresh = async () => {
  //开启动画
  isTriggered.value = true
  //重置数据
  guessRef.value?.resetData()
  //获取数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotApi()])
  //关闭动画
  isTriggered.value = false
}
//页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotData()
})
</script>

<style lang="scss" scoped>
.index {
  background: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
