<template lang="pug">
#Text.card
  .card-header
    h1 Content
  .card-body
    .search.card
      .card-header
        h4 文章列表
        input.form-control(v-model='search', type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
      .card-body
        ul.list-group
          li.list-group-item(v-for="contentTitle in filterList")
            h5 {{ contentTitle }}
            button.btn.btn-primary(@click="editContent(contentTitle)") 編輯
    textarea#content-editor(name='content-editor')
      p 請選擇文章
    .actions
      button.btn.btn-primary(@click="saveContent") 儲存
      button.btn.btn-success(@click="resetContent") 重置
      button.btn.btn-danger(@click="clearContent") 清除
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      currentTitle: '',
      search: ''
    }
  },
  computed: {
    ...mapState('content', {
      contents: state => state.data
    }),
    filterList () {
      return Object.keys(this.contents).filter(title => {
        return title.includes(this.search)
      })
    }
  },
  methods: {
    ...mapActions('content', ['update']),
    async editContent (contentTitle) {
      this.currentTitle = await contentTitle
      const content = await this.contents[contentTitle][0]
      await this.editorElement.setData(content)
    },
    async saveContent () {
      const data = {
        title: await this.currentTitle,
        content: await this.editorElement.getData()
      }
      await this.$api.content.edit(data)
    },
    async resetContent () {
      const content = await this.contents[this.currentTitle]
      await this.editorElement.setData(content)
    },
    async clearContent () {
      await this.editorElement.setData('')
    }
  },
  mounted () {
    this.$nextTick(async () => {
      await this.update(this.$api.content)

      CKEDITOR.config.height = await '1000px'
      const editor = await document.getElementById('content-editor')
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink
      })

      this.editorElement.on('fileUploadResponse', event => {
        // Prevent the default response handler.
        console.log(event)
        event.stop()

        // Get XHR and response.
        const data = event.data,
              xhr = data.fileLoader.xhr,
              response = xhr.responseText.split( '|' )
        console.log(response)
        if (response[1]) {
          // An error occurred during upload.
          data.message = response[1]
          event.cancel()
        } else {
          data.url = response[0]
        }
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
