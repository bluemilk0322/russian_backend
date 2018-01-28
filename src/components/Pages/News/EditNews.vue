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
      input.form-control(v-model="editNews.type")
    .form-group
      label content
      textarea(:id="`news-editor-` + news.news_id")
    .form-group
      button.btn.btn-primary(@click="edit") 送出
</template>
<script>
import { api } from "../../../api"
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
    ...mapActions({
      initData: 'initData'
    }),
    edit () {
      const self = this
      const data = {
        news_id: this.news.news_id,
        title: this.editNews.title,
        type: this.editNews.type,
        content: this.editorElement.getData()
      }
      api.news.edit(data).then(response => {
        console.log(response)
        self.initData()
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      CKEDITOR.config.height = '1000px'
      const editor = document.getElementById('news-editor-' + this.news.news_id)
      this.editorElement = CKEDITOR.replace(editor, {
        filebrowserUploadUrl: api.single_file_upload.link
      })
      this.editorElement.setData(this.news.content)
    })
  }
}
</script>
