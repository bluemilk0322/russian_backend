export default class {
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
