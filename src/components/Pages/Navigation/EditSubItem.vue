<template lang="pug">
.edit-sub-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editSubItem.name")
      .form-group
        label contentKey
        input.form-control(type='text', v-model="editSubItem.content_key")
      .form-group
        label order
        input.form-control(type='number', v-model.number="editSubItem.order", min=0)
      .form-group
        button.btn.btn-primary(@click="save", type='button') 修改

</template>
<script>
import { mapActions } from "vuex"
import { api } from '../../../api'

export default {
  props: {
    subItem: Object
  },
  data () {
    return {
      editSubItem: Object.assign({}, this.subItem)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    save () {
      const self = this
      const data = {
        navigation_item_id: this.subItem.navigation_item_id,
        navigation_id: this.subItem.navigation_id,
        name: this.editSubItem.name,
        content_key: this.editSubItem.content_key,
        order: this.editSubItem.order
      }
      api.navigationItem.edit(data).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-sub-item
  border: none
  background: #dddfe2
</style>
