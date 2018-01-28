<template lang="pug">
.edit-nav-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editNavigation.name")
      .form-group
        label order
        input.form-control(type='number', v-model.number="editNavigation.order", min=0)
      .form-group
        button.btn.btn-primary(type='button', @click="editNavigationName(editNavigation)") 修改
      .form-group
        AddSubItem(:navigationId="navigation.navigation_id")
        SubItemList(:subItems="navigation.subItems")
</template>
<script>
// import SubItem from './SubItem'
import AddSubItem from './AddSubItem'
import SubItemList from './SubItemList'
import { api } from '../../../api'
import { mapActions } from 'vuex'

export default {
  props: {
    navigation: Object
  },
  components: {
    AddSubItem,
    SubItemList
  },
  data () {
    return {
      editNavigation: Object.assign({}, this.navigation)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    editNavigationName (editNavigation) {
      const self = this
      api.navigation.edit(editNavigation).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass">
.edit-nav-item
  border: none
</style>
