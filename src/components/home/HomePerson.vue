<template>
  <div class="home-container">
    <!-- 1.用户存放用户信息 -->

    <div class="user-container child-verticle-horizontal-center-column">
      <img :src="userInfo.avatar" class="user-avatar" alt="" @click="toLogin" />
      <div class="nickname">{{ userInfo.nickname }}</div>
    </div>

    <!-- 2.状态栏 -->
    <div
      class="
        status-container
        container-round
        child-verticle-evenly-horizontal-center
      "
    >
      <div
        v-for="item in menuInfo.statusList"
        :key="item.title"
        class="status-box child-verticle-horizontal-center-column"
      >
        <van-icon
          :name="item.icon"
          :badge="item.info"
          :dot="!item.info && item.dot ? item.dot : false"
          size="38px"
        ></van-icon>
        <div class="status-title">{{ item.title }}</div>
      </div>
    </div>

    <!-- 3.操作栏 -->
    <div
      class="
        handle-container
        container-round
        child-verticle-horizontal-center-column
      "
    >
      <div
        class="handle-box child-verticle-between-horizontal-center"
        v-for="item in menuInfo.handleList"
        :key="item.title"
        @click="doSomeThing(item.action, item.vueTo)"
      >
        <div class="handle-left child-verticle-horizontal-center-row">
          <van-icon
            :name="item.icon"
            :badge="item.info"
            :dot="!item.info && item.dot ? item.dot : false"
            size="18px"
          ></van-icon>
          <div class="handle-title">{{ item.title }}</div>
        </div>
        <img src="./imgs/right-icon.png" alt="" class="right-icon" />
      </div>
    </div>
    <fan-loading v-if="loadingStatus"></fan-loading>
  </div>
</template>

<script>
import { getDefaultAvatarUrl } from '@/utils/tools'
import { clearStorageAndRelogin, getJwtToken } from '@/utils/token'
import { getUserInfo } from '@/api/user'
import { getPersonMenuInfo } from '@/api/home'
export default {
  name: 'HomePerson',
  components: {},
  data () {
    return {
      // 用户登录状态
      loginStatus: false,
      loadingStatus: true,
      userInfo: {
        avatar: getDefaultAvatarUrl(),
        nickname: '没有登录哦~ 点击登录！'
      },
      menuInfo: {}
    }
  },
  // 生命周期函数
  async created () {
    console.log('当HomePerson组件创建成功成功')
    // 判断用户是否登录
    // 用户是否登录的依据是token
    const token = getJwtToken()
    if (token) {
      this.loginStatus = true
      // 用户已经登录过了
      // 获取用户的个人信息和数据等内容
      this.userInfo = await getUserInfo()
    } else {
      // 用户暂未登录
    }

    this.menuInfo = await getPersonMenuInfo()

    this.loadingStatus = false
  },
  methods: {
    toLogin () {
      this.$router.push('/login/loginform')
    },
    doSomeThing (action, href) {
      switch (action) {
        case 'nextPage':
          this.$router.push(href)
          break
        case 'logout':
          this.$dialog
            .confirm({
              message: '确认退出登录吗？'
            })
            .then(() => {
              clearStorageAndRelogin()
            })
            .catch(() => {
              console.log('cancel logout')
            })
          break
      }
    }
  }
}
</script>
<style scoped>
@import url("./css/common.css");

.container-round {
  border-radius: 12px;
  box-shadow: 2px 2px 4px #999;
  background-color: #fff;
}

.user-container {
  width: 750px;
  height: 360px;
  padding-top: 20px;
  background-image: url("https://perfect.yanxi.site/images/mixed/user-background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  background-color: #fff;
}

.user-avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
}

.nickname {
  font-size: 32px;
  font-weight: 200;
  margin-top: 18px;
}

.user-info-box {
  width: 640px;
  height: 180px;
}

.user-info-introduce {
  width: 615px;
  height: 80px;
  padding-left: 25px;
  line-height: 80px;
}

.user-content {
  width: 405px;
  height: 160px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.nickname-text {
  font-size: 38px;
  font-weight: 800;
  color: #252525;
}

.age-sex-text {
  font-size: 24px;
  font-weight: 300;
  color: #525252;
}

.status-container {
  width: 690px;
  height: 220px;
}

.handle-container {
  width: 690px;
  margin: 25px 0;
}

.status-box {
  width: 150px;
  height: 160px;
  background-color: #fff;
}

.status-box:active {
  border-radius: 14px;
  background-color: #efefef;
  transition: all 2s;
}

.status-title {
  font-size: 24px;
  font-weight: 800;
  color: #333;
  margin-top: 14px;
}

.handle-box {
  width: 610px;
  height: 96px;
  border-bottom: 1px dotted #ccc;
  padding: 0 40px;
}

.handle-box:active {
  box-shadow: 0 0 10px #888;
}

.handle-box:nth-last-child(1) {
  border: none;
}

.right-icon {
  width: 32px;
  height: 32px;
}

.handle-title {
  font-size: 22px;
  font-weight: 500;
  color: #777;
  margin-left: 30px;
}
</style>
