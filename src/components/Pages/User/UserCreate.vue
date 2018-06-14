<template lang="pug">
#user-create.card
  .card-header
    h1 新增
  .card-body
    form
      .form-group
        label Email
        input.form-control(
          v-model="email",
          type='text',
          placeholder="email"
        )
      .form-group
        label Password
        input.form-control(
          v-model="password",
          type='password',
          placeholder="password"
        )
      .form-group
        button.btn.btn-outline-success(
          type='button',
          @click.prevent="add"
        ) 新增
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserCreate',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions('user', ['update']),
    async add () {
      const email = this.email
      const password = this.password
      await this.$api.user.create({ email, password })
      await this.update(this.$api.user)
    }
  }
}
</script>
<style lang="sass" scoped>
#user-create
  margin: 0 0 20px
</style>
