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
        .card-body {{ pics }}
      .form-group
        button.btn.btn-primary(@click="add") send
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
      pics: []
    }
  },
  methods: {
    // ...mapActions({
    //   initData: 'initData'
    // }),
    add () {
      const self = this
      api.album.create(this.newAlbum)
        .then(response => {
          // self.initData()
          console.log(response)
        })
        .then()
    },
    uploadImage (event) {
      const self = this
      const files = event.target.files
      this.testMixin()
      this.initData()
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
