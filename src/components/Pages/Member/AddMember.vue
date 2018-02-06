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
        button.btn.btn-primary(@click.prevent="add") 送出
      .form-group(v-if="upload !== 'none'")
        ProgressBar(:status="upload")
</template>
<script>
import { mapActions } from 'vuex'
import ProgressBar from '../ProgressBar'

export default {
  components: {
    ProgressBar
  },
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
      },
      upload: 'none'
    }
  },
  methods: {
    ...mapActions('member', ['update']),
    async add () {
      this.upload = await 'uploading'
      if (await this.preview.file !== null) {
        this.newMember.uri = await this.getBase64(this.preview.file)
      }
      await this.$api.member.create(this.newMember)
      this.upload = await 'successed'
      await this.update(this.$api.member)
    },
    async processFiles (event) {
      const self = this
      this.upload = await 'none'
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
