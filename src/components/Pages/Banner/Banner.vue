<template lang="pug">
#Carousel.card
  .card-header
    h1 Banner
  .card-body
    //- p {{ banners }}
    .card.text-center
      .card-header
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', multiple=true, @change="processFiles($event)")
          | 選擇圖片
      .card-body
        h4(v-if="files.length === 0") 尚未選擇檔案
        .pics(v-else)
          .file(v-for="file in files") {{ file.name }}
      .card-footer
        button.form-control.btn.btn-primary(@click='uploadPics') 上傳
    .card
      .card-header
        h4 已上傳圖片
      .card-body
        .banner-images(v-viewer='{movable: false}')
          img(v-for='src in banners', :src='`http://59.127.194.172:3030` + src.path', :key='src.banner_id', width="480", height="360")
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
        const file = files[index]
        const filename = file.name
        this.getBase64(file).then(data => {
          this.files.push({name: filename, uri: data})
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
