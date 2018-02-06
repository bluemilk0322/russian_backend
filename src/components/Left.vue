<template lang="pug">
  #left
    .user
      .photo.rounded-circle
      .name User
      .title Administrator
    .lang
      button(@click.prevent="switchLanguage(`tw`)") TW
      button(@click.prevent="switchLanguage(`en`)") EN
      button(@click.prevent="switchLanguage(`ru`)") RU
    nav.nav.flex-column
      router-link.nav-link(to="/navigation") Navigation 修改
      //- router-link.nav-link(to="/slider") Slider 修改
      router-link.nav-link(to="/news") News 修改
      router-link.nav-link(to="/banner") Banner 修改
      router-link.nav-link(to="/member") Member 修改
      router-link.nav-link(to="/content") Content 修改
      router-link.nav-link(to="/user") User
      router-link.nav-link(to="/video") Video
      router-link.nav-link(to="/album") Album
      router-link.nav-link(to="/teachingExcellence") TeachingExcellence
      a.nav-link(href="", @click.prevent="logout") 登出
</template>
<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      state: state => state
    })
  },
  methods: {
    ...mapActions({
      logout: 'logoutAction'
    })
  },
  methods: {
    async switchLanguage (language) {
      await this.$api.switchLanguage(language)

      const currentRoute = await this.$router.currentRoute.name
      const routeAction = await currentRoute + '/update'
      const routeApi = await this.$api[currentRoute]
      await this.$store.dispatch(routeAction, routeApi)
    },
    async logout () {

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
      background: url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/12465819_1040206906001496_8984799855126950684_o.jpg?oh=a9beae18cc84e37d06b831cbdd58e512&oe=5AB34E0B) 0px -350px
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
