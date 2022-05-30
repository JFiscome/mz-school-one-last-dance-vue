<template>
  <div class="titleContainer">
    <div class="titleTop">
      <div class="titleRound"></div>
      <div class="hotTopic">{{ hotTitle }}</div>
    </div>
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
  padding:20px 30px 15px 30px;
  justify-content: space-between;
}
.titleTop{
  display: flex;
  position: relative;
}
.titleRound{
  position: absolute;
  top: -15px;
  left: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #59ba44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #FFFFFF, #59ba44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #FFFFFF, #59ba44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.hotTopic{
  font-weight: bold;
  font-size: 28px;
  margin-left: 4px;
  z-index: 1;
  text-shadow: 5px 5px 10px #0000004C;
}
.more{
  font-size: 20px;
  color: #999999;
}
</style>
