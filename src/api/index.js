import axios from 'axios'

const root = 'http://192.168.88.204:3030/api/'

const link = {
  navigation: root + 'navigation/',
  navigationItem: 'navigation-item/',
  slider: root + 'slider/',
  carousel: root + 'carousel/',
  member: root + 'member/',
  content: root + 'content/',
  admission: root + 'admission/',
  banner: root + 'banner/',
  winning: root + 'winning/',
  news: root + 'news/',
  file: root + 'file/',
  user: root + 'user/',
  single_file_upload: root + 'single_file_upload/'
}

class Method {
  static get (link) {
    return {
      method: 'get',
      url: link
    }
  }
  static post (link, data) {
    return {
      method: 'post',
      url: link,
      data: data
    }
  }
  static delete (link) {
    return {
      method: 'delete',
      url: link
    }
  }
  static patch (link, data) {
    return {
      method: 'patch',
      url: link,
      data: data
    }
  }
}

export const api = {
  navigation: {
    get () {
      return axios(Method.get(link.navigation)).then(response => {
        console.log('navigation', 'get', response)
        return response.data
      })
    },
    search ({ navigationId }) {
      const requestLink = link.navigation + '/' + navigationId
      return axios(Method.get(requestLink)).then(response => {
        console.log('navigation', 'search', response)
        return response.data
      })
    },
    create ({ name }) {
      const data = {
        name: name
      }
      return axios(Method.post(link.navigation, data)).then(response => {
        console.log('navigation', 'create', response)
        return response
      })
    },
    edit (data) {
      const requestLink = link.navigation + data.navigation_id
      return axios(Method.patch(requestLink, data)).then(response => {
        console.log('navigation', 'edit', response)
        return response
      })
    },
    delete ({ navigationId }) {
      const requestLink = link.navigation + navigationId
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
    create ({ navigationId, subItem }) {

    },
    edit () {

    },
    delete () {

    }
  },
  slider: {
    get () {
      return axios(Method.get(link.slider)).then(response => {
        return response.data
      })
    }
  },
  banner: {
    get () {
      return axios(Method.get(link.banner)).then(response => {
        console.log('banner', 'get', response)
        return response.data
      })
    },
    create (files) {
      return axios(Method.post(link.banner, files)).then(response => {
        console.log('banner', 'create', response)
        return response
      })
      // return axios(Method.patch(link.banner))
    }
  },
  member: {
    get () {
      return axios(Method.get(link.member)).then(response => {
        console.log('member', 'get', response)
        return response.data
      })
    },
    create (data) {
      return axios(Method.post(link.member, data)).then(response => {
        return response
      })
    },
    edit (data) {
      const requestLink = link.member + data.member_id
      return axios(Method.patch(requestLink, data)).then(response => {
        return response
      })
    },
    delete (memberId) {
      const requestLink = link.member + memberId
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    }
  },
  content: {
    get () {
      return axios(Method.get(link.content)).then(response => {
        return response.data
      })
    },
    edit ({ title, content }) {
      const data = {
        key: title,
        values: Array(content)
      }
      return axios(Method.post(link.content, data)).then(response => {
        console.log(response)
      })
    }
  },
  admission: {
    get () {
      return axios(Method.get(link.admission)).then(response => {
        return response.data
      })
    }
  },
  single_file_upload: {
    link: link.single_file_upload,
    create (file) {
      const data = new FormData()
      data.append('upload', file)
      return axios(Method.post(link.single_file_upload, data)).then(response => {
        console.log('single_file_upload', 'create', response)
        return response
      })
    }
  }
}
