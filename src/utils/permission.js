import router from '@/router'
import {
  getJwtToken
} from './token'

// 路由白名单 无需登录即可访问的页面

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  const jwtToken = getJwtToken()
  console.log(to)

  if (!to.meta.noNeedLogin && !jwtToken) {
    // 这边需要加上 “/”作为根路径修复
    // 弹窗提示尚未登录，跳转到登录页面
    console.log('弹窗提示尚未登录，跳转到登录页面')
    next('/login/loginform')
  }

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
