<template lang="pug">
#Member.card
  .card-header
    h1 Member
  .card-body
    .add-member.card
      .card-header
        h4 新增成員
      .card-body
        AddMember
    .search-member.card
      .card-header
        h4 搜尋
        input.form-control(v-model="search", type='text', placeholder="請輸入姓名", aria-label="請輸入姓名", aria-describedby='basic-addon2')
      .card-body
        ul.list-group
          li.list-group-item(v-for="member in filterList")
            .top
              h4.title {{ member.name }}
              .actions
                .btn-group(role='group', aria-label='actions')
                  button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#member` + member.member_id') 編輯
                  button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-member", @click="deleteProp(member)") 刪除
            .bottom.collapse(:id="`member` + member.member_id")
              EditMember(:memberItem="member")
  DeleteMemberModal(:memberItem="deleteMember")
</template>
<script>
import { mapState } from 'vuex'
import DeleteMemberModal from './DeleteModal'
import EditMember from './EditMemberItem'
import AddMember from './AddMember'

export default {
  components: {
    DeleteMemberModal,
    EditMember,
    AddMember
  },
  data () {
    return {
      search: '',
      deleteMember: null
    }
  },
  computed: {
    ...mapState({
      members: state => state.member.data
    }),
    filterList () {
      if (this.members) {
        return this.members.filter(member => {
          return member.name.includes(this.search)
        })
      } else {
        return []
      }
    }
  },
  methods: {
    deleteProp (member) {
      this.deleteMember = member
    }
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
