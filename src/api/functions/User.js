export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'user/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ email, password }) {
    return await this.instance.post(this.link, { email, password })
  }

  async edit ({ user_id, email, password }) {
    const requestLink = this.link + user_id
    return await this.instance.patch(requestLink, { email, password })
  }

  async delete ({ user_id }) {
    const requestLink = this.link + user_id
    return await this.instance.delete(requestLink)
  }
}
