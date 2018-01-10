<template lang="pug">
#Nav.card
  .card-header
    h1 Navigation
  .card-body
    //- p {{ navigation }}
    .card.add
      h5.card-header 新增
      .card-body
        .input-group.mb-3
          input.form-control(type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
          .input-group-append
            button.btn.btn-outline-success(type='button') 新增
    ul.list-group
      li.list-group-item(v-for="i in 20")
        .title title
        .actions
          .btn-group(role='group', aria-label='actions')
            button.btn.btn-primary(type='button') 修改
            button.btn.btn-danger(type='button') 刪除
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      navigation: state => state.navigation
    })
  }
}
</script>
<style lang="sass" scoped>
#Nav
  height: 100%
  .card-body
    overflow-y: scroll
    .add
      margin: 0 0 10px 0
    .list-group
      .list-group-item
        display: flex
        justify-content: space-between
        .title
          align-self: center
</style>
