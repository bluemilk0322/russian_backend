<template lang="pug">
.edit-slider-item.card
  .card-body
    form
      .form-group
        label name
        input.form-control(type='text', v-model="editItem.name")
      .form-group
        button.btn.btn-outline-primary(type='button') 修改
</template>
<script>
export default {
  props: {
    sliderItem: Object
  },
  data () {
    return {
      editItem: Object.assign({}, this.sliderItem)
    }
  }
}
</script>
<style lang="sass" scoped>
.edit-slider-item
  border: none
  .card-body
    form
      .form-group
          margin: 0 0 20px 0
</style>
