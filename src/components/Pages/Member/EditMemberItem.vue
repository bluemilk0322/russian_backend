<template lang="pug">
.edit-member-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editItem.name")
      .form-group
        label position
        input.form-control(type='text', v-model="editItem.position")
      .form-group
        label teaching_lessons
        textarea(:id="editorId")
        //- input.form-control(type='text', v-model="editItem.teaching_lessons")
      .form-group
        label email
        input.form-control(type='text', v-model="editItem.email")
      .form-group
        label telephone
        input.form-control(type='text', v-model="editItem.telephone")
      .form-group
        label type
        select.form-control(type='text', v-model="editItem.type")
          option(value="Fulltime") Fulltime
          option(value="Parttime") Parttime
          option(value="Director") Director
          option(value="Administrative") Administrative
          option(value="Tutor") Tutor
      .form-group
        label original image
        img(:src="$api.rootLink + editItem.image.path", v-if="editItem.image.path !== ''")
        p(v-else) 無圖片
      .form-group
        label edit image
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', @change="processFiles($event)")
          | 修改圖片
        label 預覽圖片
        img(:src="preview.image", v-if="preview.image !== null")
        p(v-else) 尚未上傳圖片
      .form-group
        button.btn.btn-primary(@click.prevent="save") 儲存
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
  props: {
    memberItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.memberItem),
      preview: {
        file: null,
        image: null
      },
      upload: 'none',
      editorId: `editMemberTeachingeLessons` + this.memberItem.member_id
    }
  },
  methods: {
    ...mapActions('member', ['update']),
    async save () {
      this.upload = await 'uploading'
      if (await this.preview.file !== null) {
        this.editItem.image = await this.getBase64(this.preview.file).then(data => data)
      }
      this.editItem.teaching_lessons = await this.editorElement.getData()
      await this.$api.member.edit(this.editItem)
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
  },
  mounted() {
    this.$nextTick(async () => {
      const editor = await document.getElementById(this.editorId)
      this.editorElement = await CKEDITOR.replace(editor, {
        filebrowserUploadUrl: await this.$api.singleFileUpload.fullLink,
        height: await 50
      })
      this.editorElement.setData(this.memberItem.teaching_lessons)
    })
  }
}
</script>
<style lang="sass" scoped>
.edit-member-item
  border: none
  .card-body
    form
      .form-group
</style>
