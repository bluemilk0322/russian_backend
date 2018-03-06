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
        select.form-control(type='text', v-model="type")
          option(value="school") 校內公告
          option(value="speech") 活動演講
          option(value="recruitment") 企業徵才
          option(value="scholarship") 獎助學金
          option(value="enrollment") 招生資訊
          option(value="others") 其他訊息
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
      type: 'school'
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
