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

export async function getArticleList (page = 1, size = 20, status = 1) {
  const {
    list
  } = await axiosInstance({
    url: 'article/list',
    params: {
      page,
      size,
      status
    }
  })
  console.log('artilce List:::', list)
  return list
}

/**
 * 发布心情
 * @param cid 分类id
 * @param content 发布内容
 * @param pics 发布图片集合
 * @returns {Promise<AxiosResponse<any>>}
 */
export async function publishMood (cid, content, pics) {
  const res = await axiosInstance({
    url: 'article/create',
    method: 'POST',
    data: {
      cid,
      content,
      pics
    }
  })
  return res
}

export async function getDynamicList (cid = 1, page = 1, size = 10, status = 2) {
  const res = await axiosInstance({
    url: `article/list?cid=${cid}&page=${page}&size=${size}&status=${status}`,
    method: 'GET'
  })
  return res
}
