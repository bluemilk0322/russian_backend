<template lang="pug">
#addMember
  form
    .form-group
      label name
      input.form-control(type='text', v-model="newMember.name")
    .form-group
      label position
      input.form-control(type='text', v-model="newMember.position")
    .form-group
      label teaching_lessons
      input.form-control(type='text', v-model="newMember.teaching_lessons")
    .form-group
      label email
      input.form-control(type='text', v-model="newMember.email")
    .form-group
      label telephone
      input.form-control(type='text', v-model="newMember.telephone")
    .form-group
      label type
      select.form-control(type='text', v-model="newMember.type")
        option(value="Fulltime") Fulltime
        option(value="Parttime") Parttime
        option(value="Director") Director
        option(value="Administrative") Administrative
        option(value="Tutor") Tutor
    .form-group
      label image
      label.btn.btn-info.form-control
        input(style='display:none;', type='file', @change="processFiles($event)")
        | 上傳圖片
      label 預覽圖片
      .review(v-if="preview.image !== null")
        img(:src="preview.image")
      .none(v-else)
        p 尚未上傳圖片
    .form-group
      button.btn.btn-primary(@click="add") 送出
</template>
<script>
import { api } from '../../../api'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      newMember: {
        name: null,
        position: null,
        teaching_lessons: null,
        email: null,
        telephone: null,
        type: 'Fulltime',
        image: null
      },
      preview: {
        file: null,
        image: null
      }
    }
  },
  computed: {
    isUploaded () {
      // depreciated
      return false
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    add () {
      const self = this
      this.getBase64(this.preview.file).then(data => {
        self.newMember.image = {uri: data}
        console.log(self.newMember)
      }).then(() => {
        api.member.create(self.newMember).then(response => {
          console.log(response)
          self.initData()
        })
      })
    },
    processFiles (event) {
      const self = this
      const file = event.target.files[0]
      this.preview.file = file

      const reader = new FileReader()
      reader.onload = event => {
        self.preview.image = event.target.result
      }
      reader.readAsDataURL(file)
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
