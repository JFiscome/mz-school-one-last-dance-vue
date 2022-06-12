<template>
  <div class="home-container">
    <div class="top-container child-verticle-between-horizontal-center">
      <div class="top-left child-verticle-horizontal-center-row">
        <svg
          t="1653634066383"
          class="top-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3396"
          width="128"
          height="128"
        >
          <path
            d="M741.717333 512.277333l-179.434666 88.533334a74.944 74.944 0 0 1-65.92 0l-179.413334-88.533334a24.810667 24.810667 0 0 0-35.776 22.272v210.197334c0 61.696 111.104 111.68 248.170667 111.68s248.170667-50.005333 248.170667-111.68v-210.218667a24.832 24.832 0 0 0-35.797334-22.250667z m0 0"
            fill="#4D69FF"
            p-id="3397"
          ></path>
          <path
            d="M230.826667 421.632l287.616 141.866667a24.853333 24.853333 0 0 0 21.973333 0l346.325333-170.858667a24.810667 24.810667 0 0 0 0-44.522667L540.394667 177.28a24.832 24.832 0 0 0-21.973334 0L172.096 348.16a24.810667 24.810667 0 0 0 0 44.501333l21.525333 10.624"
            fill="#4D69FF"
            p-id="3398"
          ></path>
          <path
            d="M193.344 618.432m0-20.672l0-214.656q0-20.672 20.672-20.672l1.322667 0q20.672 0 20.672 20.672l0 214.656q0 20.672-20.672 20.672l-1.322667 0q-20.672 0-20.672-20.672Z"
            fill="#4D69FF"
            p-id="3399"
          ></path>
          <path
            d="M193.344 741.226667m0-20.672l0-43.989334q0-20.672 20.672-20.672l1.322667 0q20.672 0 20.672 20.672l0 43.989334q0 20.672-20.672 20.672l-1.322667 0q-20.672 0-20.672-20.672Z"
            fill="#4D69FF"
            p-id="3400"
          ></path>
        </svg>
        <div class="top-title">【湄洲湾】职业技术学院</div>
      </div>
      <svg
        t="1653634111239"
        class="top-icon-serach"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4217"
        width="128"
        height="128"
      >
        <path
          d="M448 85.333333a362.666667 362.666667 0 1 0 207.189333 660.352l174.208 174.250667a64 64 0 1 0 90.538667-90.538667l-174.250667-174.208A362.666667 362.666667 0 0 0 448 85.333333zM213.333333 448a234.666667 234.666667 0 1 1 469.333334 0 234.666667 234.666667 0 0 1-469.333334 0z"
          p-id="4218"
        ></path>
      </svg>
    </div>
    <van-swipe
      class="banner-container round-box"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.imageUrl" class="banner-img"/>
      </van-swipe-item>
    </van-swipe>
    <div class="category-container round-box child-verticle-horizontal-center-row">
      <div class="cate-box child-verticle-horizontal-center-column" v-for="item in cateList" :key="item.cid">
        <img :src="item.icon" class="cate-icon" alt="">
        <div class="cate-title">{{ item.title }}</div>
      </div>
    </div>

    <div class="poster-container child-verticle-between-horizontal-center">
      <img v-for="item in poster" :key="item.title" :src="item.imgUrl" alt="" class="poster-img">
    </div>
    <fan-loading v-if="loadingStatus"></fan-loading>

    <find-title hot-title="今日动态"></find-title>
    <div class="dynamicContainer">
      <div class="dynamicItem" v-for="item in dynamicList" :key="item.aid">
        <div class="dynamicTopBox">
          <img class="dynamicAvatar" :src="item.avatar" alt="">
          <div class="userDescribe">
            <div class="userName">{{ item.nickname }}</div>
            <div class="constellationBox">
<!--              <van-icon class="constellationIcon" name="search" />-->
<!--              <div class="constellationName">狮子座</div>-->
            </div>
          </div>
          <div class="publishTime">{{ timestampToTime(item.createTime) }}</div>
        </div>

<!--        <div class="dynamicTitle">-->
<!--          <van-icon class="dynamicTitleIcon" name="search" />-->
<!--          <div class="dynamicTitleText">2022 读书计划</div>-->
<!--        </div>-->

        <div class="dynamicContent">
          <div class="imgContainer" >
            <div v-if="item.pics != null && item.pics.length > 0">
              <img  class="dynamicContentImg" v-for="(picsItem,index) in JSON.parse(item.pics)" :key="index"  :src="picsItem" alt="">
            </div>
          </div>
          <div class="dynamicContentText">
            {{ item.content}}
          </div>
        </div>

        <div class="dynamicBar">
          <div class="dynamicBarItem">
            <van-icon size="18" name="share-o" />
            <div class="dynamicBarNum">3</div>
          </div>
          <div class="dynamicBarItem">
            <van-icon size="17.6" name="comment-o" />
            <div class="dynamicBarNum">62</div>
          </div>
          <div class="dynamicBarItem">
            <van-icon size="18" name="good-job-o" />
            <div class="dynamicBarNum">{{ item.hotScore }}</div>
          </div>
          <van-icon size="18" class="dynamicBarMore" name="ellipsis"></van-icon>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { Swipe, SwipeItem } from 'vant'
