import axios from 'axios'
import Method from './Method'

import Navigation from './Navigation'
import NavigationItem from './NavigationItem'
import News from './News'

class Api {
  constructor (root) {
    this.root = root
  }

  set language (language) {
    switch (language) {
      case 'tw':
        this.root = 'tw'
        break
      case 'en':
        this.root = 'en'
        break
      case 'ru':
        this.root = 'ru'
        break
      default:
        this.root = 'tw'
    }
  }

  get navigation () {
    return new Navigation(this.root)
  }

  get navigationItem () {
    return new NavigationItem(this.root)
  }

  get news () {
    return new News(this.root)
  }
}

const root = 'http://59.127.194.172:3030/api/'

const links = {
  navigation: root + 'navigation/',
  navigationItem: root + 'navigation-item/',
  slider: root + 'slider/',
  news: root + 'news/',
  carousel: root + 'carousel/',
  member: root + 'member/',
  content: root + 'content/',
  admission: root + 'admission/',
  banner: root + 'banner/',
  winning: root + 'winning/',
  news: root + 'news/',
  file: root + 'file/',
  user: root + 'user/',
  single_file_upload: root + 'single_file_upload/',
  video: root + 'video/',
  album: root + 'album/',
  event_highlight: root + 'event-highlight/'
}

export const api = {
  navigation: {
    get () {
      return axios(Method.get(links.navigation)).then(response => {
        console.log('navigation', 'get', response)
        return response.data
      })
    },
    search ({ navigationId }) {
      const requestLink = links.navigation + '/' + navigationId
      return axios(Method.get(requestLink)).then(response => {
        console.log('navigation', 'search', response)
        return response.data
      })
    },
    create ({ name, order }) {
      return axios(Method.post(links.navigation, { name, order })).then(response => {
        console.log('navigation', 'create', response)
        return response
      })
    },
    edit ({ navigation_id, name, order }) {
      const requestLink = links.navigation + navigation_id
      return axios(Method.patch(requestLink, { navigation_id, name, order })).then(response => {
        console.log('navigation', 'edit', response)
        return response
      })
    },
    delete ({ navigation_id }) {
      const requestLink = links.navigation + navigation_id
      console.log(requestLink)
      return axios(Method.delete(requestLink)).then(response => {
        console.log('navigation', 'delete', response)
        return response
      })
    }
  },
  navigationItem: {
    get () {

    },
    create ({ navigation_id, name, content_key, order }) {
      console.log({ navigation_id, name, content_key })
      return axios(Method.post(links.navigationItem, { navigation_id, name, content_key, order })).then(response => {
        console.log('navigationItem', 'create', response)
        return response
      })
    },
    edit ({ navigation_item_id, navigation_id, name, content_key , order }) {
      const requestLink = links.navigationItem + navigation_item_id
      return axios(Method.patch(requestLink, { navigation_item_id, navigation_id, name, content_key , order })).then(response => {
        return response
      })
    },
    delete ({ navigation_item_id }) {
      const requestLink = links.navigationItem + navigation_item_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  slider: {
    get () {
      return axios(Method.get(links.slider)).then(response => {
        return response.data
      })
    }
  },
  news: {
    get () {
      return axios(Method.get(links.news)).then(response => {
        return response.data.data
      })
    },
    create ({ title, type, content }) {
      return axios(Method.post(links.news, { title, type, content })).then(response => {
        return response.data
      })
    },
    edit ({ news_id, title, type, content }) {
      const requestLink = links.news + news_id
      return axios(Method.patch(requestLink, { title, type, content })).then(response => {
        return response.data
      })
    },
    delete ({ news_id }) {
      const requestLink = links.news + news_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  banner: {
    get () {
      return axios(Method.get(links.banner)).then(response => {
        console.log('banner', 'get', response)
        return response.data
      })
    },
    create (files) {
      return axios(Method.post(links.banner, files)).then(response => {
        console.log('banner', 'create', response)
        return response
      })
      // return axios(Method.patch(links.banner))
    }
  },
  member: {
    get () {
      return axios(Method.get(links.member)).then(response => {
        console.log('member', 'get', response)
        return response.data
      })
    },
    create (data) {
      return axios(Method.post(links.member, data)).then(response => {
        return response
      })
    },
    edit (data) {
      const requestLink = links.member + data.member_id
      console.log(Method.patch(requestLink, data))
      return axios(Method.patch(requestLink, data)).then(response => {
        return response
      })
    },
    delete (memberId) {
      const requestLink = links.member + memberId
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  content: {
    get () {
      return axios(Method.get(links.content)).then(response => {
        return response.data
      })
    },
    edit ({ title, content }) {
      const data = {
        key: title,
        values: Array(content)
      }
      return axios(Method.post(links.content, data)).then(response => {
        console.log(response)
      })
    }
  },
  admission: {
    get () {
      return axios(Method.get(links.admission)).then(response => {
        return response.data
      })
    }
  },
  single_file_upload: {
    link: links.single_file_upload,
    create (file) {
      const data = new FormData()
      data.append('upload', file)
      return axios(Method.post(links.single_file_upload, data)).then(response => {
        console.log('single_file_upload', 'create', response)
        return response
      })
    }
  },
  video: {
    get () {
      return axios(Method.get(links.video)).then(response => {
        console.log('video', 'get', response)
        return response.data
      })
    },
    create ({ title, content, image, link }) {
      return axios(Method.post(links.video, { title, content, image, link })).then(response => {
        return response
      })
    },
    edit ({ video_id, title, content, image, link }) {
      const requestLink = links.video + video_id
      return axios(Method.patch(requestLink, { title, content, image, link })).then(response => {
        return response
      })
    },
    delete ({ video_id }) {
      const requestLink = links.video + video_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  album: {
    get () {
      return axios(Method.get(links.album)).then(response => {
        return response.data
      })
    },
    create ({ title, content }) {
      return axios(Method.post(links.album, { title, content })).then(response => {
        return response
      })
    },
    edit ({ album_id, title, content }) {
      const requestLink = links.album + album_id
      return axios(Method.patch(requestLink, { title, content })).then(response => {
        return response
      })
    },
    delete ({ album_id }) {
      const requestLink = links.album + album_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  event_highlight: {
    get () {

    },
    create (items) {
      return axios(Method.post(links.event_highlight, items)).then(response => {
        return response
      })
    },
    edit () {

    },
    delete ({ event_highlight_id }) {
      const requestLink = links.event_highlight + event_highlight_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  }
}
