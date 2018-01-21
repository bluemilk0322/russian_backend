<template lang="pug">
#delete-member.modal.fade(tabindex='-1', role='dialog')
  .modal-dialog.modal-lg(role='document')
    .modal-content
      .modal-header
        h5.modal-title 刪除
        button.close(type='button', data-dismiss='modal', aria-label='Close')
          span(aria-hidden='true') ×
      .modal-body
        p 確定刪除 #[strong {{ memberItem.name }}] ?
      .modal-footer
        button.btn.btn-primary(type='button', @click="deleteMember") 確定
        button.btn.btn-secondary(type='button', data-dismiss='modal') 取消
</template>
<script>
import { api } from '../../../api'
import { mapActions } from 'vuex'

export default {
  props: {
    memberItem: {
      type: Object,
      required: false
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    deleteMember () {
      const self = this
      api.member.delete(this.memberItem.member_id).then(response => {
        console.log(response)
        self.initData()
        $('#delete-member').modal('hide')
      })
    }
  }
}
</script>
<style lang="sass" scoped>
#delete-member
</style>
