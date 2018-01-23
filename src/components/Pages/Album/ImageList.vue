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
      let items = Array()
      return new Promise((resolve, reject) => {
        for (let index = 0; index < files.length; index++) {
          self.getBase64(files[index]).then(data => {
            const image = {
              album_id: self.album.album_id,
              uri: data,
              description: 'test'
            }
            items.push(image)
          })
        }
        return resolve(items)
      })
      .then(items => {
        if (items) {
          return api.event_highlight.create(items)
        }
      })
      .then(response => {
        console.log(response)
        self.initData()
      })
      .catch(err => {
        console.error(err)
      })
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
