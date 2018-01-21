<template lang="pug">
.edit-nav-item.card
  .card-body
    form
      .form-group
        label name
        .input-group
          input.form-control(type='text', v-model="editNavigation.name")
          .input-group-append
            button.btn.btn-outline-primary(type='button', @click="editNavigationName(editNavigation)") 修改
      .form-group
        SubItem
</template>
<script>
import SubItem from './SubItem'
import { api } from '../../../api'
import { mapActions } from 'vuex'

export default {
  props: {
    navigation: Object
  },
  components: {
    SubItem
  },
  data () {
    return {
      editNavigation: Object.assign({}, this.navigation)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    editNavigationName (editNavigation) {
      const self = this
      api.navigation.edit(editNavigation).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass">
.edit-nav-item
  border: none
</style>
