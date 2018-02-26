<template lang="pug">
#album.card
  .card-header
    h1 活動花絮
  .card-body
    AddAlbum
    AlbumList
</template>
<script>
import AddAlbum from './AddAlbum'
import AlbumList from './AlbumList'

export default {
  components: {
    AddAlbum,
    AlbumList
  }
}
</script>
<style lang="sass" scoped>

</style>
