<template lang="pug">
.edit-album.card
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model="editAlbum.title")
      .form-group
        label 文章
        textarea(:id="`album` + album.album_id")
      //- .form-group
        //- label images
        //- ImageList(:images="editAlbum.images", :album_id="editAlbum.album_id", @addImage="addImage", @deleteImage="deleteImage")
      .form-group
        button.btn.btn-primary(@click.prevent="save") 儲存
</template>
<script>
import { mapActions } from "vuex"

export default {
  props: {
    album: Object
  },
  watch: {

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
      // const albumData = await {
      //   album_id: this.editAlbum.album_id,
      //   title: this.editAlbum.title,
      //   content: await this.editorElement.getData()
      // }
      const album_id = this.album.album_id
      const title = this.editAlbum.title
      const content = await this.editorElement.getData()
      await this.$api.album.edit({ album_id, title, content })

      // const addEventHighlightData = await this.editImage.add
      // const deleteEventHighlightData = await this.editImage.delete

      // if (addEventHighlightData.length !== 0)
      //   await this.$api.event_highlight.create(addEventHighlightData)

      // for (let index in deleteEventHighlightData) {
      //   const data = await {
      //     event_highlight_id: deleteEventHighlightData[index].event_highlight_id
      //   }
      //   this.$api.eventHighlight.delete(data)
      // }

      await this.update(this.$api.album)

    }
    // async deleteImage (imageData) {
    //   // for component ImageList
    //   await this.editImage.delete.push(imageData)
    // },
    // async addImage (imageData) {
    //   // for component ImageList
    //   await this.editImage.add.push(imageData)
    // }
  },
  mounted () {
    this.$nextTick(async () => {
      const editorId = `album` + this.album.album_id
      const editor = await document.getElementById(editorId)
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 200
      })
      this.editorElement.setData(await this.album.content)
    })
  }
}
</script>
<style lang="sass" scoped>
.edit-album
  border: none
</style>
