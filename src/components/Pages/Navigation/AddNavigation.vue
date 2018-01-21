<template lang="pug">
#addNav.card
  .card-header
    h4 新增
  .card-body
    .input-group
      input.form-control(v-model="name", type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
      .input-group-append
        button.btn.btn-outline-success(type='button', @click="add") 新增
</template>
<script>
import { mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      name: null
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const self = this
      api.navigation.create({ name: this.name }).then(response => {
        self.initData()
      })
    }
  }
}
</script>
