<script setup lang="ts">
import { useMemberStore } from '@/stores'
import '@/utils/http'
import { http } from '@/utils/http'
const getData = async () => {
  const res = await http<string[]>({
    method: 'GET',
    url: '',
    header: {},
  })
  console.log('请求成功', res.result)
}
const memberStore = useMemberStore()
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '1112345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" type="primary">发送请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
