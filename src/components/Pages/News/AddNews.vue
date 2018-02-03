<template lang="pug">
#addNews.card
  .card-header
    h4 新增
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model="title")
      .form-group
        label 類型
        input.form-control(v-model="type")
      .form-group
        label 內容
        textarea#news-editor(name="news-editor")
      .form-group
        button.btn.btn-primary(@click.prevent="add") 送出
</template>
<script>
import { mapActions } from "vuex"

export default {
  data () {
    return {
      title: null,
      content: null,
      type: null
    }
  },
  methods: {
    ...mapActions('news', ['update']),
    async add () {
      const data = await {
        title: this.title,
        type: this.type,
        content: await this.editorElement.getData()
      }
      await this.$api.news.create(data)
      await this.update(this.$api.news)
    }
  },
  mounted () {
    this.$nextTick(async () => {
      CKEDITOR.config.height = await '1000px'
      const editor = await document.getElementById('news-editor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: this.$api.singleFileUpload.fullLink
      })
    })
  }
}
</script>
