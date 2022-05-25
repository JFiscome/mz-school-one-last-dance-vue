<template>
  <div class="more-login-container">
    <div class="box">
      <img src="./../assets/imgs/icons/github.png" class="icon" alt="" />
    </div>
    <div class="box">
      <img src="./../assets/imgs/icons/qq.png" class="icon" alt="" />
    </div>
    <div class="box">
      <img src="./../assets/imgs/icons/wechat.png" class="icon" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoreLogin',
  data () {
    return {}
  }
}
</script>
<style scoped>
.more-login-container {
  width: 500px;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
}

.box {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    width: 66px;
    height: 66px;
}
</style>
