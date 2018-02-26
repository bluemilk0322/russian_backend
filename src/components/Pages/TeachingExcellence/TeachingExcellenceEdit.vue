<template lang="pug">
#teachingExcellenceEdit.card
  .card-header
    h3 編輯
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model="edit.title", type="text", placeholder="Please choose item")
      .form-group
        label 民國年
        input.form-control(v-model="edit.year", type="number", min=90, placeholder="Please choose item")
      .form-group
        label 文章
        textarea#teachingExcellenceEditEditor
          p Please choose item
      .form-group
        button.btn.btn-primary(@click="save") 儲存
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('teachingExcellence', {
      teaching_excellence_id: state => state.currentEdit.teaching_excellence_id,
      title: state => state.currentEdit.title,
      year: state => state.currentEdit.year,
      content: state => state.currentEdit.content
    })
  },
  data () {
    return {
      edit: {
        teaching_excellence_id: this.teaching_excellence_id,
        title: this.title,
        year: this.year,
        content: this.content
      }
    }
  },
  watch: {
    content (newContent, oldContent) {
      if (this.editorElement) this.editorElement.setData(newContent)
    }
  },
  methods: {
    async save () {
      const teaching_excellence_id = await this.edit.teaching_excellence_id
      const title = await this.edit.title
      const year = await this.title
      const content = await this.editorElement.getData()
      this.$api.teachingExcellence.edit(await { teaching_excellence_id, title, year, content })
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const editor = await document.getElementById('teachingExcellenceEditEditor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 200
      })
    })
  }
}
</script>
