<template lang="pug">
#teachingExcellenceCreate.card
  .card-header
    h3 Teaching Excellence Create
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="title", type="text", placeholder="Please enter title")
      .form-group
        label year
        input.form-control(v-model="year", type="number", min=90, placeholder="Please enter year")
      .form-group
        label content
        textarea#teachingExcellenceCreateEditor
          p Please enter content
      .form-group
        button.btn.btn-primary(@click.prevent="create") Submit
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: null,
      year: null,
      content: null
    }
  },
  methods: {
    ...mapActions('teachingExcellence', ['update']),
    async create () {
      const title = await this.title
      const year = await this.year
      const content = await this.editorElement.getData()
      await this.$api.teachingExcellence.create({ title, year, content })
      await this.update(this.$api.teachingExcellence)
    }
  },
  mounted () {
    this.$nextTick(async () => {
      const editor = await document.getElementById('teachingExcellenceCreateEditor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 200
      })
    })
  }
}
</script>
