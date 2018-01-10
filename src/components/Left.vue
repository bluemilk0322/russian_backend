<template lang="pug">
  #left
    //- .d-flex.justify-content-center
    //-   #photo.rounded-circle
    //- p#name.text-center Yue
    //- p#title.text-center Administrator
    .user
      .photo.rounded-circle
      .name USER
      .title ADMIN
    nav.nav.flex-column
      router-link.nav-link(to="/nav") Navigation 修改
      router-link.nav-link(to="/slider") Slider 修改
      router-link.nav-link(to="/carousel") Banner 修改
      router-link.nav-link(to="/member") Member 修改
      router-link.nav-link(to="/text") Content 修改
      router-link.nav-link(to="/admin") Admission 管理
</template>
<style lang="sass">
#left
  width: 300px
  padding: 20px
  min-height: 100vh
  .user
    height: 200px
    background: grey
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
