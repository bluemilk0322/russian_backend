<template lang="pug">
#user-edit.card
  .card-header
    h1 Edit
  .card-body
    form
      .form-group
        h3 current username: {{ currentUsername }}
      .form-group
        label Username
        input.form-control(
          v-model="newUsername",
          type='text',
          placeholder="請選擇使用者"
        )
      .form-group
        label Password
        input.form-control(
          v-model="newPassword",
          type='password',
          placeholder="請輸入密碼"
        )
      .form-group
        button.btn.btn-outline-success(
          type='button',
          @click.prevent="save"
        ) 儲存
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserEdit',
  data () {
    return {
      currentUsername: '請選擇使用者',
      newUsername: null,
      newPassword: null
    }
  },
  computed: {
    ...mapState('user', ['currentEdit'])
  },
  watch: {
    currentEdit () {
      this.currentUsername = this.currentEdit.email
      this.newUsername = this.currentEdit.email
      this.newPassword = this.currentEdit.password
    }
  },
  methods: {
    ...mapActions('user', ['update']),
    async save () {
      const email = this.newUsername
      const password = this.newPassword
      const user_id = this.currentEdit.user_id
      if (email && password) {
        await this.$api.user.edit({ user_id, email, password })
        await this.update(this.$api.user)
        this.currentUsername = '請選擇使用者'
        this.newUsername = null
        this.newPassword = null
      }
    }
  }
}
</script>
<style lang="sass" scoped>
#user-edit
</style>
