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
        button.btn.btn-primary(type='button') 修改

</template>
<script>
export default {
  props: {
    subItem: Object
  },
  data () {
    return {
      editSubItem: Object.assign({}, this.subItem)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-sub-item
  border: none
  background: #dddfe2
</style>
