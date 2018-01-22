module.exports = {
  input: {
    properties: {
      name: {type: 'string'},
      content_key: {type: 'string'},
      navigation_id: {type: 'integer'},
    },
    required: ['navigation_id']
  },
  output: {
    properties: {
      navigation_item_id: {type: 'integer'},
      navigation_id: {type: 'integer'},
      name: {type: 'string'},
      content_key: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};