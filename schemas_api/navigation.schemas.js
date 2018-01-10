module.exports = {
  input: {
    properties: {
      name: { type: 'string' }
    }
  },
  output: {
    properties: {
      navigation_id: { type: 'integer' },
      name: { type: 'string' },
      created_on: { type: ['string', 'object'] },
      modified_on: { type: ['string', 'object'] },
      subItems: { type: 'array' }
    }
  }
}
