<template lang="pug">
#user-create.card
  .card-header
    h1 Create
  .card-body
    form
      .form-group
        label Username
        input.form-control(v-model="username", type='text', placeholder="username", aria-label="username")
      .form-group
        label Password
        input.form-control(v-model="password", type='password', placeholder="password", aria-label="order")
      .form-group
        button.btn.btn-outline-success(type='button', @click.prevent="add") 新增
</template>
<script>
export default {
  name: 'UserCreate',
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    add () {
      console.log(this.username, this.password)
    }
  }
}
</script>
<style lang="sass" scoped>
#user-create
  margin: 0 0 20px
</style>
