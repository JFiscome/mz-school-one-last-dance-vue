<template>
  <div class="publish-container">
    <van-nav-bar
      title="新文章"
      left-text="返回"
      right-text="发布"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
    />

      <div class="handle-container">
      <van-field
        placeholder="请输入你想说的悄悄话~"
        maxlength="520"
        show-word-limit
        type="textarea"
        rows="8"
        class="diy-field"
        v-model="content"
      />
      <div class="label-title">选择分类</div>
      <div class="category-container">
        <div
          v-for="item in categoryList"
          :key="item.cid"
          :class="activeCid === item.cid ? 'cate-box-active' : 'cate-box'"
          @click="activeCid = item.cid"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateInfo } from '@/api/home'
export default {
  name: 'PublishMoodNewView',
  data () {
    return {
      content: '',
      categoryList: [],
      activeCid: -1
    }
  },
  async created () {
    const { list } = await getCateInfo()
    this.categoryList = list
  },
  methods: {
    onClickLeft () {
      // 返回上一页
      this.$router.go(-1)
    },
    onClickRight () {
      console.log('onClickRight')
    }
  }
}
</script>
<style scoped>
.publish-container {
  width: 750px;
  min-height: 100vh;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
}

.handle-container {
  width: 620px;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 30px;
}

.diy-field {
  border-radius: 30px;
}

.label-title {
  font-size: 28px;
  font-weight: 800;
  color: #222;
  padding: 12px 0;
  margin: 20px;
}

.category-container {
  width: 620px;
  height: 220px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
}

.cate-box {
  width: 130px;
  height: 70px;
  border-radius: 40px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  line-height: 70px;
  border: 1px solid #ccc;
  color: #888;
}

.cate-box-active {
  width: 130px;
  height: 70px;
  border-radius: 40px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  line-height: 70px;
  background-color: #333;
  border: 1px solid #333;
  color: #fff;
}
</style>
