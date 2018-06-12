<template lang="pug">
#user.card
  .card-header
    h1 User
  .card-body
    UserCreate
    UserList
</template>
<script>
import UserCreate from './UserCreate'
import UserList from './UserList'

export default {
  name: 'User',
  components: {
    UserCreate,
    UserList
  }
}
</script>
<style lang="sass" scoped>
#user
</style>
