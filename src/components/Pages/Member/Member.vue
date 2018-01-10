<template lang="pug">
#Member.card
  .card-header
    h1 Member
  .card-body
    .add-member.card
      .card-header
        h4 新增成員
      .card-body
    .search-member.card
      .card-header
        h4 搜尋
        .input-group
          input.form-control(type='text', placeholder="請輸入姓名", aria-label="請輸入姓名", aria-describedby='basic-addon2')
          .input-group-append
            button.btn.btn-outline-success(type='button') 搜尋
      .card-body
        ul.list-group
          li.list-group-item(v-for="member in members")
            .top
              h4.title {{ member.name }}
              .actions
                .btn-group(role='group', aria-label='actions')
                  button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#member` + member.member_id') 編輯
                  button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-member") 刪除
            .bottom.collapse(:id="`member` + member.member_id")
              EditMember(:memberItem="member")
  DeleteMemberModal(:member_id="1")
</template>
<script>
import { mapState } from 'vuex'
import DeleteMemberModal from './DeleteModal'
import EditMember from './EditMemberItem'

export default {
  components: {
    DeleteMemberModal,
    EditMember
  },
  computed: {
    ...mapState({
      members: state => state.member.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Member
  .list-group
    display: flex
    flex-direction: column
    .top
      display: flex
      justify-content: space-between
      .list-group-item
        .title
          align-self: center
    .bottom
      margin: 5px 0 0 0
</style>
