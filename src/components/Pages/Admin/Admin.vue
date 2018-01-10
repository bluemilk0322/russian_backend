<template lang="pug">
#Admin.card
  .card-header
    h1 Admin
  .card-body
    p {{ admissions }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      admissions: state => state.admission.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Admin
</style>
