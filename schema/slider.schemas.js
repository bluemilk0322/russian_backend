module.exports = {
  input: {
    properties: {
      name: {type: 'string'},
      link: {type: 'string'}
    }
  },
  output: {
    properties: {
      slider_id: {type: 'integer'},
      name: {type: 'string', default: ''},
      link: {type: 'string', default: ''},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
}