<template lang="pug">
.edit-sub-item.card
  .card-body
    form
      .form-group
        label name
        .input-group
          input.form-control(type='text', v-model="editSubItem.name")
          .input-group-append
            button.btn.btn-outline-primary(type='button') 修改

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
