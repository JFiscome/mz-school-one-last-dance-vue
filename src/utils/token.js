import router from '@/router'
import {
  Toast
} from 'vant'

const USER_TOKEN_KEY = 'user-token'

export function setJwtToken (token) {
  localStorage.setItem(USER_TOKEN_KEY, token)
}

export function getJwtToken () {
  return localStorage.getItem(USER_TOKEN_KEY)
}

export function clearStorageAndRelogin () {
  localStorage.clear()
  Toast.success({
    message: '退出成功',
    onClose () {
      // 到首页面
      router.replace('/')
    }
  })
}
