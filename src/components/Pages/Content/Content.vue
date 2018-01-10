<template lang="pug">
#Text.card
  .card-header
    h1 Content
  .card-body
    .search.card
      .card-header
        h4 文章列表
        //- h4 搜尋
        //- .input-group
        //-   input.form-control(type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
        //-   .input-group-append
        //-     button.btn.btn-outline-success(type='button') 搜尋
      .card-body
        ul.list-group
          li.list-group-item(v-for="contentTitle in Object.keys(contents)")
            h5 {{ contentTitle }}
            button.btn.btn-primary(@click="editContent(contentTitle)") 編輯
    textarea#editor(name='content')
      p 請選擇文章
    .actions
      button.btn.btn-primary(@click="saveContent") 儲存
      button.btn.btn-success(@click="resetContent") 重置
      button.btn.btn-danger(@click="clearContent") 清除
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { mapState } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      currentTitle: ''
    }
  },
  computed: {
    ...mapState({
      contents: state => state.content
    })
  },
  methods: {
    editContent (contentTitle) {
      this.currentTitle = contentTitle
      const content = this.contents[contentTitle]
      this.editorElement.then(editor => {
        editor.setData(content)
      })
    },
    saveContent () {
      this.editorElement.then(editor => {
        const newContent = editor.getData()
        api.content.edit({title: this.currentTitle, content: newContent})
      })
    },
    resetContent () {
      const content = this.contents[this.currentTitle]
      this.editorElement.then(editor => {
        editor.setData(content)
      })
    },
    clearContent () {
      this.editorElement.then(editor => {
        editor.setData('')
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.editorElement = ClassicEditor
        .create(document.querySelector('#editor'))
        .then(editor => {
          return editor
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
  .search
    height: 300px
    margin: 0 0 10px 0
  .list-group-item
    display: flex
    flex-direction: row
    justify-content: space-between
    h5
      align-self: center
  .actions
    margin: 10px 0 0 0
</style>
