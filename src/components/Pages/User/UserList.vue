<template lang="pug">
#user-list.card
  .card-header
    h4 搜尋
    input.form-control(
      v-model="search",
      type='text',
      placeholder="請輸入使用者帳號",
      aria-label="請輸入使用者帳號"
    )
  .card-body
    ul.list-group
      UserItem(
        v-for='user in data',
        :key='user.user_id',
        :user='user'
      )
</template>
<script>
import { mapState, mapActions } from 'vuex'
import UserItem from './UserItem'

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  computed: {
    ...mapState('user', ['data'])
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('user', ['update'])
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  beforeMount () {
    this.update(this.$api.user)
  }
}
</script>
<style lang="sass" scoped>
#user-list
  max-height: 500px
  margin-bottom: 20px
</style>
