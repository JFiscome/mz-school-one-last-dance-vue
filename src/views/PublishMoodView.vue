<template>
  <div class="moodContainer">
    <div class="moodTitle" >发布您今天的心情</div>
    <div class="contentBox">
      <van-field class="content"
        v-model="message"
        rows="10"
        autosize
        type="textarea"
        placeholder="请输入这一刻的想法~"
      />
    </div>
    <div class="categoryBox">
      <div class="categoryItem" v-for="item in 2" :key="item">
        <van-icon name="smile-o" size="18px"/>&nbsp;美滋滋
      </div>
      <van-icon class="categoryItem" size="18px" name="add-o" />
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
      <button class="publishBtn">立即发布</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublishMoodView',
  data () {
    return {
      message: '',
      imageList: [],
      show: true,
      showPopover: false,
      actions: [
        { text: '选项一', icon: 'add-o' },
        { text: '选项二', icon: 'music-o' },
        { text: '选项三', icon: 'more-o' }
      ],
      options: [
        { id: 1, text: '位置', icon: 'location' },
        { id: 2, text: '公开', icon: 'friends' }
      ]
    }
  },
  methods: {
    afterRead (file) {
      console.log(this.imageList)
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style scoped>
.moodContainer{
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: linear-gradient(120deg, #43e57f 0%, #98d7f1 100%);
  /*background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);  */
  flex-direction: column;
  align-items: center;
}
/* 标题 */
.moodTitle {
  color: #FFFFFF;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
/* mood content区域 */
.contentBox{
  width: 94%;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
  background-color: white;
  box-sizing: border-box;
}
.content{
  font-size: 20px;
}

/* 分类区域 */
.categoryBox{
  display: flex;
  width: 94%;
  height: 200px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
  background-color: white;
}
.categoryItem{
  height: 34px;
  border-radius: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5adcb6;
  padding: 6px 10px;
  margin: 4px;
  color: #FFFFFF;
  font-weight: bold;
}
/* 图片区域 */
.photoBox{
  width: 94%;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.1);
  background-color: white;
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
