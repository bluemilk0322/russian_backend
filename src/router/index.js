import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../components/Pages/Nav/Nav.vue'
import Slider from '../components/Pages/Slider/Slider.vue'
import Carousel from '../components/Pages/Carousel/Carousel.vue'
import Member from '../components/Pages/Member/Member.vue'
import TextPage from '../components/Pages/Text/Text.vue'
import Admin from '../components/Pages/Admin/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/text',
      name: 'Text',
      component: TextPage
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '*',
      redirect: '/nav'
    }
  ]
})
