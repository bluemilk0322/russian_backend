module.exports = {
  input: {
    properties: {
      name: { type: 'string' },
      link: { type: 'string' },
      navigation_id: { type: 'integer' }
    },
    required: ['navigation_id']
  },
  output: {
    properties: {
      navigation_item_id: { type: 'integer' },
      navigation_id: { type: 'integer' },
      name: { type: 'string' },
      link: { type: 'string' },
      created_on: { type: ['string', 'object'] },
      modified_on: { type: ['string', 'object'] }
    }
  }
}
