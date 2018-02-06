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
      .form-group(v-if="upload.isUploading")
        .progress
          .progress-bar(:class="upload.styleClass", role='progressbar', :style='`width: ` + upload.value + `%;`', :aria-valuenow='upload.value', aria-valuemin='0', aria-valuemax='100') {{ upload.text }}

</template>
<script>
import { mapActions } from 'vuex'

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
      },
      upload: {
        isUploading: false,
        styleClass: [],
        value: 0,
        text: ''
      }
    }
  },
  methods: {
    ...mapActions('video', ['update']),
    async save () {
      this.upload.isUploading = await true
      this.upload.styleClass = await ['progress-bar-striped', 'progress-bar-animated']
      this.upload.value = await 100
      this.upload.text = await '上傳中'
      if (await this.preview.file !== null) {
        const uri = await this.getBase64(this.preview.file)
        this.editVideo.image = { uri }
      }
      await this.$api.video.edit(this.editVideo)
      this.upload.styleClass = await ['bg-success']
      this.upload.value = await 100
      this.upload.text = await '上傳完成'
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
      this.upload.isUploading = await false
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
