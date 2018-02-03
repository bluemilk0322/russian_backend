<template lang="pug">
#Member.card
  .card-header
    h1 Member
  .card-body
    AddMember
    MemberList
</template>
<script>
import AddMember from './AddMember'
import MemberList from './MemberList'

export default {
  components: {
    AddMember,
    MemberList
  }
}
</script>
<style lang="sass" scoped>
#Member
  .list-group
    display: flex
    flex-direction: column
    .top
      display: flex
      justify-content: space-between
      .list-group-item
        .title
          align-self: center
    .bottom
      margin: 5px 0 0 0
</style>
