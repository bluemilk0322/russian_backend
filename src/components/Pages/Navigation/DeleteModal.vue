<template lang="pug">
#delete-nav.modal.fade(tabindex='-1', role='dialog')
  .modal-dialog.modal-lg(role='document')
    .modal-content
      .modal-header
        h5.modal-title 刪除
        button.close(type='button', data-dismiss='modal', aria-label='Close')
          span(aria-hidden='true') ×
      .modal-body
        p {{ navigation_id }}
        p {{ navigation_item_id }}
      .modal-footer
        button.btn.btn-primary(type='button') 確定
        button.btn.btn-secondary(type='button', data-dismiss='modal') 取消
</template>
<script>
export default {
  props: {
    navigation_id: {
      type: Number,
      required: false
    },
    navigation_item_id: {
      type: Number,
      required: false
    }
  }
}
</script>
<style lang="sass" scoped>
#delete-nav
</style>
