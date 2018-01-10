<template lang="pug">
#Nav.card
  .card-header
    h1 Navigation
  .card-body
    .card.add
      h5.card-header 新增
      .card-body
        .input-group
          input.form-control(type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
          .input-group-append
            button.btn.btn-outline-success(type='button') 新增
    ul.list-group
      li.list-group-item(v-for="navItem in navigation.data")
        .top
          h4.title {{ navItem.name }}
          .actions
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#` + navItem.name') 編輯
              button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-nav") 刪除
        .bottom.collapse(:id="navItem.name")
          EditNavItem(:navItem="navItem")
  DeleteModal(:navigation_id="1", :navigation_item_id="1")
  //- EditModal(v-bind="editProps")
</template>
<script>
import { mapState } from 'vuex'
import DeleteModal from './DeleteModal'
import EditNavItem from './EditNavItem'

export default {
  data () {
    return {
      editProps: {
        navigation_id: 0,
        name: '',
        created_on: '',
        modified_on: '',
        subItems: []
      }
    }
  },
  components: {
    DeleteModal,
    EditNavItem
  },
  computed: {
    ...mapState({
      navigation: state => state.navigation
    })
  },
  methods: {
    EditModalProps (navItem) {
      this.editProps = navItem
    }
  }
}
</script>
<style lang="sass" scoped>
#Nav
  .card-body
    .add
      margin: 0 0 10px 0
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
