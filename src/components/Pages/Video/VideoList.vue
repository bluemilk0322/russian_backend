<template lang="pug">
#videoList.card
  .card-header
    h4 影片列表
  .card-body
    ul.list-group
      li.list-group-item(v-for="video in filterList")
        .top
          .title
            h4 {{ video.title }}
          .action
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#video` + video.video_id') 編輯
              button.btn.btn-danger(type='button', @click="deleteVideo(video.video_id)") 刪除
        .bottom.collapse(:id="`video` + video.video_id")
          EditVideo(:video="video")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { api } from '../../../api'
import EditVideo from './EditVideo'

export default {
  components: {
    EditVideo
  },
  computed: {
    ...mapState({
      videos: state => state.video.data
    }),
    filterList () {
      return this.videos
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    deleteVideo (video_id) {
      const self = this
      api.video.delete({ video_id }).then(response => {
        self.initData()
      })
    }
  }
}
</script>
<style lang="sass" scoped>
#videoList
  .top
    display: flex
    justify-content: space-between
</style>
