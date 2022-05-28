<template>
 <div class="findContainer">
   <div class="findTopNavBar">
     <img class="avatarImg" :src="userInfo.avatar" />
     <div class="searchBox">
       <van-search
         class="searchText"
         v-model="searchText"
         background="rgba(0,0,0,0)"
         left-icon="none"
         placeholder="请输入搜索关键词"
         right-icon="search"
         shape="round"
       />
     </div>
     <div class="messageBtn">
       <van-icon class="msgIcon" name="chat-o" />
     </div>
   </div>
 </div>
</template>

<script>
import { getDefaultAvatarUrl } from '@/utils/tools'
import { getUserInfo } from '@/api/user'
import { getJwtToken } from '@/utils/token'

export default {
  name: 'HomeFind',
  data () {
    return {
      searchText: '',
      userInfo: {
        avatar: getDefaultAvatarUrl()
      }
    }
  },
  created () {
    // 获取用户信息
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      // 判断用户是否登录
      // 用户是否登录的依据是token
      const token = getJwtToken()
      if (token) {
        this.userInfo = await getUserInfo()
      } else {
        // 用户未登录
      }
    }
  }
}

</script>
<style scoped>
.findContainer{
  width: 100%;
  min-height: 100vh;
}
.findTopNavBar{
  display: flex;
  align-items: center;
  padding: 10px;
}
.avatarImg{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 20px;
}
.messageBtn{
  margin-left: auto;
}
.msgIcon{
  margin-right: 20px;
}
</style>
