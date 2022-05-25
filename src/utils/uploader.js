import alioss from './alioss'
import {
  getOssDirPath
} from './storage'

export default async function uploadFile (img) {
  let path = await getOssDirPath()
  path = path + img.file.name
  const aliClient = await alioss.getOssClient()
  const { url } = await aliClient.put(path, img.file)
  return url
}
