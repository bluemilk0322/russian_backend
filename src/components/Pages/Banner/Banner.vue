<template lang="pug">
#Carousel.card
  .card-header
    h1 Banner
  .card-body
    p {{ banners }}
    input.form-control(type='file', required='')
    .banner-images(v-viewer='{movable: false}')
      img(v-for='src in images', :src='src', :key='src')
    //- button(@click="show") SHOW
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      images: [
        'https://p2.bahamut.com.tw/S/2KU/27/bc33cee1faf9491d7de97c683fazlcj4.JPG',
        'https://p2.bahamut.com.tw/S/2KU/38/a933eb8015535107ec7a4342d4dzla24.JPG',
        'https://p2.bahamut.com.tw/S/2KU/09/5da63cece81a3c1b3989bd88300zl994.PNG',
        'https://p2.bahamut.com.tw/S/2KU/75/55faf384b85ea6373d5a88837f3zlb34.JPG'
      ]
    }
  },
  computed: {
    ...mapState({
      banners: state => state.banner
    })
  },
  methods: {
    show () {
      const viewer = this.$el.querySelector('.banner-images').$viewer
      viewer.show()
    }
  }
}
</script>
<style lang="sass" scoped>
#Carousel
</style>
