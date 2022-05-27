import axiosInstance from '@/utils/request'

export async function getPersonMenuInfo () {
  return await axiosInstance({
    url: 'category/person/info',
    method: 'GET'
  })
}

export async function fightEpidemic () {
  return await axiosInstance({
    url: 'fight/epidemic'
  })
}

export async function getBannerList () {
  return await axiosInstance({
    url: 'banner/list'
  })
}

export async function getCateInfo () {
  return await axiosInstance({
    url: 'category/list'
  })
}
