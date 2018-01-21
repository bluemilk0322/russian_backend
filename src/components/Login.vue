<template lang="pug">
#login
  h1 登入
  form
  .form-group
    label 帳號
    input.form-control(type='text', placeholder='請輸入帳號', v-model="account")
  .form-group
    label 密碼
    input.form-control(type='password', placeholder='請輸入密碼', v-model="password")
  button.btn.btn-primary(@click="login") 登入
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      account: null,
      password: null
    }
  },
  methods: {
    ...mapActions({
      loginAction: 'loginAction'
    }),
    login () {
      this.loginAction({
        password: this.password,
        account: this.account
      })
    }
  }
}
</script>

<style lang="sass">
#login
  margin: auto
  vertical-align: middle
  width: 300px
  background: rgba(100, 100, 100, 0.4)
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8)
  padding: 20px
  border-radius: 10px
</style>
