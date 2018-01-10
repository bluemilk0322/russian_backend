<template lang="pug">
#Slider.card
  .card-header
    h1 Slider
  .card-body
    p {{ sliders }}
    ul.list-group
      li.list-group-item(v-for="slider in sliders")
        .top
          h4.title {{ slider.name }}
          .actions
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#slider` + slider.slider_id') 編輯
              //- button.btn.btn-danger(type='button', data-toggle="modal" data-target="#delete-slider") 刪除
        .bottom.collapse(:id="`slider` + slider.slider")
          EditSlider(:sliderItem="slider")
</template>
<script>
import EditSlider from './EditSliderItem'
import { mapState } from 'vuex'

export default {
  components: {
    EditSlider
  },
  computed: {
    ...mapState({
      sliders: state => state.slider.data
    })
  }
}
</script>
<style lang="sass" scoped>
#Slider
</style>
