module.exports = {
  input: {
    properties: {
      name: {type: 'string'},
      position: {type: 'string'}, //職位
      teaching_lessons: {type: 'string'},
      email: {type: 'string'},
      telephone: {type: 'string'},
      type: {type: 'string'} // 專任/兼任/歷屆系主任/行政
    }
  },
  output: {
    properties: {
      member_id: {type: 'integer'},
      name: {type: 'string', default: ''},
      position: {type: 'string', default: ''}, //職位
      teaching_lessons: {type: 'string', default: ''},
      email: {type: 'string', default: ''},
      telephone: {type: 'string', default: ''},
      type: {type: 'string'}, // 專任/兼任/歷屆系主任/行政
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
}