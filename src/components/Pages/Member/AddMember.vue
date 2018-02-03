<template lang="pug">
#addMember.add-member.card
  .card-header
    h4 新增成員
  .card-body
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
        uri: null
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
    ...mapActions('member', ['update']),
    async add () {
      const self = this
      if (await this.preview.file !== null) {
        this.newMember.uri = await this.getBase64(this.preview.file).then(data => data)
      }
      await this.$api.member.create(this.newMember)
      await this.update(this.$api.member)
      // return new Promise((resolve, reject) => {
      //   if (self.preview.file !== null) {
      //     self.getBase64(self.preview.file).then(data => {resolve(data)});
      //   }
      //   else resolve();
      // })
      // .then(data => {
      //   if (data) self.newMember.uri = data
      //   return api.member.create(self.newMember)
      // })
      // .then(response => {
      //   console.log(response)
      //   self.initData()
      // })
      // .catch(err => {
      //   console.error(err)
      // })
    },
    async processFiles (event) {
      const self = this
      const file = await event.target.files[0]
      this.preview.file = await file

      const reader = await new FileReader()
      reader.onload = async event => {
        self.preview.image = await event.target.result
      }
      await reader.readAsDataURL(file)
    }
  }
}
</script>
