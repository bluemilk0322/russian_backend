module.exports = {
  input: {
    properties: {
      title: {type: 'string'},
      content: {type: 'string'},
      type: {type: 'string'}
    }
  },
  output: {
    properties: {
      news_id: {type: 'integer'},
      title: {type: 'string', default: ''},
      content: {type: 'string', default: ''},
      type: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};