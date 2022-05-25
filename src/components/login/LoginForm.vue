<template>
  <div class="form-container">
    <van-form
      @submit="onSubmitForm"
      :show-error-message="false"
      class="van-form-box"
    >
      <van-field
        v-model="username"
        label="账号"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号~' }]"
      >
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码！' }]"
      />
      <van-button
        round
        block
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        native-type="submit"
        >立即登录</van-button
      >
    </van-form>
    <div class="form-content" @click="toRegister">没有账号？立即注册</div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    console.log('登录事件', this.$route)
  },
  activated () {
    console.log('登录组件被激活了')
  },
  methods: {
    async onSubmitForm ({ username, password }) {
      await login(username, password)
      // Toast.success('登录成功')
      this.$toast({
        type: 'success',
        message: '登录成功',
        onClose: () => {
          console.log('toastClose')
          // 登录成功，跳转到首页
          this.$router.replace('/')
        }
      })
    },
    toRegister () {
      this.$emit('changeForm', { moreLoginShowStatus: false })
      this.$router.push('/login/registerform')
    }
  }
}
</script>
<style scoped>
.form-container {
  width: 600px;
  background-color: rgba(24, 24, 24, 0.5);
  padding: 20px 40px;
  border-radius: 20px;
}

.van-form-box {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.form-content {
  color: #fff;
  width: 100%;
  text-align: right;
  padding: 12px 0;
  font-size: 22px;
  text-decoration: underline;
}
</style>
