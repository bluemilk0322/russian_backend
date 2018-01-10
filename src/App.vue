<template lang="pug">
  #app
    Left
    Right
</template>

<script>
import Left from './components/Left'
import Right from './components/Right'

export default {
  name: 'app',
  components: {
    Left,
    Right
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
