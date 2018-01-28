<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    testMixin () {
      console.log('testMixin')
    }
  }
}
</script>
