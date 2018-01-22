<template lang="pug">
.edit-video.card
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="editVideo.title")
      .form-group
        label content
        input.form-control(v-model="editVideo.content")
      .form-group
        label link
        input.form-control(v-model="editVideo.link")
      .form-group
        label current image
        img(:src="`http://192.168.88.204:3030` + editVideo.image.path")
      .form-group
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', @change="processFiles($event)")
          | 修改圖片
        label preview image
        img(v-if="preview.file !== null", :src="preview.image")
        p(v-else) 尚未上傳
      .form-group
        button.btn.btn-primary(@click="save") 儲存

</template>
<script>
import { mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  props: {
    video: Object
  },
  data () {
    return {
      editVideo: Object.assign({}, this.video),
      preview: {
        image: null,
        file: null
      }
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    save () {
      const self = this
      return new Promise((resolve, reject) => {
        if (self.preview.file !== null) {
          self.getBase64(self.preview.file).then(data => {resolve(data)});
        }
        else resolve();
      })
      .then(data => {
        if (data) self.editVideo.image = {uri: data}
        return api.video.edit(self.editVideo)
      })
      .then(response => {
        self.initData()
      })
      .catch(err => {
        console.error(err)
      })
    },
    processFiles (event) {
      const self = this
      const file = event.target.files[0]
      this.preview.file = file

      const reader = new FileReader()
      reader.onload = event => {
        self.preview.image = event.target.result
      }
      reader.readAsDataURL(file)
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
.edit-video
  border: none
</style>
