<template lang="pug">
#Nav.card
  .card-header
    h1 導覽列
  .card-body
    AddNavigation
    NavigationList
</template>
<script>
import AddNavigation from './AddNavigation'
import NavigationList from "./NavigationList"

export default {
  components: {
    AddNavigation,
    NavigationList
  }
}
</script>
<style lang="sass" scoped>
</style>
