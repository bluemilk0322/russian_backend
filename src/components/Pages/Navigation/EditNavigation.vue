<template lang="pug">
.edit-nav-item.card
  .card-body
    form
      .form-group
        label 標題
        input.form-control(type='text', v-model="editNavigation.name")
      .form-group
        label 順序
        input.form-control(type='number', v-model.number="editNavigation.order", min=0)
      .form-group
        button.btn.btn-primary(type='button', @click.prevent="editNavigationName(editNavigation)") 修改
      .form-group
        AddSubItem(:navigationId="navigation.navigation_id")
        SubItemList(:subItems="navigation.subItems")
</template>
<script>
// import SubItem from './SubItem'
import AddSubItem from './AddSubItem'
import SubItemList from './SubItemList'
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
    ...mapActions('navigation', ['update']),
    async editNavigationName (editNavigation) {
      await this.$api.navigation.edit(editNavigation)
      await this.update(this.$api.navigation)
    }
  }
}
</script>
<style lang="sass">
.edit-nav-item
  border: none
</style>
