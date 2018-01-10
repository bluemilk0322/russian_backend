<template lang="pug">
  #app
    Left
    Right
</template>

<script>
import { mapActions } from 'vuex'
import Left from './components/Left'
import Right from './components/Right'

export default {
  name: 'app',
  components: {
    Left,
    Right
  },
  methods: {
    ...mapActions({
      apiTest: 'apiTest'
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.apiTest()
    })
  }
}
</script>

<style lang="sass">
#app
  display: flex
  min-height: 100vh
  min-width: 100vw


// GLOBALS
.card
  height: 100%
  .card-body
    overflow-y: scroll
</style>
