import axios from 'axios'

const root = 'http://192.168.88.204:3030/api/'

const link = {
  navigation: root + 'navigation/',
  navigationItem: 'navigation-item',
  slider: root + 'slider',
  carousel: root + 'carousel',
  member: root + 'member',
  content: root + 'content',
  admission: root + 'admission',
  banner: root + 'banner',
  winning: root + 'winning',
  news: root + 'news',
  file: root + 'file',
  user: root + 'user'
}

class method {
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

function getBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export const api = {
  navigation: {
    get () {
      return axios(method.get(link.navigation)).then(response => {
        console.log('navigation', 'get', response)
        return response.data
      })
    },
    search ({ navigationId }) {
      const requestLink = link.navigation + '/' + navigationId
      return axios(method.get(requestLink)).then(response => {
        console.log('navigation', 'search', response)
        return response.data
      })
    },
    create ({ name }) {
      const data = {
        name: name
      }
      console.log(name)
      return axios(method.post(link.navigation, data)).then(response => {
        console.log('navigation', 'create', response)
        return response
      })
    },
    edit ({ navigation_id, newName }) {
      const data = {
        navigation_id: navigation_id,
        name: newName
      }
      return axios(method.post(link.navigation, data)).then(response => {
        console.log('navigation', 'edit', response)
        return response
      })
    },
    delete ({ navigationId }) {
      const requestLink = link.navigation + navigationId
      console.log(requestLink)
      return axios(method.delete(requestLink)).then(response => {
        console.log('navigation', 'delete', response)
        return response
      })
    }
  },
  slider: {
    get () {
      return axios(method.get(link.slider)).then(response => {
        return response.data
      })
    }
  },
  banner: {
    get () {
      return axios(method.get(link.banner)).then(response => {
        console.log('banner', 'get', response)
        return response.data
      })
    },
    create (fileList) {
      return getBase64(fileList).then(base64Files => {
        const data = {
          uri: base64Files
        }
        return axios(method.post(link.banner, Array(data))).then(response => {
          return console.log(response)
        })
      })
    }
  },
  member: {
    get () {
      return axios(method.get(link.member)).then(response => {
        return response.data
      })
    }
  },
  content: {
    get () {
      return axios(method.get(link.content)).then(response => {
        return response.data
      })
    },
    edit ({ title, content }) {
      const data = {
        key: title,
        values: Array(content)
      }
      return axios(method.post(link.content, data)).then(response => {
        console.log(response)
      })
    }
  },
  admission: {
    get () {
      return axios(method.get(link.admission)).then(response => {
        return response.data
      })
    }
  }
}
