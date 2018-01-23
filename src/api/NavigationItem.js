import axios from 'axios'
import Method from './Method'

export default class {
  constructor (root) {
    this.link = root + 'navigation-item/'
  }

  get () {
    return null
  }

  create ({ navigation_id, name, content_key }) {
    return axios(Method.post(this.link, { navigation_id, name, content_key })).then(response => {
      console.log('navigationItem', 'create', response)
      return response
    })
  }

  edit ({ navigation_item_id, navigation_id, name, content_key }) {
    const requestLink = this.link + navigation_item_id
    return axios(Method.patch(requestLink, { navigation_id, name, content_key })).then(response => {
      return response
    })
  }

  delete ({ navigation_item_id }) {
    const requestLink = this.link + navigation_item_id
    return axios(Method.delete(requestLink)).then(response => {
      return response
    })
  }
}
