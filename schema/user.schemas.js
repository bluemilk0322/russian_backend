module.exports = {
  input: {
    properties: {
      email: {type: 'string'},
      password: {type: 'string'},
      profile_pic: {
        properties: {
          file_id: {type: 'integer'},
          path: {type: 'string'},
          uri: {type: 'string'}
        }
      }
    },
    required: ['email', 'password']
  },
  output: {
    properties: {
      user_id: {type: 'integer'},
      email: {type: 'string'},
      password: {type: 'string', default: ''},
      profile_pic: {
        properties: {
          file_id: {type: 'integer'},
          path: {type: 'string'},
          uri: {type: 'string'}
        }
      },
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};