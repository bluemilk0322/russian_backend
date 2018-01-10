<template lang="pug">
  #left
    .user
      .photo.rounded-circle
      .name User
      .title Administrator
    nav.nav.flex-column
      router-link.nav-link(to="/navigation") Navigation 修改
      router-link.nav-link(to="/slider") Slider 修改
      router-link.nav-link(to="/banner") Banner 修改
      router-link.nav-link(to="/member") Member 修改
      router-link.nav-link(to="/content") Content 修改
      router-link.nav-link(to="/admission") Admission 管理
</template>
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
  a
    background: #eee
</style>
