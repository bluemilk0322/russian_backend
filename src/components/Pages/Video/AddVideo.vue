<template lang="pug">
#addVideo.card
  .card-header
    h4 新增影片
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model="newVideo.title")
      .form-group
        label 文章
        input.form-control(v-model="newVideo.content")
      .form-group
        label 影片連結
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
      .form-group(v-if="upload !== 'none'")
        ProgressBar(:status="upload")
</template>
<script>
import { mapActions } from "vuex"
import ProgressBar from '../ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
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
      upload: 'none'
    }
  },
  methods: {
    ...mapActions('video', ['update']),
    async add () {
      this.upload = await 'uploading'

      if (await this.preview.file !== null) {
        const uri = await this.getBase64(this.preview.file)
        this.newVideo.image = { uri }
      }
      await this.$api.video.create(this.newVideo)
      this.upload = await 'successed'
      await this.update(this.$api.video)
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
