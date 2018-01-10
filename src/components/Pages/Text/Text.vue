<template lang="pug">
#Text.card
  .card-header
    h1 Content
  .card-body
    p {{ contents }}
    textarea#editor(name='content')
      p Here goes the initial content of the editor.
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      contents: state => state.content
    })
  },
  mounted () {
    this.$nextTick(() => {
      ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
          // console.log(editor)
        })
        .catch(error => {
          console.error(error)
        })
    })
  }
}
</script>
<style lang="sass" scoped>
#Text
</style>
