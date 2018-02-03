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
    ...mapActions('album', ['update']),
    async save () {
      const albumData = await {
        album_id: this.editAlbum.album_id,
        title: this.editAlbum.title,
        content: this.editAlbum.content
      }
      await this.$api.album.edit(albumData)

      const addEventHighlightData = await this.editImage.add
      const deleteEventHighlightData = await this.editImage.delete

      if (addEventHighlightData.length !== 0)
        await this.$api.event_highlight.create(addEventHighlightData)

      for (let index in deleteEventHighlightData) {
        const data = await {
          event_highlight_id: deleteEventHighlightData[index].event_highlight_id
        }
        this.$api.eventHighlight.delete(data)
      }

      await this.update(this.$api.album)

      // return new Promise((resolve, reject) => {
      //   return resolve(api.album.edit(albumData))
      // })
      // .then(response => {
      //   if (addEventHighlightData.length !== 0)
      //     return api.event_highlight.create(addEventHighlightData)
      // })
      // .then(response => {
      //   for (let index in deleteEventHighlightData) {
      //     const data = {
      //       event_highlight_id: deleteEventHighlightData[index].event_highlight_id
      //     }
      //     api.event_highlight.delete(data)
      //   }
      //   return self
      // })
      // .then(self => {
      //   self.initData()
      // })
    },
    async deleteImage (imageData) {
      // for component ImageList
      await this.editImage.delete.push(imageData)
    },
    async addImage (imageData) {
      // for component ImageList
      await this.editImage.add.push(imageData)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-album
  border: none
</style>
