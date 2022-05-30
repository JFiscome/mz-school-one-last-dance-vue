<template>
  <div class="moodContainer">
    <div class="moodTitle" >
      <van-icon name="arrow-left" @click="handleBack" class="moodTitleArrow" size="20"></van-icon>
      <div>发布今天的心情</div>
    </div>
    <div class="contentBox">
      <van-field class="content"
        v-model="content"
        rows="10"
        autosize
        type="textarea"
        placeholder="请输入这一刻的想法~"
      />
    </div>
    <div class="categoryBox">
      <div class="categoryItem cateTitle">选择分类标签</div>
      <div :class="['categoryItem',{'hasSelectCate':cateIndex === item.cid}]" @click="handleClickCate(item.cid)" v-for="item in categoryList" :key="item.cid">
        <van-icon :name="item.icon" size="18px"/>&nbsp;{{ item.title }}
        <div class="redPoint" v-if="item.hasDot === 1"></div>
      </div>
    </div>
    <div class="photoBox">
      <van-uploader
        class="photo"
        v-model="imageList"
        :after-read="afterRead"
        :max-count="8"
        preview-size="80px"
        multiple
      />
    </div>
    <div class="footerBox">
      <div class="optionBox">
        <div class="optionItem" v-for="item in options" :key="item.id">
          <van-icon color="#ffffff" :name="item.icon" size="24px" />
          <div class="optionText">{{ item.text }}</div>
        </div>
      </div>
      <button @click="handleSubmit" class="publishBtn">立即发布</button>
    </div>
  </div>
</template>

<script>
import { getCateInfo, publishMood } from '@/api/home'
import uploadFile from '@/utils/uploader'
import { Toast } from 'vant'
export default {
  name: 'PublishMoodView',
  data () {
    return {
      content: '',
      cateIndex: -1,
      imageList: [],
      categoryList: [],
      options: [
        { id: 1, text: '位置', icon: 'location' },
        { id: 2, text: '公开', icon: 'friends' }
      ],
      categoryBgList: [
        'background-image: linear-gradient(to right, #434343 0%, black 100%);',
        'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);',
        'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);',
        'background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);',
        'background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);',
        'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);',
        'background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);',
        'background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);'
      ]
    }
  },
  async created () {
    // 获取分类列表
    const res = await getCateInfo()
    this.categoryList = res.list
  },
  methods: {
    afterRead (file) {
      console.log(this.imageList)
    },
    // 点击提交按钮发布动态
    async handleSubmit () {
      if (this.content == null || this.content === '') {
        Toast({ message: '发布的内容不能为空', position: 'top' })
        return
      }
      if (this.cateIndex === -1) {
        Toast({ message: '请选择一个分类标签', position: 'top' })
        return
      }
      const images = this.imageList
      const imageUrls = []
      // 将图片上传到阿里云存储
      if (images != null && images.length > 0) {
        console.log('有图片进行上传')
        for (let i = 0; i < images.length; i++) {
          const url = await uploadFile(images[i])
          imageUrls.push(url)
        }
      }
      const imageUrlString = JSON.stringify(imageUrls)

      // 发布心情
      const res = await publishMood(this.cateIndex, this.content, imageUrlString)
      if (res.message === 'ok') {
        Toast({ message: '发布成功', type: 'success' })
        console.log('发布的内容：' + this.cateIndex, this.content, imageUrlString)
        this.content = ''
        this.cateIndex = -1
        // TODO 发布成功后是否跳转页面 （待完善）
      }
    },
    // 返回上一页
    handleBack () {
      this.$router.go(-1)
    },
    // 切换背景
    handleClickCate (cid) {
      console.log(cid)
      this.cateIndex = cid
      const bg = this.categoryBgList[cid % this.categoryList.length]
      console.log(cid % this.categoryList.length)
      document.querySelector('.moodContainer').setAttribute('style', bg)
    }
  }
}
</script>

<style scoped>
.moodContainer{
  width: 100%;
  min-height: 100vh;
  display: flex;
  /*background-image: linear-gradient(120deg, #43e57f 0%, #98d7f1 100%);*/
  /*background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);*/
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
  flex-direction: column;
  align-items: center;
  transition: background-color 2s;
}
.bg01{
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)
}
/* 标题 */
.moodTitle {
  width: 96%;
  padding: 10px 0;
  position: relative;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.moodTitleArrow{
  position: absolute;
  left: 0;
}
/* mood content区域 */

.contentBox{
  width: 94%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.2);
  box-sizing: border-box;
}
.content{
  font-size: 20px;
  background-color: rgba(255,255,255,0);
}
::v-deep .van-field__control::-webkit-input-placeholder {
  color: #ffffff;
  font-size: 0.2rem;
  font-weight: 600;
}

/* 分类区域 */
.categoryBox{
  display: flex;
  justify-content: space-between;
  width: 94%;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: rgba(255,255,255,.2);
}

.categoryItem{
  position: relative;
  height: 34px;
  border-radius: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 201, 160, 0.5);
  padding: 6px 8px;
  margin: 4px;
  color: #fdfcfc;
  font-weight: bold;
  transition: 0.5s;
}
.hasSelectCate{
  background: #16d95e;
}
.cateTitle{
  background-color: rgba(0,0,0,0);
}
.redPoint{
  position: absolute;
  right: -4px;
  top: -4px;
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50%;
}
/* 图片区域 */
.photoBox{
  width: 94%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgba(255,255,255,.2);
}
.photo{
  padding-left: 8px;
  padding-top: 8px;
}
.footerBox{
  width: 92%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.optionBox{
  display: flex;
}
.optionItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 40px;
}
.optionText{
  margin-top: 2px;
  color: #ffffff;
}

/* 发布按钮 */
/* From uiverse.io by @hannahyockel */
.publishBtn {
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 38px;
  border-radius: 16px;
  border: 1px solid transparent;
  color: #FFFFFF;
  background-color: #1DC9A0;
  font-size: 16px;
  letter-spacing: 1px;
  transition: all 0.15s linear;
}
.publishBtn:active {
  background-color: transparent;
  border-color: #1DC9A0;
  color: #1DC9A0;
  transform: translateY(5px) scale(0.95);
}
</style>
