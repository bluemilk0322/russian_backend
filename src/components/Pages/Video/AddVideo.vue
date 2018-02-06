<template lang="pug">
#addVideo.card
  .card-header
    h4 新增影片
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="newVideo.title")
      .form-group
        label content
        input.form-control(v-model="newVideo.content")
      .form-group
        label video link
        input.form-control(v-model="newVideo.link")
      .form-group
        label image
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', @change="processFiles($event)")
          | 上傳圖片
        label 預覽圖片
        .review(v-if="preview.image !== null")
          img(:src="preview.image")
        .none(v-else)
          p 尚未上傳圖片
      .form-group
        button.btn.btn-primary(@click.prevent="add") 送出
      .form-group(v-if="upload.isUploading")
        .progress
          .progress-bar(:class="upload.styleClass", role='progressbar', :style='`width: ` + upload.value + `%;`', :aria-valuenow='upload.value', aria-valuemin='0', aria-valuemax='100') {{ upload.text }}
</template>
<script>
import { mapActions } from "vuex"

export default {
  data () {
    return {
      newVideo: {
        title: null,
        content: null,
        link: null,
        image: {
          uri: null
        }
      },
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
    async add () {
      this.upload.isUploading = await true
      this.upload.styleClass = await ['progress-bar-striped', 'progress-bar-animated']
      this.upload.value = await 100
      this.upload.text = await '上傳中'
      // const self = this
      // return new Promise((resolve, reject) => {
      //   if (self.preview.file !== null) {
      //     self.getBase64(self.preview.file).then(data => {resolve(data)});
      //   }
      //   else resolve();
      // })
      // .then(data => {
      //   if (data) self.newVideo.image = {uri: data}
      //   return api.video.create(self.newVideo)
      // })
      // .then(response => {
      //   self.initData()
      // })
      // .catch(err => {
      //   console.error(err)
      // })

      if (await this.preview.file !== null) {
        this.newVideo.image = {uri: await this.getBase64(this.preview.file).then(data => data)}
      }
      await this.$api.video.create(this.newVideo)
      // this.upload.isUploading = await true
      this.upload.styleClass = await ['bg-success']
      this.upload.value = await 100
      this.upload.text = await '上傳完成'
      await this.update(this.$api.video)
    },
    async processFiles (event) {
      this.upload.isUploading = await false
      // this.upload.styleClass = await ['progress-bar-striped', 'progress-bar-animated']
      // this.upload.value = await 0
      // this.upload.text = await ''
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
