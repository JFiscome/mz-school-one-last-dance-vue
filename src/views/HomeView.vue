<template>
  <div class="view-container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <bottom-text></bottom-text>
    <van-tabbar v-model="active" route placeholder fixed>
      <van-tabbar-item icon="wap-home" to="/home/index">首页</van-tabbar-item>
      <van-tabbar-item icon="more" to="/home/find">发现</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/home/person"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style scoped>
@import url("../assets/css/common.css");
</style>
