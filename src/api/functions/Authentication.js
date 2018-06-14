export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'authentication/'
  }

  async login ({ email, password, strategy }) {
    return await this.instance.post(this.link, { email, password, strategy })
  }
}
