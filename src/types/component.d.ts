/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof import('@/components/XtxSwiper.vue')['default']
    XtxGuess: typeof import('@/components/XtxGuess.vue')['default']
  }
}

//组件实列类型
export type XtxGuessInstance = InstanceType<typeof import('@/components/XtxGuess.vue')['default']>
