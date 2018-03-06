<template lang="pug">
.card.card-body
  form
    .form-group
      label title
      input.form-control(v-model="editNews.title")
    .form-group
      label created_on
      input.form-control(v-model="editNews.created_on", disabled=true)
    .form-group
      label type
      select.form-control(type='text', v-model="editNews.type")
          option(value="school") 校內公告
          option(value="speech") 活動演講
          option(value="recruitment") 企業徵才
          option(value="scholarship") 獎助學金
          option(value="enrollment") 招生資訊
          option(value="others") 其他訊息
    .form-group
      label content
      textarea(:id="`news-editor-` + news.news_id")
    .form-group
      button.btn.btn-primary(@click.prevent="edit") 送出
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: {
    news: Object
  },
  data () {
    return {
      editNews: Object.assign({}, this.news)
    }
  },
  methods: {
    ...mapActions('news', ['update']),
    async edit () {
      const data = await {
        news_id: this.news.news_id,
        title: this.editNews.title,
        type: this.editNews.type,
        content: this.editorElement.getData()
      }
      await this.$api.news.edit(data)
      await this.update(this.$api.news)
    }
  },
  mounted () {
    this.$nextTick(async () => {
      CKEDITOR.config.height = await '1000px'
      const editor = await document.getElementById('news-editor-' + this.news.news_id)
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: this.$api.singleFileUpload.fullLink
      })
      await this.editorElement.setData(this.news.content)
    })
  }
}
</script>
