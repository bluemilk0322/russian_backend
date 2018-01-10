const { authenticate } = require('@feathersjs/authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const schema = require('../../schemas/user.schemas');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = app => ({
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('created_on', 'modified_on'), hashPassword() ],
    update: [ commonHooks.validateSchema(schema.input, app.ajv), authenticate('jwt'), commonHooks.setNow('modified_on'), hashPassword() ],
    patch: [ commonHooks.validateSchema(schema.input, app.ajv), authenticate('jwt'), commonHooks.setNow('modified_on'), hashPassword() ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password'),
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
