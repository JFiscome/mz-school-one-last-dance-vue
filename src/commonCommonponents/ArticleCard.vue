<template>
  <div class="article-card">
    <div class="card-top">
      <div class="card-top-left">
        <img :src="cardItem.avatar" class="user-avatar" />
        <div class="user-content">
          <div class="user-nickname">{{ cardItem.nickname }}</div>
          <div class="sex-age-box">
            <img
              v-if="cardItem.sex === 1"
              src="./imgs/male.png"
              alt=""
              class="sex-img"
            />
            <img v-else src="./imgs/female.png" alt="" class="sex-img" />
            <div class="age-text">{{ authorAge }}岁</div>
          </div>
        </div>
      </div>
      <div class="cate-title">{{cardItem.categoryTitle}}</div>

      <img src="./imgs/banana.png" class="banana-img" alt="" />
    </div>

    <div class="card-content">
      {{ cardItem.content }}
    </div>
    <div class="img-container" v-if="cardItem.pics">
      <van-image
        class="content-img"
        v-for="(pic, index) in picList"
        :key="index"
        fit="cover"
        radius="8px"
        lazy-load
        :src="pic"
      >
        <template v-slot:loading>
          <van-loading type="spinner" size="20" /> </template
      ></van-image>
      <!-- <img v-for="(pic,index) in picList" :key="index"  :src="pic" class="content-img" alt=""> -->
    </div>

    <div class="card-bottom">
      <div class="handle-line">
          <div class="handle-box">
            <img src="./imgs/thumb.png" alt="" class="handle-icon">
            <div class="handle-text">99</div>
          </div>
          <div class="handle-box">
            <img src="./imgs/comment-blue.png" alt="" class="handle-icon">
            <div class="handle-text">99</div>
          </div>
          <div class="handle-box">
            <img src="./imgs/heart-red.png" alt="" class="handle-icon">
            <div class="handle-text">99</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    cardItem: {
      type: Object,
      default: () => {
        return {
          aid: 76,
          avatar:
            'https://perfect.yanxi.site/last-dance/images/user/avatar-1.jpg',
          categoryIcon: 'https://perfect.yanxi.site/last-dance/icons/edu.png',
          categoryTitle: '好好学习',
          cid: 10,
          collectionCount: 0,
          commentCount: 0,
          content: '今天天气很好',
          createTime: 1654670246393,
          hotScore: 19,
          isDelete: 0,
          likeCount: 0,
          nickname: 'YOUTH-365934',
          pics: '["http://fx1.313515.com/ac00653553834fda8d7a5f042169cb94.jpg","http://filebzx002.313515.com/g2/M00/99/FA/EScAAFrq0X6ACPNIAAMZi5yskKo608.jpg","http://filebzx002.313515.com/g2/M00/76/65/EycAAFsOGPmABRzXAAz_8oZ82CI638.jpg","http://fx1.313515.com/d5330bf5b08b4fa28643f6353beb5f38.jpg","http://filebzx002.313515.com/g2/M00/99/FA/EScAAFrq0X6ACPNIAAMZi5yskKo608.jpg","http://fx1.313515.com/4fb438e01fb04d1198112a0701e202b4.jpg","http://fx1.313515.com/a8b82bbc8e684492afc42533cb811ad5.jpg","http://filebzx002.313515.com/g2/M00/76/65/EycAAFsOGPyAbOjsAA_tP13d9pQ915.jpg"]',
          sex: 1,
          uid: 100181,
          age: 20
        }
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    picList () {
      let list = []
      if (this.cardItem.pics) {
        list = JSON.parse(this.cardItem.pics)
      }
      return list
    },
    authorAge () {
      return 2022 - parseInt(this.cardItem.bornYear)
    }
  }
}
</script>
<style scoped>
.article-card {
  width: 650px;
  min-height: 300px;
  border-radius: 20px;
  padding: 6px 16px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
}

.card-top {
  width: 100%;
  display: flex;
  height: 160px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
}

.card-bottom {
  width: 100%;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
}

.card-top-left {
  width: 100%;
  display: flex;
  height: 160px;
  align-items: center;
}

.user-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 12px;
}

.user-content {
  display: flex;
  height: 140px;
  flex-direction: column;
  justify-content: center;
}

.user-nickname {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 12px;
}

.sex-img {
  width: 38px;
  height: 38px;
  margin-right: 6px;
}

.sex-age-box {
  display: flex;
  align-items: center;
}

.age-text {
  font-size: 24px;
  color: #555;
  font-weight: 400;
}

.banana-img {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  margin-right: 26px;
}

.img-container {
  width: 610px;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
}

.card-content {
  width: 590px;
  padding: 20px 30px;
  font-size: 32px;
  color: #000;
  font-weight: 300;
}

.content-img {
  width: 186px;
  height: 190px;
  margin: 6px;
  border-radius: 8px;
  background-color: #888;
  border: 1px solid #888;
}

.handle-line {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}

.handle-box {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.handle-icon {
  width: 32px;
  height: 32px;
}
.handle-text {
  font-size: 20px;
  margin-left: 8px;
  color: #555;
  font-weight: 500;
}
.cate-title {
  width: 160px;
  font-size: 18px;
  background-color: #111;
  border-radius: 30px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  height: 40px;
  margin-right: 20px;
  padding: 4px 12px;
}
</style>
