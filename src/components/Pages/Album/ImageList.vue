<template lang="pug">
.image-list.card
  .card-header
    label.btn.btn-info.form-control
      input(style='display:none;', multiple=true, type='file', @change="uploadImage($event)")
      | 新增圖片
  .card-body {{ album }}
</template>
<script>
import { mapActions, mapState } from "vuex"
import { api } from '../../../api'

export default {
  props: {
    album: Object
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    uploadImage (event) {
      const self = this
      const files = event.target.files
      let items = []
      return new Promise((resolve, reject) => {
        for (let index = 0; index < files.length; index++) {
          self.getBase64(files[index]).then(data => {
            const image = {
              album_id: self.album.album_id,
              file: {
                uri: data
              }
            }
            items.push(image)
          })
        }
        return resolve(items)
      })
      .then(items => {
        if (items) {
          console.log(items)
          return api.event_highlight.create(items)
        }
      })
      .then(response => {
        self.initData()
      })
      .catch(err => {
        console.error(err)
      })
      // this.preview.file = file

      // const reader = new FileReader()
      // reader.onload = event => {
      //   self.preview.image = event.target.result
      // }
      // reader.readAsDataURL(file)
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.image-list
  // border: none
</style>
