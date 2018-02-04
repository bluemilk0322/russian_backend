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
      label order
      input.form-control(v-model.number="order", type='number', placeholder="order", min=0)
    .form-group
      button.btn.btn-primary(@click="add", type='button') 新增
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    navigationId: Number
  },
  data () {
    return {
      name: null,
      contentKey: null,
      order: null
    }
  },
  methods: {
    ...mapActions('navigation', ['update']),
    async add () {
      // const self = this
      const data = await {
        navigation_id: this.navigationId,
        name: this.name,
        content_key: this.contentKey,
        order: this.order
      }
      await this.$api.navigationItem.create(data)
      await this.update(this.$api.navigation)
      await this.init()
    },
    async init () {
      this.name = null
      this.contentKey = null
      this.order = null
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
