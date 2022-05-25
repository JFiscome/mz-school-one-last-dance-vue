<template>
<div class="container">
  <div class="title">{{ diyTitle }}</div>
  <div class="content">{{content}}</div>
</div>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    diyTitle: {
      type: String,
      default: '我的'
    },
    content: {
      type: String,
      default: '个人中心'
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>

.container {
  width: 630px;
  height: 240px;
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  text-align: left;
  justify-content: space-evenly;
  border-bottom: 4px solid #efefef;
}

.title {
  width: 100%;
  font-size: 50px;
  font-weight: 800;
}
.content {
  width: 100%;
  font-size: 38px;
  font-weight: 400;
  color: #333;
}

</style>
