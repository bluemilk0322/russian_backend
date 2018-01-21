<template lang="pug">
.subItemList
  ul.list-group
    li.list-group-item.list-group-item-secondary(v-for="subItem in editNavigation.subItems")
      .top
        h4.title {{ subItem.name }}
        .actions
          .btn-group(role='group', aria-label='actions')
            button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#subItem-` + subItem.name + `-` + subItem.id') 編輯
            button.btn.btn-danger(type='button') 刪除
      .bottom.collapse(:id="`subItem-` + subItem.name + `-` + subItem.id")
        EditSubItem(:subItem="subItem")
</template>
<script>
import EditSubItem from './EditSubItem'
export default {

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
