<template>
  <div class="titleContainer">
    <div class="hotTopic">{{ hotTitle }}</div>
    <div v-if="isShowMore" class="more">更多></div>
  </div>
</template>

<script>
export default {
  name: 'FindTitle',
  props: {
    isShowMore: {
      type: Boolean,
      default: true
    },
    hotTitle: {
      type: String,
      default: '热门话题'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.titleContainer{
  display: flex;
  align-items: center;
  padding:20px 30px;
  justify-content: space-between;
}
.hotTopic{
  font-weight: bold;
  font-size: 28px;
}
.more{
  font-size: 20px;
  color: #999999;
}
</style>
