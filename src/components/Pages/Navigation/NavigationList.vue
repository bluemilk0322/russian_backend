<template lang="pug">
#navList
  ul.list-group
    li.list-group-item(v-for="navigation in navigations", :key="navigation.navigation_id")
      .top
        h4.title {{ navigation.name }}
        .actions
          .btn-group(role='group', aria-label='actions')
            button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#` + navigation.name') 編輯
            button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-nav", @click="deleteNavigation(navigation.navigation_id)") 刪除
      .bottom.collapse(:id="navigation.name")
        EditNavigation(:navigation="navigation")
</template>
<script>
import { mapActions, mapState } from 'vuex'
import EditNavigation from './EditNavigation'

export default {
  components: {
    EditNavigation
  },
  computed: {
    ...mapState('navigation', {
      navigations: state => state.data
    })
  },
  methods: {
    ...mapActions('navigation', ['update']),
    async deleteNavigation (navigation_id) {
      await this.$api.navigation.delete({ navigation_id })
      await this.update(this.$api.navigation)
    }
  },
  mounted () {
    const self = this
    this.$nextTick()
      .then(async () => {
        await this.update(this.$api.navigation)
      })
  }
}
</script>
<style lang="sass" scoped>
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
