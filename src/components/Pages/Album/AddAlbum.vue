<template lang="pug">
#addAlbum.card
  .card-header
    h4 Create Album
  .card-body
    form
      .form-group
        label title
        input.form-control(v-model="newAlbum.title")
      .form-group
        label content
        input.form-control(v-model="newAlbum.content")
      .form-group
        button.btn.btn-primary(@click="add") send
</template>
<script>
import { mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      newAlbum: {
        title: null,
        content: null
      }
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const self = this
      api.album.create(this.newAlbum).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
