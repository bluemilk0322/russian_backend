<template lang="pug">
#news.card
  .card-header
    h1 News
  .card-body
    AddNews
    NewsList
</template>
<script>
import AddNews from './AddNews'
import NewsList from './NewsList'

export default {
  components: {
    AddNews,
    NewsList
  }
}
</script>
<style lang="sass">
#news
  .card-body
    overflow-y: scroll
</style>
