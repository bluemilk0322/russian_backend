<template lang="pug">
.progress
  .progress-bar(:class="styleClass", role='progressbar', :style='`width: ` + value + `%;`', :aria-valuenow='value', aria-valuemin='0', aria-valuemax='100') {{ text }}
</template>
<script>
export default {
  props: {
    status: String
  },
  computed: {
    styleClass () {
      switch (this.status) {
        case 'none':
          return []
          break
        case 'uploading':
          return ['progress-bar-striped', 'progress-bar-animated']
          break
        case 'successed':
          return ['bg-success']
          break
        default:
          return []
      }
    },
    text () {
      switch (this.status) {
        case 'none':
          return ''
          break
        case 'uploading':
          return '上傳中'
          break
        case 'successed':
          return '上傳成功'
          break
        default:
          return ''
      }
    },
    value () {
      switch (this.status) {
        case 'none':
          return 0
          break
        case 'uploading':
          return 100
          break
        case 'successed':
          return 100
          break
        default:
          return 0
      }
    }
  }
}
</script>
