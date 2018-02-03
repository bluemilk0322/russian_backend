export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'content/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ title = '', content = [] }) {
    return await this.instance.post(this.link, { title, content })
  }

  async edit ({ content_id, title = '', content = [] }) {
    const requestLink = this.link + content_id
    return await this.instance.patch(requestLink, { title, content })
  }

  async delete ({ content_id }) {
    const requestLink = this.link + content_id
    return await this.instance.delete(requestLink)
  }
}
