<template lang="pug">
#newsList.card
  .card-header
    h4 列表
    input.form-control(v-model="search", placeholder="請輸入關鍵字")
  .card-body
    ul.list-group
      li.list-group-item(v-for="(news, index) in filterList", :key="news.news_id")
        .top
          .title
            h4 {{ news.title }}
          .action
            .btn-group(role='group', aria-label='actions')
              button.btn.btn-primary(type='button', data-toggle='collapse', :data-target='`#news` + news.news_id') 編輯
              button.btn.btn-danger(type='button', @click.prevent="deleteNews(news)") 刪除
        .bottom.collapse(:id="`news` + news.news_id")
          EditNews(:news="news")
</template>
<script>
import { mapActions, mapState } from "vuex"
import EditNews from './EditNews'

export default {
  components: {
    EditNews
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState('news', {
      newsList: state => state.data
    }),
    filterList () {
      if (this.newsList.length !== 0) {
        const sortedList = this.newsList.slice().sort((news1, news2) => {
          return new Date(news2.created_on) - new Date(news1.created_on)
        })
        return sortedList.filter(news => {
          return news.title.includes(this.search)
        })
      }
    }
  },
  methods: {
    ...mapActions('news', ['update']),
    async deleteNews (news) {
      await this.$api.news.delete(news)
      await this.update(this.$api.news)
    }
  },
  mounted () {
    this.$nextTick()
      .then(async () => {
        await this.update(this.$api.news)
      })
  }
}
</script>
<style lang="sass">
#newsList
  li
    display: flex
    flex-direction: column
    .top
      display: flex
      justify-content: space-between
</style>
