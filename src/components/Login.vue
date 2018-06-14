<template lang="pug">
#login
  h1 登入
  form
  .form-group
    label email
    input.form-control(
      type='text',
      placeholder='請輸入email',
      v-model="email"
    )
  .form-group
    label 密碼
    input.form-control(
      type='password',
      placeholder='請輸入密碼',
      v-model="password"
    )
  .form-group
    button.btn.btn-primary(@click.prevent="login") 登入
  .form-group(v-if='clicked')
    .alert(:class='alertClass') {{ alertText }}
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: null,
      password: null,
      clicked: false,
      alertClass: 'alert-primary',
      alertText: '登入中'
    }
  },
  methods: {
    ...mapActions('login', ['loginAction', 'saveStatus']),
    async login () {
      this.clicked = true

      const email = this.email
      const password = this.password
      const strategy = "local"
      // test_user_1 / 1234
      this.$api.authentication.login({ email, password, strategy })
        .then(response => { // 登入成功
          const { accessToken } = response.data
          this.alertClass = 'alert-success'
          this.alertText = `登入成功！`
          setTimeout(() => {
            this.loginAction({ email, accessToken })
          }, 1000)
        })
        .catch(error => { // 登入失敗
          const reason = error.response.data.message
          this.alertClass = 'alert-danger'
          this.alertText = `登入失敗！ 原因: ${reason}`
        })
    }
  }
}
</script>

<style lang="sass">
#login
  vertical-align: middle
  padding: 20px
</style>
