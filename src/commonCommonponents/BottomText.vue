<template>
  <div class="bottom-text">{{content}}</div>
</template>

<script>
export default {
  name: 'BottomText',
  props: {
    content: {
      type: String,
      default: '———— 已经到底了 ————'
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.bottom-text {
    width: 100vw;
    text-align: center;
    line-height: 120px;
    height: 120px;
    font-size: 20px;
    color: #888;
    font-weight: 300;
}
</style>
