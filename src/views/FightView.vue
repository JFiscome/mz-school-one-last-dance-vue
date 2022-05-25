<template>
  <div class="fight-container">
    <top-header
      class="top-fixed"
      :diy-title="info.diyTitle"
      :content="info.content"
    ></top-header>

    <!-- 抗疫插画 -->
    <div class="photo-container">
      <div class="photo-card" v-for="item in info.list" :key="item.id">
        <div class="photo-title">{{ item.title }}</div>
        <img :src="item.url" alt="" class="photo-img" />

        <!-- 点赞收藏分享操作栏 -->
        <div class="handle-box">
          <div class="small-box">
            <img src="@/assets/imgs/fight/gift.png" class="small-icon" />
            <div class="small-text">点赞</div>
          </div>
          <div class="small-box">
            <img src="@/assets/imgs/fight/star.png" class="small-icon" />
            <div class="small-text">收藏</div>
          </div>
          <div class="small-box">
            <img src="@/assets/imgs/fight/share.png" class="small-icon" />
            <div class="small-text">分享</div>
          </div>
        </div>
      </div>
    </div>

    <bottom-text></bottom-text>
  </div>
</template>

<script>
import { fightEpidemic } from '@/api/home'
export default {
  name: 'FightView',
  data () {
    return {
      info: {
        diyTitle: '',
        content: ''
      }
    }
  },
  async created () {
    this.info = await fightEpidemic()
  }
}
</script>
<style scoped>
.top-fixed {
  position: fixed;
  background-color: #fff;
}
.fight-container {
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-container {
  width: 750px;
  margin-top: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 220px 0px 60px 0;
}

.photo-card {
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  background-color: #fff;
  margin-top: 20px;
  overflow: hidden;
}

.photo-img {
  width: 300px;
  height: 300px;
  margin: 22px 0;
}

.photo-title {
  width: 80%;
  text-align: center;
  font-size: 28px;
  height: 80px;
  line-height: 80px;
  color: #555;
  font-weight: 800;
  letter-spacing: 2px;
  border-bottom: 1px dashed #efefef;
}

.handle-box {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border: 1px solid #999;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* background-color: bisque; */
  border-radius: 30px;
  align-items: center;
}

.small-box {
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* flex-star */
  /* center */
  /* flex-end */
  align-items: center;
}

.small-icon {
  width: 40px;
  height: 40px;
}

.small-text {
  font-size: 20px;
  margin-top: 14px;
}
</style>
