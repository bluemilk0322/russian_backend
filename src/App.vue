<template lang="pug">
  #app
    .logined(v-if="logined === 'logined'")
      Left
      Right
    .not-login(v-else)
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
    ...mapState({
      logined: state => state.login.session
    })
  },
  methods: {
    ...mapActions({
      initData: 'initData',
      loadStatus: 'loadStatus'
    })
  },
  mounted () {
    // let self = this.logined
    this.$nextTick(() => {
      this.loadStatus()
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


// GLOBALS
.card
  height: 100%
  .card-body
    overflow-y: scroll
</style>
