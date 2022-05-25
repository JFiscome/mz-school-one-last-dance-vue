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
        :rules="[
          {
            message: '请输入账号~',
            validator: usernameValidator,
          },
        ]"
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
      <van-field
        v-model="rePassword"
        type="password"
        name="rePassword"
        label="重复密码"
        placeholder="请再输入一次密码"
        :rules="[{ required: true, message: '请再输入一次密码~' }]"
      />
      <van-button
        round
        block
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        native-type="submit"
        >马上注册</van-button
      >
    </van-form>
    <div class="form-content" @click="toLogin">已有账号，立即登录</div>
  </div>
</template>

<script>
import { register } from '@/api/user'
export default {
  name: 'RegisterForm',
  data () {
    return {
      username: '',
      password: '',
      rePassword: ''
    }
  },
  methods: {
    usernameValidator (username) {
      const usernameStatus = /^[a-zA-Z]([-_a-zA-Z0-9]{5,20})$/.test(username)
      if (!usernameStatus) {
        this.$toast.fail('账号长度至少为6位，账号必须字母开头，只能包含字母数字下划线')
        return false
      } else {
        return true
      }
    },
    async onSubmitForm ({ username, password, rePassword }) {
      await register(username, password, rePassword)
      // Toast.success('登录成功')
      this.$toast({
        type: 'success',
        message: '注册成功，已自动登录',
        onClose: () => {
          // 登录成功，跳转到首页
          this.$router.replace('/')
        }
      })
    },
    toLogin () {
      this.$emit('changeForm', { moreLoginShowStatus: true })
      this.$router.push('/login/loginform')
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
  margin-bottom: 200px;
}

.van-form-box {
  height: 520px;
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
