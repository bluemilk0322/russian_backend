import axios from 'axios'

import Admission from './functions/Admission'
import Album from './functions/Album'
import Banner from './functions/Banner'
import Content from './functions/Content'
import EventHighlight from './functions/EventHighlight'
import Member from './functions/Member'
import Navigation from './functions/Navigation'
import NavigationItem from './functions/NavigationItem'
import News from './functions/News'
import User from './functions/User'
import Video from './functions/Video'
import SingleFileUpload from './functions/SingleFileUpload'

const rootLink = (port) => 'http://192.168.88.204:' + port + '/api/'
const options = (rootLink) => {
  return {
    baseURL: rootLink
  }
}

class Api {
  constructor () {
    this.instance = axios.create(options(rootLink(3030)))
    this.lang = 'tw'
  }

  switchLanguage (language) {
    switch (language) {
      case 'tw':
        this.instance = axios.create(options(rootLink(3030)))
        this.lang = 'tw'
        break
      case 'en':
        this.instance = axios.create(options(rootLink(3031)))
        this.lang = 'en'
        break
      case 'ru':
        this.instance = axios.create(options(rootLink(3031)))
        break
      default:
        this.instance = axios.create(options(rootLink(3030)))
        this.lang = 'tw'
    }
  }

  get admission () {
    return new Admission(this.instance)
  }

  get album () {
    return new Album(this.instance)
  }

  get banner () {
    return new Banner(this.instance)
  }

  get content () {
    return new Content(this.instance)
  }

  get eventHighlight () {
    return new EventHighlight(this.instance)
  }

  get member () {
    return new Member(this.instance)
  }

  get navigation () {
    return new Navigation(this.instance)
  }

  get navigationItem () {
    return new NavigationItem(this.instance)
  }

  get news () {
    return new News(this.instance)
  }

  get user () {
    return new User(this.instance)
  }

  get video () {
    return new Video(this.instance)
  }

  get singleFileUpload () {
    return new SingleFileUpload(this.instance)
  }
}

export default Api
