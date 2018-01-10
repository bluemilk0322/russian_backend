module.exports = {
  input: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        file_id: {type: 'integer'},
        uri: {type: 'string'}
      }
    }
  },
  output: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        banner_id: {type: 'integer'},
        file_id: {type: 'integer'},
        uri: {type: 'string'},
        path: {type: 'string'}
      }
    }
  },
  needPacking: {
    type: 'array',
    items: {
      properties: {
        file_id: {type: 'integer'},
        uri: {type: 'string'},
        path: {type: 'string'},
      }
    }
  },
  needUnpacking: {
    type: 'array',
    items: {
      properties: {
        banner_id: {type: 'integer'},
        file: {
          properties: {
            file_id: {type: 'integer'},
            uri: {type: 'string'},
            path: {type: 'string'},
          }
        }
      }
    }
  }
};