<template>
  <div class="findContainer">
    <div class="findTopNavBar">
      <img class="avatarImg" :src="userInfo.avatar"/>
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
        <van-icon class="msgIcon" name="chat-o"/>
      </div>
    </div>

    <!-- 校园交友 -->
    <find-title hot-title="校园交友" :is-show-more="false"></find-title>
    <div class="makeFriendsContainer">
      <!--红人馆-->
      <div class="friendItem redPerson">
        <div class="friendTitle">红人馆</div>
        <div class="friendInPlay">
          <div class="friendPlayLeft">
            <img class="friendImg" :src="userInfo.avatar" >
            Luffy
          </div>
          <div class="friendPlayRight">
            <van-icon color="red" name="fire" />16832
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <!--交友墙-->
      <div class="friendItem makeFriendBg">
        <div class="friendTitle">交友墙</div>
        <div class="friendInPlay">
          <div class="friendPlayLeft">
            <img class="friendImg makeFriendAva01 itemHidden" src="@/assets/imgs/fight/star.png" >
            <div class="marginLf-18">Ta们正在线</div>
          </div>
          <div class="friendPlayRight makeFriendRight">
            <img class="friendImg makeFriendAva01" :src="userInfo.avatar" >
            <img class="friendImg makeFriendAva02" :src="userInfo.avatar" >
            <img class="friendImg makeFriendAva03" :src="userInfo.avatar" >
          </div>
        </div>
      </div>
      <!--一起玩-->
      <div class="friendItem togetherPayBg">
        <div class="friendTitle">一起去</div>
        <div class="friendInPlay">
          <div class="friendPlayLeft">
            <img class="friendImg makeFriendAva01 itemHidden" src="@/assets/imgs/fight/star.png" >
            <div class="marginLf-18">结伴去旅行</div>
          </div>
          <div class="friendPlayRight makeFriendRight itemHidden" >
            <img class="friendImg makeFriendAva01" src="@/assets/imgs/fight/star.png" >
            <img class="friendImg makeFriendAva02" src="@/assets/imgs/fight/star.png" >
            <img class="friendImg makeFriendAva03" src="@/assets/imgs/fight/star.png" >
          </div>
        </div>
      </div>
    </div>

    <!--热门话题-->
    <find-title></find-title>
    <div class="hotContainer">
      <div class="hotItem">
        <img class="hotImg" :src="userInfo.avatar" />
        <div class="hotRight">
          <div class="hotTitle">#最近循环播放的音乐</div>
          <div class="hotPersonNum">19323人正在参与</div>
        </div>
      </div>
      <div class="hotItem">
        <img class="hotImg" :src="userInfo.avatar" />
        <div class="hotRight">
          <div class="hotTitle">#最近循环播</div>
          <div class="hotPersonNum">19323人正在参与</div>
        </div>
      </div>
      <div class="hotItem">
        <img class="hotImg" :src="userInfo.avatar" />
        <div class="hotRight">
          <div class="hotTitle">#最近循环播</div>
          <div class="hotPersonNum">19323人正在参与</div>
        </div>
      </div>
      <div class="hotItem">
        <img class="hotImg" :src="userInfo.avatar" />
        <div class="hotRight">
          <div class="hotTitle">#最近循环播</div>
          <div class="hotPersonNum">19323人正在参与</div>
        </div>
      </div>
    </div>

    <!--校园达人-->
    <find-title hot-title="校园达人"></find-title>
    <div class="schoolTalentContainer">
      <div class="schoolTalentItem" v-for="item in 3" :key="item">
        <img class="talentAvatar" :src="userInfo.avatar" alt="">
        <div class="talentDescribe">
          <div class="talentName">一起撸猫猫</div>
          <van-icon class="talentGender" name="search" />
        </div>
        <div class="talentTagBox">
          <div class="talentTagItem">优雅恋人</div>
        </div>
        <div class="followBtn">关注</div>
      </div>
    </div>

    <!--今日动态-->
    <find-title hot-title="今日动态"></find-title>
    <div class="dynamicContainer">
      <div class="dynamicItem">
        <div class="dynamicTopBox">
          <img class="dynamicAvatar" :src="userInfo.avatar" alt="">
          <div class="userDescribe">
            <div class="userName">Summer</div>
            <div class="constellationBox">
              <van-icon class="constellationIcon" name="search" />
              <div class="constellationName">狮子座</div>
            </div>
          </div>
          <div class="publishTime">24分钟前</div>
        </div>

        <div class="dynamicTitle">
          <van-icon class="dynamicTitleIcon" name="search" />
          <div class="dynamicTitleText">2022 读书计划</div>
        </div>

        <div class="dynamicContent">
          <div class="imgContainer">
            <img class="dynamicContentImg" v-for="item in 5" :key="item" :src="userInfo.avatar" alt="">
          </div>
          <div class="dynamicContentText">
            读书，是在你的内心深处播下一颗种子，当种子发芽后就变成了知识。知识，哪怕是知识的幻影，也会成为你的铠甲，保护你不被愚昧反噬（来自《William Johnson Cory对教育本质的定义》）。
          </div>
        </div>

        <div class="dynamicBar">
          <div class="dynamicBarItem">
            <van-icon size="18" name="share-o" />
            <div class="dynamicBarNum">3</div>
          </div>
          <div class="dynamicBarItem">
            <van-icon size="17.6" name="comment-o" />
            <div class="dynamicBarNum">66</div>
          </div>
          <div class="dynamicBarItem">
            <van-icon size="18" name="good-job-o" />
            <div class="dynamicBarNum">320</div>
          </div>
          <van-icon size="18" class="dynamicBarMore" name="ellipsis"></van-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefaultAvatarUrl } from '@/utils/tools'
