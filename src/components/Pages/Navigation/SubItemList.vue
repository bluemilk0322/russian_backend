<template lang="pug">
.subItemList.card
  .card-header
    h4 子選單列表
  .card-body
    ul.list-group
      li.list-group-item.list-group-item-secondary(v-for="subItem in subItems", :key="subItem.navigation_item_id")
        .top
          h4.title {{ subItem.name }}
          .actions
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#subItem-` + subItem.navigation_item_id') 編輯
              button.btn.btn-danger(@click="deleteSubItem(subItem.navigation_item_id)", type='button') 刪除
        .bottom.collapse(:id="`subItem-` + subItem.navigation_item_id")
          EditSubItem(:subItem="subItem")

</template>
<script>
import { mapActions } from "vuex"
import EditSubItem from './EditSubItem'

export default {
  props: {
    subItems: Array
  },
  components: {
    EditSubItem
  },
  methods: {
    ...mapActions('navigation', ['update']),
    async deleteSubItem (navigation_item_id) {
      await this.$api.navigationItem.delete({ navigation_item_id })
      await this.update(this.$api.navigation)
    }
  }
}
</script>
<style lang="sass" scoped>
.list-group-item
  display: flex
  flex-direction: column
  justify-content: space-between
  .top
    display: flex
    flex-direction: row
    justify-content: space-between
</style>
