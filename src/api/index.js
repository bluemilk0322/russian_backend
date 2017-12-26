export const api = {
  getAllStaff () {
    const link = '/staff'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    /*
    output = [
      {
        name: 'xxx',
        email: 'xxx',
        logo: 'xxx'
      }
    ]
    */
  },
  getStaff (id) {
    const link = '/staff/' + id
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    // no output
  },
  loginAuth ({ name, password }) {
    const link = '/staff/login'
    const method = {
      method: 'POST',
      body: {
        name: name,
        password: password
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Logged in",
      failed(wrong password): "Not logged in",
      failed(wrong account): "Staff not found",
    }
    */
  },
  addAccount ({ name, password, email }) {
    const link = '/staff/add'
    const method = {
      method: 'POST',
      body: {
        name: name,
        password: password,
        email: email
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Name is already used",
      failed(less input): "error"
    }
    */
  },
  updateEmail ({ name, email }) {
    const link = '/staff/email'
    const method = {
      method: 'PATCH',
      body: {
        name: name,
        email: email
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Error"
    }
    */
  },
  updatePassword ({ name, password, newpwd }) {
    const link = '/staff/passwd'
    const method = {
      method: 'PATCH',
      body: {
        name: name,
        password: password,
        newpwd: newpwd
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed(wrong pwd): "Password error",
      failed(less input): "No password"
    }
    */
  },
  deleteAccount (name) {
    const link = '/staff/del'
    const method = {
      method: 'DELETE',
      body: {
        name: name
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  },
  uploadFile ({ file, name }) {
    const link = '/upload'
    const method = {
      method: 'POST',
      body: {
        file: file,
        name: name
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "OK"
    }
    */
  },
  getAllSidebar () {
    const link = '/sidebar'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    /*
    output = [
      {
        title: "xxx",
        content: "xxx",
        creat_at: "xxx"
      },
      ...
    ]
    */
  },
  getSidebar (title) {
    const link = '/sidebar/search'
    const method = {
      method: 'POST',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: {
        title: "xxx",
        content: "xxx",
        create_at: "xxx"
      },
      failed: "Not found"
    }
    */
  },
  addSidebar ({ title, content }) {
    const link = '/sidebar/add'
    const method = {
      method: 'POST',
      body: {
        title: title,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Title is already used"
    }
    */
  },
  updateSidebar ({ title, newtitle = undefined, content }) {
    if (newtitle === undefined) {
      newtitle = title
    }

    const link = '/staff/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title,
        newtitle: newtitle,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Title not found"
    }
    */
  },
  deleteSidebar (title) {
    const link = '/sidebar/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  },
  getAllNavbar () {
    const link = '/navbar'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    /*
    output = [
      {
        title: "xxx",
        contenet: "xxx",
        create_at: "xxx"
      }
    ]
    */
  },
  getNavbar (title) {
    const link = '/navbar/search'
    const method = {
      method: 'POST',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: {
        title: "xxx",
        content: "xxx",
        created: "xxx"
      },
      failed: "Not found"
    }
    */
  },
  addNavbar ({ title, content }) {
    const link = '/navbar/add'
    const method = {
      method: 'POST',
      body: {
        title: title,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Title is already used"
    }
    */
  },
  updateNavbar ({ title, newtitle = undefined, content }) {
    if (newtitle === undefined) {
      newtitle = title
    }

    const link = '/navbar/modify'
    const method = {
      method: 'PATCH',
      body: {
        title: title,
        newtitle: newtitle,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Title not found"
    }
    */
  },
  deleteNavbar (title) {
    const link = '/navbar/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  }

}
