import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '../components/Pages/Navigation/Navigation.vue'
import Slider from '../components/Pages/Slider/Slider.vue'
import News from '../components/Pages/News/News.vue'
import Banner from '../components/Pages/Banner/Banner.vue'
import Member from '../components/Pages/Member/Member.vue'
import Content from '../components/Pages/Content/Content.vue'
import Admission from '../components/Pages/Admission/Admission.vue'
import Video from '../components/Pages/Video/Video.vue'
import Album from '../components/Pages/Album/Album.vue'
import User from '../components/Pages/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/slider',
      name: 'slider',
      component: Slider
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/banner',
      name: 'banner',
      component: Banner
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/admission',
      name: 'admission',
      component: Admission
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/*',
      redirect: '/navigation'
    }
  ]
})
