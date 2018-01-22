module.exports = {
  input: {
    properties: {
      title: {type: 'string'},
      content: {type: 'string'},
    }
  },
  output: {
    properties: {
      album_id: {type: 'integer'},
      title: {type: 'string'},
      content: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
      images: {type: 'array'}
    }
  }
};