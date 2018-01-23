import axios from 'axios'
import Method from './Method'

export default class {
  constructor (root) {
    this.link = root + 'news/'
  }

  get () {
    return axios(Method.get(this.link)).then(response => {
      return response.data.data
    })
  }

  create ({ title, content }) {
    return axios(Method.post(this.link, { title, content })).then(response => {
      return response.data
    })
  }

  edit ({ news_id, title, content }) {
    const requestLink = this.link + news_id
    return axios(Method.patch(requestLink, { title, content })).then(response => {
      return response.data
    })
  }

  delete ({ news_id }) {
    if (news_id) {
      const requestLink = this.link + news_id
      return axios(Method.delete(requestLink)).then(response => {
        return response
      })
    } else {
      return null
    }
  }
}
