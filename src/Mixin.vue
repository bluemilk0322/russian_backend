<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    async getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
  }
}
</script>
