<template lang="pug">
  #left
    .user
      .photo.rounded-circle
      .name {{ user }}
    .lang
      button(@click.prevent="switchLanguage(`tw`)") TW
      button(@click.prevent="switchLanguage(`en`)") EN
      button(@click.prevent="switchLanguage(`ru`)") RU
    nav.nav.flex-column
      router-link.nav-link(to="/navigation") 導覽列
      router-link.nav-link(to="/news") 最新消息
      router-link.nav-link(to="/banner") 跑馬燈
      router-link.nav-link(to="/member") 系所成員
      router-link.nav-link(to="/content") 文章
      router-link.nav-link(to="/video") 戲劇公演
      router-link.nav-link(to="/album") 活動花絮
      router-link.nav-link(to="/teachingExcellence") 計畫成果
      router-link.nav-link(to="/user") 帳號管理
      a.nav-link(href="", @click.prevent="logoutAction") 登出
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
  width: 300px
  padding: 20px
  min-height: 100vh
  .user
    height: 200px
    background: #dddfe2
    padding: 10px
    display: flex
    flex-direction: column
    justify-content: center
    .photo
      margin: 0 auto
      height: 100px
      width: 100px
      background: url(https://scontent.ftpe8-2.fna.fbcdn.net/v/t31.0-8/620859_472817766072582_22556290_o.jpg?_nc_cat=0&_nc_eui2=AeEr0YHSxmeLSQ5Y23Fod4QajVAwjlvjUYrOVg1vh0fQCsG9Q2N0qAUg9k8O0WRr3vOmGGrnCJIwx8sbjBk2HIOS1hc6reXTgjQCZlj97IGzSg&oh=6901da3522820261a2c51a5cbaa0dcde&oe=5BAD1549) -15px 0px
      background-size: cover
    .name
      text-align: center
    .title
      text-align: center
  .lang
    display: flex
    button
      flex-grow: 1
      border: none
      background: #777777
  .nav-link
    // text-decoration: none
    background: #eee
</style>
