<template lang="pug">
#Carousel.card
  .card-header
    h1 Banner
  .card-body
    p {{ banners }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      banners: state => state.banner
    })
  }
}
</script>
<style lang="sass" scoped>
#Carousel
</style>
