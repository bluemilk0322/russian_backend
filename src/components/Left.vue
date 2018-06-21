<template lang="pug">
  #left.card
    ul.list-group.list-group-flush
      li.list-group-item.text-center
        h4 後台管理系統
      li.list-group-item.user.text-center
        // .photo.rounded-circle
        .name {{ user }}
      li.list-group-item.lang.d-flex.justify-content-center
        .btn-group.btn-group-toggle.d-flex.justify-content-center.w-100(data-toggle="buttons")
          label.btn.btn-primary.w-100.active(@click.prevent="switchLanguage(`tw`)")
            input(type='radio', name='options', autocomplete='off', checked)
            | TW
          label.btn.btn-primary.w-100(@click.prevent="switchLanguage(`en`)")
            input(type='radio', name='options', autocomplete='off')
            | EN
          label.btn.btn-primary.w-100(@click.prevent="switchLanguage(`ru`)")
            input(type='radio', name='options', autocomplete='off')
            | RU
      router-link.nav-link.list-group-item(to="/navigation") 導覽列
      router-link.nav-link.list-group-item(to="/news") 最新消息
      router-link.nav-link.list-group-item(to="/banner") 跑馬燈
      router-link.nav-link.list-group-item(to="/member") 系所成員
      router-link.nav-link.list-group-item(to="/content") 文章
      router-link.nav-link.list-group-item(to="/video") 戲劇公演
      router-link.nav-link.list-group-item(to="/album") 活動花絮
      router-link.nav-link.list-group-item(to="/teachingExcellence") 計畫成果
      router-link.nav-link.list-group-item(to="/user") 帳號管理
      a.nav-link.list-group-item(href="", @click.prevent="logoutAction") 登出
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('login', ['user'])
  },
  methods: {
    ...mapActions('login', ['logoutAction']),
    async switchLanguage (language) {
      await this.$api.switchLanguage(language)

      const currentRoute = await this.$router.currentRoute.name
      const routeAction = await currentRoute + '/update'
      const routeApi = await this.$api[currentRoute]
      await this.$store.dispatch(routeAction, routeApi)
    }
  }
}
</script>

<style lang="sass">
#left
  width: 320px
  margin: 20px
  .user
    // height: 200px
    display: flex
    flex-direction: column
    justify-content: center
    // .photo
    //   margin: 0 auto
    //   height: 100px
    //   width: 100px
    //   background: url(https://scontent.ftpe8-2.fna.fbcdn.net/v/t31.0-8/620859_472817766072582_22556290_o.jpg?_nc_cat=0&_nc_eui2=AeEr0YHSxmeLSQ5Y23Fod4QajVAwjlvjUYrOVg1vh0fQCsG9Q2N0qAUg9k8O0WRr3vOmGGrnCJIwx8sbjBk2HIOS1hc6reXTgjQCZlj97IGzSg&oh=6901da3522820261a2c51a5cbaa0dcde&oe=5BAD1549) -15px 0px
    //   background-size: cover
</style>
