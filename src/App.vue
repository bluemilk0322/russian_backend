<template lang="pug">
  #app.container
    .row
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
  min-height: 100vh
  min-width: 100vw
</style>
