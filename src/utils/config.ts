//主色调
export const COLOR_THEME_PRIMARY = '#bdaf8d'

//系统信息
export const SYSTEM_WINDOW_INFO = uni.getWindowInfo()

//胶囊按钮信息
export const MENU_BUTTON_RECT_INFO = uni.getMenuButtonBoundingClientRect
  ? uni.getMenuButtonBoundingClientRect()
  : {}

//订单状态
export const ORDER_STATUS_ENUMS = () => [
  {
    text: '已关闭',
    value: -1,
  },
  {
    text: '待付款',
    value: 0,
    icon: 'icon-wallet',
    myOrder: true,
  },
  {
    text: '待发货',
    value: 1,
    icon: 'icon-daifahuo1',
    myOrder: true,
  },
  {
    text: '待取货',
    value: 2,
    icon: 'icon-daiquhuo',
    myOrder: true,
  },
  {
    text: '待收货',
    value: 3,
    icon: 'icon-daiquhuo1',
    myOrder: true,
  },
  {
    text: '退款',
    value: 4,
    icon: 'icon-qianbao',
    myOrder: true,
  },
  {
    text: '完成',
    value: 5,
  },
]

//菜单按钮
export const menuListInfo = () => [
  {
    start: '#CBD6FC',
    end: '#EDEFFD',
    color: '#6470e8',
    icon: 'icon-database-2-fill',
    text: '我的积分',
  },
  {
    start: '#fadbd3',
    end: '#fff4f3',
    color: '#ef807a',
    icon: 'icon-cart1',
    text: '购物商城',
  },
  {
    start: '#d4f2ee',
    end: '#ecf7f6',
    color: '#79aa9c',
    icon: 'icon-dianpu',
    text: '商家地图',
  },
  {
    start: '#a6f2fd',
    end: '#e8fbfd',
    color: '#45c2d3',
    icon: 'icon-hezuoguanxi',
    text: '我要合作',
  },
]
