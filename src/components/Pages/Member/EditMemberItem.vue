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
        label image
        label.btn.btn-info.form-control
          input(style='display:none;', type='file', @change="processFiles($event)")
          | 上傳圖片
        label 預覽圖片
        .review(v-if="editItem.image.path !== ''")
          img(:src="'http://192.168.88.204:3030' + editItem.image.path")
        .none(v-else)
          p 尚未上傳圖片
      .form-group
        button.btn.btn-primary(@click="save") 儲存
</template>
<script>
import { api } from '../../../api'
import { mapActions } from 'vuex'

export default {
  props: {
    memberItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.memberItem)
    }
  },
  methods: {
    ...mapActions({
      initData: 'initData'
    }),
    save () {
      const self = this
      api.member.edit(this.editItem).then(response => {
        self.initData()
      })
    },
    processFiles (event) {
      const self = this
      const file = event.target.files[0]
      this.getBase64(file).then(data => {
        api.banner.create(Array({uri: data})).then(response => {
          self.editItem.image = response.data[0].file
        })
      })
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
.edit-member-item
  border: none
  .card-body
    form
      .form-group
</style>
