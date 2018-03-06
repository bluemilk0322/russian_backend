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
    ...mapState('teachingExcellence', ['currentEdit'])
  },
  data () {
    return {
      edit: {
        title: null,
        teaching_excellence_id: null,
        year: null,
        content: null
      }
    }
  },
  watch: {
    currentEdit (newData, oldData) {
      this.edit = newData
      if (this.editorElement) this.editorElement.setData(newData.content)
    }
  },
  methods: {
    async save () {
      const { teaching_excellence_id, title, year } = this.edit
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
