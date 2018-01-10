<template lang="pug">
  #right
    router-view
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      // testData: null
    }
  },
  computed: {
    ...mapState({
      testData: state => state.staff
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.apiTest()
    })
  },
  methods: {
    ...mapActions({
      apiTest: 'apiTest'
    })
  }
}
</script>

<style lang="sass">
#right
  width: 100%
  height: 100vh
  overflow-y: scroll
  padding: 20px 20px 20px 0

</style>
