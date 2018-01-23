import axios from 'axios'
import Method from './Method'

export default class {
  constructor (root) {
    this.link = root + 'navigation/'
  }

  get () {
    return axios(Method.get(this.link)).then(response => {
      console.log('navigation', 'get', response)
      return response.data
    })
  }

  create ({ name }) {
    return axios(Method.post(this.link, { name })).then(response => {
      console.log('navigation', 'create', response)
      return response
    })
  }

  edit ({ navigation_id, name }) {
    const requestLink = this.link + navigation_id
    return axios(Method.patch(requestLink, { navigation_id, name })).then(response => {
      console.log('navigation', 'edit', response)
      return response
    })
  }

  delete ({ navigation_id }) {
    const requestLink = this.link + navigation_id
    return axios(Method.delete(requestLink)).then(response => {
      console.log('navigation', 'delete', response)
      return response
    })
  }
}
