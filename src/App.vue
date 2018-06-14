<template lang="pug">
  #app
    .logined(v-if="loginStatus")
      Left
      Right
    .not-login(v-if="!loginStatus")
      Login

</template>

<script>
import { mapActions, mapState } from 'vuex'
import Left from './components/Left'
import Right from './components/Right'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Left,
    Right,
    Login
  },
  computed: {
    ...mapState('login', ['loginStatus'])
  },
  methods: {
    ...mapActions('login', ['getStatus'])
  },
  mounted () {
    // let self = this.logined
    this.$nextTick(() => {
      this.getStatus()
    })
  }
}
</script>

<style lang="sass">
#app
  height: 100vh
  width: 100vw
  .logined
    display: flex
  .not-login
    height: 100%
    display: flex
    // flex-direction: row
    justify-content: center
    align-items: center


// GLOBALS
.card
  height: 100%
  .card-body
    overflow-y: scroll
</style>
