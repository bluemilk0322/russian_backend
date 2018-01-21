import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '../components/Pages/Navigation/Navigation.vue'
import Slider from '../components/Pages/Slider/Slider.vue'
import News from '../components/Pages/News/News.vue'
import Banner from '../components/Pages/Banner/Banner.vue'
import Member from '../components/Pages/Member/Member.vue'
import Content from '../components/Pages/Content/Content.vue'
import Admission from '../components/Pages/Admission/Admission.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/news',
      name: News,
      component: News
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/admission',
      name: 'Admission',
      component: Admission
    },
    {
      path: '/*',
      redirect: '/navigation'
    }
  ]
})
