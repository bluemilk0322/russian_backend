module.exports = {
  input: {
    properties: {
      title: {type: 'string'},
      content: {type: 'string'},
      image: {
        properties: {
          file_id: {type: 'integer'},
          path: {type: 'string'},
          uri: {type: 'string'}
        }
      },
      link: {type: 'string'}
    }
  },
  output: {
    properties: {
      video_id: {type: 'integer'},
      title: {type: 'string'},
      content: {type: 'string'},
      image: {
        properties: {
          file_id: {type: 'integer'},
          path: {type: 'string'},
          uri: {type: 'string'}
        }
      },
      link: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};