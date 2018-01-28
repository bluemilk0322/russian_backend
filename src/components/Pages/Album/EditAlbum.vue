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
        ImageList(:images="editAlbum.images", :album_id="editAlbum.album_id", @addImage="addImage", @deleteImage="deleteImage")
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
      editAlbum: Object.assign({}, this.album),
      editImage: {
        add: [],
        delete: []
      }
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    save () {
      const self = this
      const albumData = {
        album_id: this.editAlbum.album_id,
        title: this.editAlbum.title,
        content: this.editAlbum.content
      }
      const addEventHighlightData = this.editImage.add
      const deleteEventHighlightData = this.editImage.delete
      return new Promise((resolve, reject) => {
        return resolve(api.album.edit(albumData))
      })
      .then(response => {
        if (addEventHighlightData.length !== 0)
          return api.event_highlight.create(addEventHighlightData)
      })
      .then(response => {
        for (let index in deleteEventHighlightData) {
          const data = {
            event_highlight_id: deleteEventHighlightData[index].event_highlight_id
          }
          api.event_highlight.delete(data)
        }
        return self
      })
      .then(self => {
        self.initData()
      })
    },
    deleteImage (imageData) {
      // for component ImageList
      this.editImage.delete.push(imageData)
    },
    addImage (imageData) {
      // for component ImageList
      this.editImage.add.push(imageData)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-album
  border: none
</style>
