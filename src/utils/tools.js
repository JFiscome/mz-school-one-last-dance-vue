import axiosInstance from '@/utils/request'
/**
 * 获取默认的用户头像
 */
export function getDefaultAvatarUrl () {
  return 'https://perfect.yanxi.site/images/mixed/avatar.png'
}

/**
 * 获取心情分类列表
 */
export async function getCategoryList () {
  const { list } = await axiosInstance({
    url: '/category/list'
  })
  return list
}
