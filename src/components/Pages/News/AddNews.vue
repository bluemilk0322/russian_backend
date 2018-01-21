<template lang="pug">
#addNews.card
  .card-header
    h4 新增
  .card-body
    form
      .form-group
        label 標題
        input.form-control(v-model="title")
      //- .form-group
      //-   label 日期
      //-   input.form-control
      .form-group
        label 內容
        textarea.form-control(rows=5, v-model="content")
      .form-group
        button.btn.btn-primary(@click="add") 送出
</template>
<script>
import { api } from '../../../api'
import { mapActions } from "vuex";

export default {
  data () {
    return {
      title: null,
      content: null
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const data = {
        title: this.title,
        content: this.content
      }
      api.news.create(data).then(response => {
        this.initData()
      })
    }
  }
}
</script>
