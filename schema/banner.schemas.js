module.exports = {
  input: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        file_id: {type: 'integer'},
        path: {type: 'string'},
        uri: {type: 'string'},
        order: {type: 'integer'},
        title: {type: 'string'},
        content: {type: 'string'},
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
        path: {type: 'string'},
        order: {type: 'integer'},
        title: {type: 'string'},
        content: {type: 'string'},
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
        order: {type: 'integer'},
        title: {type: 'string'},
        content: {type: 'string'},
      }
    }
  },
  needUnpacking: {
    type: 'array',
    items: {
      properties: {
        banner_id: {type: 'integer'},
        order: {type: 'integer'},
        title: {type: 'string'},
        content: {type: 'string'},
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