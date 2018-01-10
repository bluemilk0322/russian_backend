<template lang="pug">
#Admission.card
  .card-header
    h1 Admission
  .card-body
    .add-admin.card
      .card-header
        h4 新增管理員
      .card-body
        form
          .form-group
            label account
            input.form-control(type='text')
          .form-group
            label password
            input.form-control(type='text')
          .form-group
            button.btn.btn-success 新增
    ul.list-group
      li.list-group-item(v-for="admin in admissions")
        .top
          h4.title {{ admin.name }}
          .actions
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#admin` + admin.admission_id') 編輯
              button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-admin") 刪除
        .bottom.collapse(:id="`admin` + admin.admission_id")
          EditAdmission(:admissionItem="admin")
  DeleteAdmin(:admission_id="1")
</template>
<script>
import { mapState } from 'vuex'
import EditAdmission from './EditAdmissionItem'
import DeleteAdmin from './DeleteModal'

export default {
  components: {
    EditAdmission,
    DeleteAdmin
  },
  computed: {
    ...mapState({
      admissions: state => state.admission.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Admission
</style>
