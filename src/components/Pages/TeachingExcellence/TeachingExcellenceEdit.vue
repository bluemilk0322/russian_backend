<template lang="pug">
#teachingExcellenceEdit.card
  .card-header
    h3 Teaching Excellence Edit
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="title", type="text", placeholder="Please choose item")
      .form-group
        label year
        input.form-control(v-model="year", type="number", min=90, placeholder="Please choose item")
      .form-group
        label content
        textarea#teachingExcellenceEditEditor
          p Please choose item
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
  watch: {
    content (newContent, oldContent) {
      if (this.editorElement) this.editorElement.setData(newContent)
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
