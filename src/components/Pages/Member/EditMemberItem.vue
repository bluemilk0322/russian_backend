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
        input.form-control(type='text', v-model="editItem.teaching_lessons")
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
        img(:src="'http://59.127.194.172:3030' + editItem.image.path", v-if="editItem.image.path !== ''")
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
        button.btn.btn-primary(@click="save") 儲存
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    memberItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.memberItem),
      preview: {
        file: null,
        image: null
      }
    }
  },
  methods: {
    ...mapActions('member', ['update']),
    async save () {
      const self = this
      if (await this.preview.file !== null) {
        this.editItem.image = await this.getBase64(this.preview.file).then(data => data)
      }
      await this.$api.member.edit(this.editItem)
      await this.update(this.$api.member)
      // return new Promise((resolve, reject) => {
      //   if (self.preview.file !== null) {
      //     self.getBase64(self.preview.file).then(data => {resolve(data)});
      //   }
      //   else resolve();
      // })
      // .then(data => {
      //   if (data) self.editItem.image = {uri: data}
      //   return api.member.edit(self.editItem)
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
<style lang="sass" scoped>
.edit-member-item
  border: none
  .card-body
    form
      .form-group
</style>
