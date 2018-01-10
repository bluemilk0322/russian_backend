const { authenticate } = require('@feathersjs/authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const schema = require('../../schemas/member.schemas');

module.exports = app => ({
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('created_on', 'modified_on') ],
    update: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on') ],
    patch: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      commonHooks.validateSchema(schema.output, app.ajv),
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
