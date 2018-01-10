module.exports = {
  input: {
    properties: {
      email: {type: 'string'},
      password: {type: 'string'},
    },
    required: ['email', 'password']
  },
  output: {
    properties: {
      user_id: {type: 'integer'},
      email: {type: 'string'},
      password: {type: 'string', default: ''},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
}