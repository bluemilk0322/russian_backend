<template lang="pug">
  #left.col-sm-4
    .d-flex.justify-content-center
      #photo.rounded-circle
    p#name.text-center Yue
    p#title.text-center Administrator
    nav.nav.flex-column
      a.nav-link.active(href='#') Nav 修改
      a.nav-link(href='#') Slider 修改
      a.nav-link(href='#') Carousel 修改
      a.nav-link(href='#') Member 修改
      a.nav-link(href='#') Text 修改
      a.nav-link(href='#') Admin 管理
</template>
<style lang="sass">
#left
  min-height: 100vh
  background: #ccc
  #photo
    margin: 20px
    height: 200px
    width: 200px
    background: url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/12465819_1040206906001496_8984799855126950684_o.jpg?oh=a9beae18cc84e37d06b831cbdd58e512&oe=5AB34E0B) 0px -350px
    background-size: 95%
     background-repeat: no-repeat
  #name
    font-size: 40px
    margin: 5px
  #title
    font-size: 30px
  a
    background: #eee
</style>
