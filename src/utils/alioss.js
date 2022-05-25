import OSS from 'ali-oss'
import moment from 'moment'
import axiosInstance from './request'
import { setOssDirPath } from './storage'

class AliOss {
  constructor () {
    this.client = null
  }

  async getOssClient () {
    if (this.client && moment(this.client.expiration).format('x') - Date.now() > 0) {
      return this.client
    } else {
      return await this.__newOssClient()
    }
  }

  /**
   * 新获取一个key
   */
  async __newOssClient () {
    const result = await axiosInstance({
      url: 'user/oss/token'
    })
    const {
      AccessKeyId,
      AccessKeySecret,
      Expiration,
      SecurityToken,
      bucket,
      region,
      endpoint,
      dir
    } = result
    this.client = new OSS({
      endpoint: endpoint,
      accessKeyId: AccessKeyId,
      accessKeySecret: AccessKeySecret,
      stsToken: SecurityToken,
      region: region,
      bucket: bucket,
      cname: true
    })
    await setOssDirPath(dir)
    this.client.expiration = Expiration
    return this.client
  }
}

export default new AliOss()
