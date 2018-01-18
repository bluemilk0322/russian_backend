<template lang="pug">
#Carousel.card
  .card-header
    h1 Banner
  .card-body
    p {{ banners }}
    input.form-control(type='file', required='', multiple=true, @change="processFiles($event)")
    button(@click='uploadPics') 上傳
    .banner-images(v-viewer='{movable: false}')
      img(v-for='src in banners', :src='`http://192.168.88.204:3030` + src.path', :key='src.banner_id')
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { api } from '../../../api'

export default {
  data () {
    return {
      files: []
    }
  },
  computed: {
    ...mapState({
      banners: state => state.banner
    })
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    show () {
      const viewer = this.$el.querySelector('.banner-images').$viewer
      viewer.show()
    },
    uploadPics () {
      let self = this
      api.banner.create(this.files).then(response => {
        console.log(response)
        self.initData()
      })
    },
    processFiles (event) {
      this.files = []
      const files = event.target.files
      for (let index = 0; index < files.length; index++) {
        this.getBase64(files[index]).then(data => {
          this.files.push({uri: data})
        })
      }
    },
    getBase64 (file) {
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
<style lang="sass" scoped>
#Carousel
</style>
