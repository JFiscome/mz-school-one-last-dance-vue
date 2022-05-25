import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import BottomText from '@/commonCommonponents/BottomText'
import TopHeader from '@/commonCommonponents/TopHeader'

import '@/utils/permission'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.component('bottom-text', BottomText)
Vue.component('top-header', TopHeader)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
