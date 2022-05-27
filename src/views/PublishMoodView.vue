<template>
  <div class="moodContainer">
    <div class="moodTitle" >
      <van-icon name="arrow-left" @click="handleBack" class="moodTitleArrow" size="20"></van-icon>
      <div>发布您今天的心情</div>
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
      <div class="category" :class="['categoryItem',{'hasSelectCate':cateIndex === item.cid}]" @click="handleClickCate(item.cid)" v-for="item in categoryList" :key="item.cid">
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
import { getCateInfo } from '@/api/home'
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
    handleSubmit () {
      console.log('点击了提交按钮')
    },
    handleBack () {
      this.$router.go(-1)
    },
    handleClickCate (cid) {
      console.log(cid)
      this.cateIndex = cid
      var bg = 'background-image: linear-gradient(120deg, #43e57f 0%, #98d7f1 100%)'
      switch (cid) {
        case 9:
          bg = 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);'
          break
        case 10:
          bg = 'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);'
          break
        case 11:
          bg = 'background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);'
          break
        case 12:
          bg = 'background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);'
          break
        case 13:
          bg = 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);'
          break
        case 14:
          bg = 'background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);'
          break
        case 15:
          bg = 'background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);'
          break
        case 16:
          bg = 'background-image: linear-gradient(to right, #434343 0%, black 100%);'
          break
      }
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
  background-image: linear-gradient(120deg, #43e57f 0%, #98d7f1 100%);
  /*background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);*/
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
