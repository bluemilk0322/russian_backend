<template lang="pug">
#user.card
  .card-header
    h1 User
  .card-body
    UserCreate
    UserList
    UserEdit
</template>
<script>
import UserCreate from './UserCreate'
import UserList from './UserList'
import UserEdit from './UserEdit'

export default {
  name: 'User',
  components: {
    UserCreate,
    UserList,
    UserEdit
  }
}
</script>
<style lang="sass" scoped>
#user
</style>