import { getUserInfo } from '@/api/user'
import { getJwtToken } from '@/utils/token'
import FindTitle from '@/commonCommonponents/FindTitle'

export default {
  name: 'HomeFind',
  components: {
    FindTitle
  },
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
.findContainer {
  width: 100%;
  min-height: 100vh;
}

.findTopNavBar {
  display: flex;
  align-items: center;
  padding: 20px 10px;
}

.avatarImg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 20px;
}
.searchText{
  width: 500px !important;
}
.messageBtn {
  margin-left: auto;
}

.msgIcon {
  margin-right: 20px;
}

/*校园交友*/
.makeFriendsContainer{
  height: 200px;
  white-space: nowrap;
  overflow-x: scroll;
}
/* 隐藏滚动条 */
.makeFriendsContainer::-webkit-scrollbar {
  width: 0 !important;
  /*兼容IE 10+*/
  -ms-overflow-style: none;
  /*兼容Firefox*/
  overflow: -moz-scrollbars-none;
}
.friendItem{
  margin: 0px 20px;
  display: inline-block;
  flex-direction: column;
  width: 250px;
  height: 140px;
  padding: 30px 20px 10px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  color: red;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.friendItem:active{
  transform: scale(0.95);
  transition: all 0.3s;
}
.friendImg{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 4px;
}
.redPerson{
  margin-top: 10px;
}
.friendTitle{
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
}
.friendInPlay{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.friendPlayLeft{
  font-size: 22px;
  display: flex;
  align-items: center;
}
.friendPlayRight{
  display: flex;
  font-size: 20px;
}
.makeFriendAva01{
  margin-right: -15px;
}
.makeFriendAva02{
  margin-right: -5px;
  z-index: 1;
}
.makeFriendAva03{
  margin-left: -10px;
}

/* 热门话题 */
.hotContainer{
  display: flex;
  padding: 30px;
  margin: 20px 20px 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}
.hotItem{
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.hotImg{
  width: 66px;
  height: 66px;
  margin-right: 10px;
  border-radius: 10px;
}
.hotRight{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px;
}
.hotTitle{
  font-weight: bold;
  font-size: 28px;
}
.hotPersonNum{
  font-size: 20px;
  margin-top: 4px;
  color: #acacac;
}
/* 校园达人 */
.schoolTalentContainer{
  display: flex;
  margin: 10px 10px 20px;
}
.schoolTalentItem{
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  padding: 20px 20px 36px 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

}
.talentAvatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.talentDescribe{
  display: flex;
  align-items: center;
  justify-content: center;
}
.talentName{
 font-size: 28px;
  font-weight: bold;
  margin: 20px 10px 20px 0;
}
.talentTagBox{
  display: flex;
  align-items: center;
  justify-content: center;
}
.talentTagItem{
  border: 1px solid orange;
  color: orange;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 2px 4px;
}
.followBtn{
  font-size: 24px;
  background: orange;
  padding: 6px 18px;
  border-radius: 24px;
  color: #FFFFFF;
}

/*今日动态*/
.dynamicContainer{
  background: #FFFFFF;
  margin-top: 20px;
  padding: 26px 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.dynamicItem{
}
.dynamicTopBox{
  display: flex;
  align-items: center;
}
.dynamicAvatar{
  width: 76px;
  height: 76px;
  border-radius: 50%;
  margin-right: 20px;
}
.userDescribe{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.userName{
  font-size: 26px;
  font-weight: bold;
}
.constellationBox{
  display: flex;
  color: #999999;
  align-items: center;
}
.constellationName{
  font-size: 18px;
}
.publishTime{
  font-size: 20px;
  margin-left: auto;
  color: #999999;
}
.dynamicTitle{
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.dynamicTitleText{
  font-size: 26px;
  font-weight: bold;
  margin-left: 4px;
}
.imgContainer{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.dynamicContentImg{
  width: 220px;
  height: 220px;
  margin: 5px;
  border-radius: 10px;
}
.dynamicContentText{
  font-size: 30px;
  margin: 20px 0px 20px 8px;
}

.dynamicBar{
  display: flex;
  padding: 20px 0 0 10px;
  align-items: center;
}
.dynamicBarItem{
  margin-right:80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dynamicBarNum{
  margin-left: 8px;
  font-size: 28px;
}
.dynamicBarMore{
  margin-left: auto;
}

/*其他属性*/
.marginLf-18{
  margin-left: -15px;
}
.itemHidden{
  visibility: hidden;
}
.makeFriendBg{
  color: #5486db;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.togetherPayBg{
  color: #8e4685;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
}
</style>
