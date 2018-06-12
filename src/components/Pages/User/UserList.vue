<template lang="pug">
#user-list.card
  .card-header
    h4 搜尋
    input.form-control(v-model="search", type='text', placeholder="請輸入使用者帳號", aria-label="請輸入使用者帳號")
  .card-body
    ul.list-group
      UserItem(
        v-for='i in 10',
        :key='i'
      )
</template>
<script>
import UserItem from './UserItem'

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style lang="sass" scoped>
#user-list
</style>
