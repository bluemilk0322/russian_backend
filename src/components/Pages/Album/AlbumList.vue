<template lang="pug">
#albumList
  ul.list-group
    li.list-group-item(v-for="album in albums")
      .top
        h4.title {{ album.title }}
        .actions
          .btn-group(role='group', aria-label='actions')
            button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#` + album.title') 編輯
            button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-album", @click="deleteAlbum(album.album_id)") 刪除
      .bottom.collapse(:id="album.title")
        EditAlbum(:album="album")
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { api } from '../../../api'
import EditAlbum from './EditAlbum'

export default {
  components: {
    EditAlbum
  },
  computed: {
    ...mapState({
      albums: state => state.album.data
    })
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    deleteAlbum (album_id) {
      const self = this
      api.album.delete({ album_id }).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.list-group-item
  .top
    display: flex
    justify-content: space-between
</style>
