<template lang="pug">
#editContent.card
  .card-header #[h3 Edit Content]
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="title", placeholder="Please choose content")
      .form-group
        textarea#editContentEditor Please choose content
      .form-group.actions
        button.btn.btn-primary(@click="saveContent") 儲存
        button.btn.btn-success(@click="resetContent") 重置
        button.btn.btn-danger(@click="clearContent") 清除
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('content', {
      editContent: state => state.currentEdit
    })
  },
  data () {
    return {
      title: null,
      content: null
    }
  },
  watch: {
    editContent (newContent, oldContent) {
      this.title = newContent.title
      this.editorElement.setData(newContent.content)
    }
  },
  methods: {
    ...mapActions('content', ['update']),
    async saveContent () {
      const key = await this.title
      const values = await Array(this.editorElement.getData())
      await this.$api.content.create({ key, values })
      await this.update(this.$api.content)
    },
    async resetContent () {
      const content = await this.editContent.content
      await this.editorElement.setData(content)
    },
    async clearContent () {
      await this.editorElement.setData('')
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const editor = await document.getElementById('editContentEditor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 200
      })
    })
  }
}
</script>
