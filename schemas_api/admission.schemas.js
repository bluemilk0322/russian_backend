module.exports = {
  input: {
    properties: {
      category: { type: 'string' },
      title: { type: 'string' },
      file_download: { type: 'string' }
    }
  },
  output: {
    properties: {
      admission_id: { type: 'integer' },
      category: { type: 'string' },
      title: { type: 'string' },
      file_download: { type: 'string' },
      created_on: { type: ['string', 'object'] },
      modified_on: { type: ['string', 'object'] }
    }
  }
}
