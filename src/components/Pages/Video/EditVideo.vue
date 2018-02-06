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
        img(:src="$api.rootLink + video.image.path")
      .form-group
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', @change="processFiles($event)")
          | 修改圖片
        label preview image
        img(v-if="preview.file !== null", :src="preview.image")
        p(v-else) 尚未上傳
      .form-group
        button.btn.btn-primary(@click.prevent="save") 儲存
      .form-group(v-if="upload !== 'none'")
        ProgressBar(:status="upload")

</template>
<script>
import { mapActions } from 'vuex'
import ProgressBar from '../ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
  props: {
    video: Object
  },
  data () {
    return {
      editVideo: Object.assign({}, this.video),
      preview: {
        image: null,
        file: null
      },
      upload: 'none'
    }
  },
  methods: {
    ...mapActions('video', ['update']),
    async save () {
      this.upload = await 'uploading'
      if (await this.preview.file !== null) {
        const uri = await this.getBase64(this.preview.file)
        this.editVideo.image = { uri }
      }
      await this.$api.video.edit(this.editVideo)
      this.upload = await 'successed'
      await this.update(this.$api.video)
      // const self = this
      // return new Promise((resolve, reject) => {
      //   if (self.preview.file !== null) {
      //     self.getBase64(self.preview.file).then(data => {resolve(data)});
      //   }
      //   else resolve();
      // })
      // .then(data => {
      //   if (data) self.editVideo.image = {uri: data}
      //   return api.video.edit(self.editVideo)
      // })
      // .then(response => {
      //   self.initData()
      // })
      // .catch(err => {
      //   console.error(err)
      // })
    },
    async processFiles (event) {
      this.upload = await 'none'
      const self = this
      const file = await event.target.files[0]
      this.preview.file = await file

      const reader = await new FileReader()
      reader.onload = async event => {
        self.preview.image = await event.target.result
      }
      await reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-video
  border: none
</style>
