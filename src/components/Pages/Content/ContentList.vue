<template lang="pug">
#contentList.search.card
  .card-header
    h4 Content List
    input.form-control(v-model='search', type='text', placeholder="請輸入標題", aria-label="請輸入標題", aria-describedby='basic-addon2')
  .card-body
    ul.list-group
      li.list-group-item(v-for="contentItem in filterList", :key="contentItem.title")
        h5 {{ contentItem.title }}
        .btn-group
          button.btn.btn-primary(@click="edit(contentItem)") 編輯
          //- button.btn.btn-danger(@click="deleteContent(contentItem)") 刪除
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('content', {
      contentList: state => state.data
    }),
    filterList () {
      const titleList = Object.keys(this.contentList).filter(title => {
        return title.includes(this.search)
      })
      const itemList = titleList.map(title => {
        return {
          title: title,
          content: this.contentList[title][0]
        }
      })
      return itemList
    }
  },
  methods: {
    ...mapActions('content', ['update', 'edit']),
    async deleteContent (contentItem) {
      const key = await contentItem.title
      await this.$api.content.delete({ key })
      await this.update(this.$api.content)
    }
  },
  mounted () {
    this.$nextTick(async () => {
      await this.update(this.$api.content)
    })
  }
}
</script>
<style lang="sass" scoped>
#contentList
  height: 300px
  .list-group-item
    display: flex
    flex-direction: row
    justify-content: space-between
    h5
      align-self: center
</style>
