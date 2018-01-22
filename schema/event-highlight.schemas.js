module.exports = {
  input: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        file_id: {type: 'integer'},
        album_id: {type: 'integer'},
        path: {type: 'string'},
        uri: {type: 'string'},
        order: {type: ['integer', 'null']},
        description: {type: 'string'},
      },
      required: ['album_id']
    }
  },
  output: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        event_highlight_id: {type: 'integer'},
        file_id: {type: 'integer', default: 0},
        album_id: {type: 'integer', default: 0},
        uri: {type: 'string', default: ''},
        path: {type: 'string', default: ''},
        order: {type: 'integer'},
        description: {type: 'string', default: ''}
      },
      required: ['album_id']
    }
  },
  needPacking: {
    type: 'array',
    items: {
      properties: {
        file_id: {type: 'integer'},
        album_id: {type: 'integer'},
        uri: {type: 'string'},
        path: {type: 'string'},
        order: {type: 'integer'},
        description: {type: 'string'}
      }
    }
  },
  needUnpacking: {
    type: 'array',
    items: {
      properties: {
        event_highlight_id: {type: 'integer'},
        order: {type: 'integer'},
        description: {type: 'string'},
        album_id: {type: 'integer'},
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