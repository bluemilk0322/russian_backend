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
        button.form-control.btn.btn-primary(@click.prevent='uploadPics') 上傳
        ProgressBar(v-if="upload !== 'none'", :status="upload")
    .card
      .card-header
        h4 已上傳圖片
      .card-body
        .banner-images(v-viewer='{movable: false}')
          img(v-for='src in banners', :src='$api.rootLink + src.path', :key='src.banner_id', width="480", height="360")
</template>
<script>
import { mapState, mapActions } from 'vuex'
import ProgressBar from '../ProgressBar.vue'

export default {
  components: {
    ProgressBar
  },
  data () {
    return {
      files: [],
      upload: 'none'
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
      this.upload = await 'uploading'
      await this.$api.banner.create(this.files)
      this.upload = await 'successed'
      await this.update(this.$api.banner)
    },
    async processFiles (event) {
      this.upload = await 'none'
      this.files = await []
      const files = await event.target.files
      for (let index = 0; index < files.length; index++) {
        const file = await files[index]
        const name = await file.name
        const uri = await this.getBase64(file)
        this.files.push(await { name, uri })
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
