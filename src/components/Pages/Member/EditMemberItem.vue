<template lang="pug">
.edit-member-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editItem.name")
      .form-group
        label position
        input.form-control(type='text', v-model="editItem.position")
      .form-group
        label teaching_lessons
        input.form-control(type='text', v-model="editItem.teaching_lessons")
      .form-group
        label email
        input.form-control(type='text', v-model="editItem.email")
      .form-group
        label telephone
        input.form-control(type='text', v-model="editItem.telephone")
      .form-group
        label type
        select.form-control(type='text', v-model="editItem.type")
          option(value="Fulltime") Fulltime
          option(value="Parttime") Parttime
          option(value="Director") Director
          option(value="Administrative") Administrative
          option(value="Tutor") Tutor
      .form-group
        label image_id
        input.form-control(type='number', v-model.number="editItem.image_id")
      .form-group
        button.btn.btn-primary(@click="save") 儲存
</template>
<script>
import { api } from '../../../api'

export default {
  props: {
    memberItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.memberItem)
    }
  },
  methods: {
    save () {
      api.member.edit(this.editItem).then(response => {
        console.log(response)
      })
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
