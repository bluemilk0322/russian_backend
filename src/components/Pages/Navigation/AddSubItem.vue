<template lang="pug">
.addSubItem.card
  .card-header
    h4 新增子選單
  .card-body
    .form-group
      label 標題
      input.form-control(v-model="name", type='text', placeholder="請輸入新標題")
    .form-group
      label 欲連結之文章
      input.form-control(v-model="contentKey", type='text', placeholder="請輸入欲連結文章名")
    .form-group
      button.btn.btn-primary(@click="add", type='button') 新增
</template>
<script>
import { mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  props: {
    navigationId: Number
  },
  data () {
    return {
      name: null,
      contentKey: null
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const self = this
      const data = {
        navigation_id: this.navigationId,
        name: this.name,
        content_key: this.contentKey
      }
      api.navigationItem.create(data).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
