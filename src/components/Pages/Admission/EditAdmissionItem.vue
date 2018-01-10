<template lang="pug">
.edit-member-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editItem.name")
      .form-group
        button.btn.btn-primary 儲存
</template>
<script>
export default {
  props: {
    memberItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.memberItem)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-member-item
  border: none
  .card-body
    form
      .form-group
</style>
