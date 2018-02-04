<template lang="pug">
#Content.card
  .card-header
    h1 Content
  .card-body
    CreateContent
    ContentList
    EditContent
</template>
<script>
// import { mapState, mapActions } from 'vuex'
import CreateContent from './CreateContent'
import ContentList from './ContentList'
import EditContent from './EditContent'

export default {
  components: {
    CreateContent,
    ContentList,
    EditContent
  }
}
</script>
<style lang="sass" scoped>
#Content
</style>
