import router from '@/router'
import { getJwtToken } from './token'

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  const jwtToken = getJwtToken()
  if (to.name === 'login' && jwtToken) {
    next('/')
  } else {
    next()
  }
})

// 路由全局后置守卫
router.afterEach((to, from) => {
  // ...
  document.title = '掌上校园 - ' + (to.meta && to.meta.title ? to.meta.title : '页面')
})
