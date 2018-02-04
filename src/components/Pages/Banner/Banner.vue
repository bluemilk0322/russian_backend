<template lang="pug">
#Carousel.card
  .card-header
    h1 Banner
  .card-body
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
          img(v-for='src in banners', :src='$api.rootLink + src.path', :key='src.banner_id', width="480", height="360")
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      files: []
    }
  },
  computed: {
    ...mapState('banner', {
      banners: state => state.data
    })
  },
  methods: {
    ...mapActions('banner', ['update']),
    async show () {
      const viewer = await this.$el.querySelector('.banner-images').$viewer
      await viewer.show()
    },
    async uploadPics () {
      this.$api.banner.create(this.files)
      this.update(this.$api.banner)
    },
    async processFiles (event) {
      this.files = await []
      const files = await event.target.files
      for (let index = 0; index < files.length; index++) {
        const file = await files[index]
        const filename = await file.name
        this.getBase64(file).then(async data => {
          this.files.push({name: filename, uri: await data})
        })
      }
    }
  },
  mounted () {
    this.$nextTick()
      .then(async () => {
        await this.update(this.$api.banner)
      })
  }
}
</script>
<style lang="sass" scoped>
#Carousel
</style>
