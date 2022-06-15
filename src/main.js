import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import BottomText from '@/commonCommonponents/BottomText'
import TopHeader from '@/commonCommonponents/TopHeader'
import FanLoading from '@/commonCommonponents/FanLoading'
import FanArticleCard from '@/commonCommonponents/ArticleCard'

// 偷懒-把所有组件都引入了

import '@/utils/permission'

import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'

Vue.use(Lazyload)

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.use(Vant)
Vue.component('bottom-text', BottomText)
Vue.component('top-header', TopHeader)
Vue.component('fan-loading', FanLoading)
Vue.component('fan-article-card', FanArticleCard)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
