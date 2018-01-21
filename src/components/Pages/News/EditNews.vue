<template lang="pug">
.card.card-body
  form
    .form-group
      label title
      input.form-control(v-model="editNews.title")
    .form-group
      label created_on
      input.form-control(v-model="editNews.created_on", disabled=true)
    .form-group
      label content
      textarea.form-control(v-model="editNews.content")
    .form-group
      button.btn.btn-primary(@click="edit") 送出
</template>
<script>
import { api } from "../../../api"
import { mapActions } from "vuex";

export default {
  props: {
    news: Object
  },
  data () {
    return {
      editNews: Object.assign({}, this.news)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    edit () {
      const self = this
      const data = {
        news_id: this.news.news_id,
        title: this.editNews.title,
        content: this.editNews.content
      }
      api.news.edit(data).then(response => {
        console.log(response)
        self.initData()
      })
    }
  }
}
</script>
