<template lang="pug">
.user-item.list-group-item
  span.username {{ user.email }}
  .btn-group
      button.btn.btn-primary(@click.prevent="editItem(user)") 編輯
      button.btn.btn-danger(@click.prevent="removeItem(user)") 刪除
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('user', ['update', 'edit']),
    async editItem (user) {
      await this.edit(user)
    },
    async removeItem (user) {
      const user_id = user.user_id
      await this.$api.user.delete({ user_id })
      await this.update(this.$api.user)
    }
  }
}
</script>
<style lang="sass" scoped>
.user-item
  display: flex
  justify-content: space-between
  .username
    margin: auto 0
    font-size: 1.5em
</style>
