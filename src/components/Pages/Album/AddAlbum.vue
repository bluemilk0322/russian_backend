<template lang="pug">
#addAlbum.card
  .card-header
    h4 Create Album
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="newAlbum.title")
      .form-group
        label content
        input.form-control(v-model="newAlbum.content")
      .form-group.card
        .card-header
          label.btn.btn-info.form-control
            input(style='display:none;', multiple=true, type='file', @change="uploadImage($event)")
            | add picture
        .card-body
          .pic(v-for="(pic, index) in preview")
            img(:src="pic", width="300px")
            button.btn.btn-danger(@click="deletePic(index)") delete
      .form-group
        button.btn.btn-primary(@click="create") send
</template>
<script>
import { api } from '../../../api'

export default {
  data () {
    return {
      newAlbum: {
        title: null,
        content: null
      },
      preview: []
    }
  },
  methods: {
    // ...mapActions({
    //   initData: 'initData'
    // }),
    create () {
      const self = this
      api.album.create(this.newAlbum)
        .then(response => {
          const album_id = response.data.album_id
          const items = this.preview.map(pic => {
            return {
              album_id: album_id,
              uri: pic
            }
          })
          console.log(items)
          api.event_highlight.create(items)
        })
    },
    uploadImage (event) {
      const self = this
      const files = event.target.files
      for (let index = 0; index < files.length; index++) {
        this.getBase64(files[index]).then(data => {
          self.preview.push(data)
        })
      }
    },
    deletePic (index) {
      this.preview.splice(index, 1)
    }
  }
}
</script>
<style lang="sass" scoped>
.pic
  position: relative
  button
    position: absolute
    top: 50%
</style>
