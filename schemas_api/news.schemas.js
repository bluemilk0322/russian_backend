module.exports = {
  input: {
    properties: {
      title: {type: 'string'},
      content: {type: 'string'}
    }
  },
  output: {
    properties: {
      news_id: {type: 'integer'},
      title: {type: 'string', default: ''},
      content: {type: 'string', default: ''},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
}