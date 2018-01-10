module.exports = {
  input: {
    properties: {
      key: {type: 'string'},
      values: {type: 'array'}
    }
  },
  output: {
    properties: {
      content_id: {type: 'integer'},
      key: {type: 'string'},
      values: {type: 'array'},
      value: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};