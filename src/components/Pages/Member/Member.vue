<template lang="pug">
#Member.card
  .card-header
    h1 Member
  .card-body
    ul.list-group
      li.list-group-item(v-for="member in members")
        .top
          .title
            h4 {{ member.name }}
          .actions
        .bottom
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      members: state => state.member.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Member
</style>
