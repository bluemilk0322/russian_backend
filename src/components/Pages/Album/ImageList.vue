<template lang="pug">
.image-list.card
  .card-header
    label.btn.btn-info.form-control
      input(style='display:none;', multiple=true, type='file', @change="add($event)")
      | add picture
  .card-body
    .pic(v-for="(imageData, index) in editImages")
      img(:src="parsePath(imageData)", width="300px")
      button.btn.btn-danger(@click="deleteImage(imageData, index)") delete
</template>
<script>
import { mapActions, mapState } from "vuex"
import { api } from '../../../api'

export default {
  props: {
    images: Array,
    album_id: Number
  },
  data () {
    return {
      editImages: this.images.slice(0)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add (event) {
      const self = this
      const files = event.target.files
      for (let index = 0; index < files.length; index++) {
        this.getBase64(files[index]).then(data => {
          const imageData = {
            album_id: self.album_id,
            uri: data
          }
          self.editImages.push(imageData)
          self.$emit('addImage', imageData)
        })
      }
      // const file = files[0]
      // this.getBase64(file).then(data => {
      //   const items = [
      //     {
      //       album_id: 1,
      //       uri: data
      //     }
      //   ]
      //   api.event_highlight.create(items)
      // })
      // let items = []
      // console.log(items, typeof items)
      // for (let index = 0; index < files.length; index++) {
      //   self.getBase64(files[index]).then(data => {
      //     const image = {
      //       album_id: self.album.album_id,
      //       uri: data,
      //       description: 'test'
      //     }
      //     items.push(image)
      //   })
      // }
      // console.log(items, typeof items)
      // return new Promise((resolve, reject) => {
      //   for (let index = 0; index < files.length; index++) {
      //     self.getBase64(files[index]).then(data => {
      //       const image = {
      //         album_id: self.album.album_id,
      //         uri: data,
      //         description: 'test'
      //       }
      //       items.push(image)
      //     })
      //   }
      //   return resolve(items)
      // })
      // .then(items => {
      //   if (items) {
      //     console.log(items)
      //     return api.event_highlight.create(items)
      //   }
      // })
      // .then(response => {
      //   console.log(response)
      //   self.initData()
      // })
      // .catch(err => {
      //   console.error(err)
      // })
    },
    deleteImage (imageData, index) {
      this.editImages.splice(index, 1)
      this.$emit('deleteImage', imageData)
    },
    parsePath (imageData) {
      if (imageData.path) {
        return `http://192.168.88.204:3030` + imageData.path
      }
      else if (imageData.uri) {
        return imageData.uri
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.pic
  position: relative
  button
    position: absolute
    top: 50%
</style>
