import axiosInstance from '@/utils/request'
import {
  setJwtToken
} from '@/utils/token'

export async function login (username, password) {
  const {
    token
  } = await axiosInstance({
    url: 'user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
  setJwtToken(token)
}

export async function register (username, password, rePassword) {
  const {
    token
  } = await axiosInstance({
    url: 'user/register',
    method: 'post',
    data: {
      username,
      password,
      rePassword
    }
  })
  setJwtToken(token)
}

export async function getUserInfo () {
  const {
    info
  } = await axiosInstance({
    url: 'user/info'
  })
  console.log('info:::', info)
  return info
}
