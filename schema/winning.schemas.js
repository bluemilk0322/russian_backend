module.exports = {
  input: {
    properties: {
      category: {type: 'string'},
      year: {type: 'string'},
      prize_name: {type: 'string'},
      winner: {type: 'string'}
    }
  },
  output: {
    properties: {
      winner_id: {type: 'integer'},
      category: {type: 'string'},
      year: {type: 'string'},
      prize_name: {type: 'string'},
      winner: {type: 'string'},
      created_on: {type: ['string', 'object']},
      modified_on: {type: ['string', 'object']},
    }
  }
};