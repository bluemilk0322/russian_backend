<template lang="pug">
#Nav.card
  .card-header
    h1 Navigation
  .card-body
    AddNavigation
    NavigationList
</template>
<script>
import AddNavigation from './AddNavigation'
import NavigationList from "./NavigationList"

export default {
  // data () {
  //   return {
  //     editProps: {
  //       navigation_id: 0,
  //       name: '',
  //       created_on: '',
  //       modified_on: '',
  //       subItems: []
  //     },
  //     newTitle: null
  //   }
  // },
  components: {
    AddNavigation,
    NavigationList
  },
  // computed: {
  //   ...mapState({
  //     navigation: state => state.navigation
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     initData: 'initData'
  //   })
    // EditModalProps (navItem) {
    //   this.editProps = navItem
    // },
    // deleteNavigation (navigationId) {
    //   const self = this
    //   api.navigation.delete({navigationId: navigationId}).then(response => {
    //     self.initData()
    //   })
    // }
  // }
}
</script>
<style lang="sass" scoped>
</style>
