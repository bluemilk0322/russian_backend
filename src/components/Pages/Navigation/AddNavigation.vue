<template lang="pug">
#addNav.card
  .card-header
    h4 新增
  .card-body
    form
      .form-group
        label name
        input.form-control(v-model="name", type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
      .form-group
        label order
        input.form-control(v-model.number="order", type='number', placeholder="order", aria-label="order", aria-describedby='basic-addon2', min=0)
      .form-group
        button.btn.btn-outline-success(type='button', @click="add") 新增
</template>
<script>
import { mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      name: null,
      order: null
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const self = this
      api.navigation.create({ name: this.name, order: this.order }).then(response => {
        self.initData()
      })
    }
  }
}
</script>
