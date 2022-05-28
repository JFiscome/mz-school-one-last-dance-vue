<template>
  <div class="login-container">
    <img src="./../assets/imgs/logo.png" alt="" class="logo-img" />
    <div class="content">
      <div class="line-title">掌上校园</div>
      <div class="line-text-mini">丰富你的校园生活</div>
      <div class="line-text-mini">年轻 / 活力 / 积极 / 向上</div>
    </div>
    <!-- keep-alive -->
    <keep-alive>
      <router-view @changeForm="onFormChange"></router-view>
    </keep-alive>
    <more-login v-if="moreLoginShowStatus"></more-login>
    <div class="bottom-text">
      <span>登录/注册即同意</span>
      <span class="protocol-title">《掌上校园》</span>
      <span>用户服务协议</span>
    </div>
  </div>
</template>

<script>
import MoreLogin from '@/components/login/MoreLogin.vue'

export default {
  name: 'LoginView',
  components: {
    MoreLogin
  },
  data () {
    return {
      moreLoginShowStatus: true
    }
  },
  created () {
    if (this.$route.name === 'register-form') {
      this.moreLoginShowStatus = false
    }
  },
  methods: {
    onFormChange (changeObj) {
      console.log('changeObj:', changeObj)
      this.moreLoginShowStatus = changeObj.moreLoginShowStatus
    }
  }
}
</script>
<style scoped>
.login-container {
  width: 750px;
  height: 100vh;
  background-image: url("./../assets/imgs/login-back.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.logo-img {
  width: 594px;
  height: 108px;
}

.line-title {
  width: 680px;
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  margin-top: 10px;
  font-weight: 800;
  padding: 22px;
}

.line-text-mini {
  width: 680px;
  font-size: 36px;
  font-weight: 200;
  color: #fff;
  padding: 14px 22px;
}

.bottom-text {
  width: 750px;
  height: 100px;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 100px;
  font-size: 22px;
  border-top: 1px solid rgba(232, 232, 222, 0.5);
  color: #cacce5;
}

.protocol-title {
  color: #fff;
  font-weight: 900;
}
</style>