import { getBannerList, getCateInfo, getDynamicList } from '@/api/home'
import FindTitle from '@/commonCommonponents/FindTitle'
export default {
  name: 'HomeIndex',
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    FindTitle
  },
  data () {
    return {
      loadingStatus: true,
      bannerList: [],
      cateList: [],
      poster: [],
      searchText: '',
      dynamicList: [],
      page: 1,
      size: 10
    }
  },
  async created () {
    // 获取轮播图列表
    const { list } = await getBannerList()
    this.bannerList = list

    // 获取分类和海报
    const { list: cateList, poster } = await getCateInfo()
    this.cateList = cateList
    this.poster = poster

    this.getDynamicList(1)

    this.loadingStatus = false
  },
  methods: {
    async getDynamicList (cid = 1) {
      const result = await getDynamicList(cid, this.page, this.size, 2)
      this.dynamicList = result.list
      console.log(result)
    },
    timestampToTime (timestamp) {
      // 计算年月日时分的函数
      const date = new Date(timestamp)
      const Y = date.getFullYear() + '-'
      const M = (date.getMonth() + 1) + '-'
      const D = date.getDate() + ' '
      const h = date.getHours() + ':'
      const m = date.getMinutes() + ':'
      const s = date.getSeconds()
      return Y + M + D + h + m + s
    }
  }
}
</script>
<style scoped>
@import url("./css/common.css");

.top-container {
  width: 690px;
  height: 80px;
  margin-top: 30px;
  border-bottom: 1px solid #ddd;
}

.top-icon {
  width: 60px;
  height: 60px;
}

.top-icon-serach {
  width: 50px;
  height: 50px;
}

.top-title {
  font-size: 36px;
  font-weight: 600;
  margin-left: 6px;
}

.banner-container {
  width: 690px;
  height: 320px;
  background-color: blueviolet;
  margin: 30px 0;
}

.banner-img {
  width: 690px;
  height: 320px;
}

.category-container {
  width: 690px;
  height: 360px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
}

.cate-box {
  width: 140px;
  height: 140px;
}

.cate-icon {
  width: 80px;
  height: 80px;
}

.cate-box:active {
  border-radius: 12px;
  background-color: #eee;
}

.cate-title {
  font-size: 24px;
  color: #333;
  margin-top: 12px;
}

.poster-container {
  width: 690px;
  margin-top: 30px;
  margin-bottom: 40px;
}

.poster-img {
  width: 340px;
  height: 160px;
  border-radius: 20px;
}

/*今日动态*/
.dynamicContainer{
  width: 690px;
  margin: 0px 30px 30px 30px;
  box-sizing: border-box;
}
.dynamicItem{
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background: #FFFFFF;
  padding: 26px 30px;
  border-radius: 10px;
}
.dynamicTopBox{
  display: flex;
  align-items: center;
}
.dynamicAvatar{
  width: 76px;
  height: 76px;
  border-radius: 50%;
  margin-right: 20px;
}
.userDescribe{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userName{
  font-size: 26px;
  font-weight: bold;
}
.constellationBox{
  display: flex;
  color: #999999;
  align-items: center;
}
.constellationName{
  font-size: 18px;
}
.publishTime{
  font-size: 20px;
  margin-left: auto;
  color: #999999;
}
.dynamicTitle{
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.dynamicTitleText{
  font-size: 26px;
  font-weight: bold;
  margin-left: 4px;
}
.imgContainer{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.dynamicContentImg{
  width: 200px;
  height: 200px;
  margin: 5px;
  border-radius: 10px;
}
.dynamicContentText{
  font-size: 30px;
  margin: 20px 0px 20px 8px;
}

.dynamicBar{
  display: flex;
  padding: 20px 0 0 10px;
  align-items: center;
}
.dynamicBarItem{
  margin-right:80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dynamicBarNum{
  margin-left: 8px;
  font-size: 28px;
}
.dynamicBarMore{
  margin-left: auto;
}

/*其他属性*/
.marginLf-18{
  margin-left: -15px;
}
.itemHidden{
  visibility: hidden;
}
.makeFriendBg{
  color: #5486db;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.togetherPayBg{
  color: #8e4685;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
}
</style>
