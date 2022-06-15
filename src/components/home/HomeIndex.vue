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
        <div class="top-title">湄洲湾职业技术学院</div>
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
        <img :src="item.imageUrl" class="banner-img" />
      </van-swipe-item>
    </van-swipe>
    <div
      class="category-container round-box child-verticle-horizontal-center-row"
    >
      <div
        class="cate-box child-verticle-horizontal-center-column"
        v-for="item in cateList"
        :key="item.cid"
      >
        <img :src="item.icon" class="cate-icon" alt="" />
        <div class="cate-title">{{ item.title }}</div>
      </div>
    </div>

    <div class="poster-container child-verticle-between-horizontal-center">
      <img
        v-for="item in poster"
        :key="item.title"
        :src="item.imgUrl"
        alt=""
        class="poster-img"
      />
    </div>

    <div class="article-container">
      <article-card v-for="article in articleList" :key="article.aid" :card-item="article"></article-card>
    </div>

  <img src="" alt="">
    <fan-loading v-if="loadingStatus"></fan-loading>
  </div>
</template>

<script>
import ArticleCard from '@/commonCommonponents/ArticleCard.vue'
import { Swipe, SwipeItem } from 'vant'
import { getBannerList, getCateInfo, getArticleList } from '@/api/home'

export default {
  name: 'HomeIndex',
  components: {
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem,
    ArticleCard
  },
  data () {
    return {
      loadingStatus: true,
      bannerList: [],
      cateList: [],
      poster: [],
      // 1热门列表，2最新列表
      articleStatus: 2,
      articlePage: 1,
      articleSize: 20,
      initNoData: false,
      articleList: []
    }
  },
  async created () {
    // 获取轮播图列表
    const { list } = await getBannerList()
    this.bannerList = list

    // 获取分类和海报
    const { list: cateList, poster } = await getCateInfo()
    // 获取文章列表
    await this.nextArticle()
    this.cateList = cateList
    this.poster = poster
    this.loadingStatus = false
  },

  methods: {
    async nextArticle () {
      const list = await getArticleList(
        this.articlePage,
        this.articleSize,
        this.articleStatus
      )
      if (list.length < this.articleSize) {
        // 没有更多数据了
        this.initNoData = true
      }
      this.articleList.push(...list)
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
}

.poster-img {
  width: 340px;
  height: 160px;
  border-radius: 20px;
}

.article-container {
  width: 690px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  background-color: #f3f3f3;
}

.article-img{
  width: 690px;
}
</style>
