<template lang="pug">
#memberList.search-member.card
  .card-header
    h4 搜尋
    input.form-control(v-model="search", type='text', placeholder="請輸入姓名", aria-label="請輸入姓名", aria-describedby='basic-addon2')
  .card-body
    DeleteMemberModal(:memberItem="deleteMember")
    ul.list-group
      li.list-group-item(v-for="member in filterList")
        .top
          h4.title {{ member.name }}
          .actions
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#member` + member.member_id') 編輯
              button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-member", @click.prevent="deleteProp(member)") 刪除
        .bottom.collapse(:id="`member` + member.member_id")
          EditMember(:memberItem="member")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import EditMember from './EditMemberItem'
import DeleteMemberModal from './DeleteModal'

export default {
  components: {
    EditMember,
    DeleteMemberModal
  },
  data () {
    return {
      search: '',
      deleteMember: {
        name: null
      }
    }
  },
  computed: {
    ...mapState('member', {
      members: state => state.data
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
    ...mapActions('member', ['update']),
    deleteProp (member) {
      this.deleteMember = member
    }
  },
  mounted () {
    this.$nextTick(async () => {
      await this.update(this.$api.member)
    })
  }
}
</script>
