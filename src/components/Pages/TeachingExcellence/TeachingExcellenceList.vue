<template lang="pug">
#teachingExcellenceList.card
  .card-header
    h3 列表
  .card-body
    ul.list-group
      li.list-group-item.year(v-for="year in yearList", :key="year")
        h3 {{ year }} 學年
        ul.list-group
          li.list-group-item.items(v-for="item in listByYear(year)", :key="item.teaching_excellence_id")
            h5 {{ item.title }}
            .btn-group
              button.btn.btn-primary(@click.prevent="editItem(item)") 編輯
              button.btn.btn-danger(@click.prevent="deleteItem(item)") 刪除
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('teachingExcellence', {
      teachingExcellenceList: state => state.data
    }),
    yearList () {
      const yearObjects = _.uniqBy(this.teachingExcellenceList, 'year')
      const yearList = yearObjects.map(object => object.year)
      return yearList
    }
  },
  methods: {
    ...mapActions('teachingExcellence', ['update', 'edit']),
    async editItem (item) {
      const teaching_excellence_id = await item.teaching_excellence_id
      const title = await item.title
      const year = await item.year
      const content = await item.content
      await this.edit({ teaching_excellence_id, title, year, content })
    },
    async deleteItem (item) {
      const teaching_excellence_id = await item.teaching_excellence_id
      await this.$api.teachingExcellence.delete({ teaching_excellence_id })
      await this.update(this.$api.teachingExcellence)
    },
    listByYear (year) {
      return this.teachingExcellenceList.filter(object => object.year === year)
    }
  },
  beforeMount () {
    this.update(this.$api.teachingExcellence)
  }
}
</script>
<style lang="sass" scoped>
.list-group-item.items
  display: flex
  flex-direction: row
  justify-content: space-between
  h5
    align-self: center
</style>
