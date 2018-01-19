<template lang="pug">
#addMember
  form
    .form-group
      label name
      input.form-control(type='text', v-model="newMember.name")
    .form-group
      label position
      input.form-control(type='text', v-model="newMember.position")
    .form-group
      label teaching_lessons
      input.form-control(type='text', v-model="newMember.teaching_lessons")
    .form-group
      label email
      input.form-control(type='text', v-model="newMember.email")
    .form-group
      label telephone
      input.form-control(type='text', v-model="newMember.telephone")
    .form-group
      label type
      select.form-control(type='text', v-model="newMember.type")
        option(value="Fulltime") Fulltime
        option(value="Parttime") Parttime
        option(value="Director") Director
        option(value="Administrative") Administrative
        option(value="Tutor") Tutor
    .form-group
      label image_id
      input.form-control(type='number', v-model.number="newMember.image_id", min=0)
    .form-group
      button.btn.btn-primary(@click="add") 送出
</template>
<script>
import { api } from '../../../api'

export default {
  data () {
    return {
      newMember: {
        name: null,
        position: null,
        teaching_lessons: null,
        email: null,
        telephone: null,
        type: 'Fulltime',
        image_id: null
      }
    }
  },
  methods: {
    add () {
      api.member.create(this.newMember).then(response => {
        console.log(response)
      })
    }
  }
}
</script>
