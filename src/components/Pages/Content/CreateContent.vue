<template lang="pug">
#createContent.card
  .card-header #[h3 創建文章]
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model='title', type='text', placeholder="Please enter title")
      .form-group
        label 文章
        textarea#createContentEditor Please enter content
      .form-group
        button.btn.btn-primary(@click.prevent="create") 確認
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: null
    }
  },
  methods: {
    ...mapActions('content', ['update']),
    async create () {
      const key = await this.title
      const values = await Array(this.editorElement.getData())
      await this.$api.content.create({ key, values })
      await this.update(this.$api.content)
      this.title = await null
      await this.editorElement.setData('')
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const editor = await document.getElementById('createContentEditor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 200
      })
    })
  }
}
</script>
