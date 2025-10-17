<template name="skeleton">
  <view class="sk-container">
    <view class="index index data-v-83a5a03c data-v-83a5a03c">
      <scroll-view
        :enable-back-to-top="true"
        :refresher-enabled="true"
        :scroll-y="true"
        class="scroll-view scroll-view data-v-83a5a03c data-v-83a5a03c"
      >
        <view class="banner banner data-v-83a5a03c data-v-83a5a03c">
          <view is="components/XtxSwiper" class="data-v-83a5a03c data-v-83a5a03c">
            <view class="carousel XtxSwiper--carousel">
              <swiper autoplay circular :interval="3000" :current="0"></swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
        </view>
        <view class="category category data-v-83a5a03c data-v-83a5a03c">
          <view is="components/CategoryPanel" class="data-v-83a5a03c data-v-83a5a03c">
            <view class="category CategoryPanel--category">
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-788 sk-text"
                  >居家</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-592 sk-text"
                  >锦鲤</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-573 sk-text"
                  >服饰</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-397 sk-text"
                  >母婴</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-937 sk-text"
                  >个护</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-984 sk-text"
                  >严选</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-916 sk-text"
                  >数码</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-616 sk-text"
                  >运动</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-903 sk-text"
                  >杂项</text
                >
              </navigator>
              <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                <image class="icon CategoryPanel--icon sk-image"></image>
                <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-123 sk-text"
                  >品牌</text
                >
              </navigator>
            </view>
          </view>
        </view>
        <view class="hot hot data-v-83a5a03c data-v-83a5a03c">
          <view is="components/HotPanel" class="data-v-83a5a03c data-v-83a5a03c">
            <view class="panel HotPanel--panel hot HotPanel--hot">
              <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                  <text
                    class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-504 sk-text"
                    >特惠推荐</text
                  >
                  <text
                    class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-882 sk-text"
                    >它们最实惠</text
                  >
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
              </view>
              <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                  <text
                    class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-283 sk-text"
                    >爆款推荐</text
                  >
                  <text
                    class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-368 sk-text"
                    >它们最受欢迎</text
                  >
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
              </view>
              <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                  <text
                    class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-528 sk-text"
                    >一站买全</text
                  >
                  <text
                    class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-119 sk-text"
                    >使用场景下精心优选</text
                  >
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
              </view>
              <view class="item HotPanel--item">
                <view class="title HotPanel--title">
                  <text
                    class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-57 sk-text"
                    >领券中心</text
                  >
                  <text
                    class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-873 sk-text"
                    >更多超值优惠券</text
                  >
                </view>
                <navigator class="cards HotPanel--cards" hover-class="none">
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </navigator>
              </view>
            </view>
          </view>
        </view>
        <view class="like like data-v-83a5a03c data-v-83a5a03c">
          <view is="components/XtxGuess" class="r r data-v-83a5a03c data-v-83a5a03c">
            <view class="caption XtxGuess--caption">
              <text
                class="text XtxGuess--text sk-transparent sk-text-0-0000-436 sk-text sk-pseudo sk-pseudo-circle"
                >猜你喜欢</text
              >
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-423 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-84 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-788 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-592 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-573 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-397 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-937 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-984 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-916 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-616 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-903 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-123 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-504 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-882 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-283 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-368 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-528 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-119 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-57 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text-14-2857-873 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-436 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
