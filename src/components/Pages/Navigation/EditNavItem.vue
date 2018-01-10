<template lang="pug">
.edit-nav-item.card
  .card-body
    form
      .form-group
        label name
        .input-group
          input.form-control(type='text', v-model="editItem.name")
          .input-group-append
            button.btn.btn-outline-primary(type='button') 修改
      .form-group
        label subItems
        .input-group.add
          input.form-control(type='text', placeholder="請輸入新標題")
          .input-group-append
            button.btn.btn-outline-success(type='button') 新增
        ul.list-group
          li.list-group-item.list-group-item-secondary(v-for="subitem in editItem.subItems")
            .top
              h4.title {{ subitem.name }}
              .actions
                .btn-group(role='group', aria-label='actions')
                  button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#subitme-` + subitem.name + `-` + subitem.id') 編輯
                  button.btn.btn-danger(type='button') 刪除
            .bottom.collapse(:id="`subitme-` + subitem.name + `-` + subitem.id")
              EditSubItem(:subItem="subitem")
</template>
<script>
import EditSubItem from './EditSubItem'

export default {
  props: {
    navItem: Object
  },
  components: {
    EditSubItem
  },
  data () {
    return {
      editItem: Object.assign({}, this.navItem)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-nav-item
  border: none
  .card-body
    form
      .form-group
        .list-group-item
          display: flex
          flex-direction: column
          justify-content: space-between
          .top
            display: flex
            flex-direction: row
            justify-content: space-between
        .add
          margin: 0 0 20px 0
</style>
