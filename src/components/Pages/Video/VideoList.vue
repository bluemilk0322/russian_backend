<template lang="pug">
#videoList.card
  .card-header
    h4 影片列表
  .card-body
    ul.list-group
      li.list-group-item(v-for="video in filterList", :key="video.video_id")
        .top
          .title
            h4 {{ video.title }}
          .action
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#video` + video.video_id') 編輯
              button.btn.btn-danger(type='button', @click.prevent="deleteVideo(video.video_id)") 刪除
        .bottom.collapse(:id="`video` + video.video_id")
          EditVideo(:video="video")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import EditVideo from './EditVideo'

export default {
  components: {
    EditVideo
  },
  computed: {
    ...mapState('video', {
      videos: state => state.data
    }),
    filterList () {
      return this.videos
    }
  },
  methods: {
    ...mapActions('video', ['update']),
    async deleteVideo (video_id) {
      await this.$api.video.delete({ video_id })
      await this.update(this.$api.video)
    }
  },
  mounted () {
    this.$nextTick(async () => {
      await this.update(this.$api.video)
    })
  }
}
</script>
<style lang="sass" scoped>
#videoList
  .top
    display: flex
    justify-content: space-between
</style>
