<template lang="pug">
#Slider.card
  .card-header
    h1 Slider
  .card-body
    p {{ sliders }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      sliders: state => state.slider.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Slider
</style>
