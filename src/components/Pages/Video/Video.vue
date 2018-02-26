<template lang="pug">
#video.card
  .card-header
    h1 戲劇公演
  .card-body
    AddVideo
    VideoList
</template>
<script>
import AddVideo from './AddVideo'
import VideoList from './VideoList'

export default {
  components: {
    AddVideo,
    VideoList
  }
}
</script>
