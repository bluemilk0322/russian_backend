<template lang="pug">
.edit-album.card
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="editAlbum.title")
      .form-group
        label content
        input.form-control(v-model="editAlbum.content")
      .form-group
        label images
        ImageList(:album="editAlbum")
      .form-group
        button.btn.btn-primary(@click="save") save
</template>
<script>
import ImageList from './ImageList'
import { mapActions } from "vuex"
import { api } from '../../../api'

export default {
  components: {
    ImageList
  },
  props: {
    album: Object
  },
  data () {
    return {
      editAlbum: Object.assign({}, this.album)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    save () {
      const self = this
      const data = {
        album_id: this.editAlbum.album_id,
        title: this.editAlbum.title,
        content: this.editAlbum.content
      }
      api.album.edit(data).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-album
  border: none
</style>
