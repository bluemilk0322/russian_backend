const { authenticate } = require('@feathersjs/authentication').hooks
const commonHooks = require('feathers-hooks-common')
const schema = require('../../schemas/navigation.schemas')

module.exports = app => ({
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      commonHooks.validateSchema(schema.input, app.ajv),
      commonHooks.setNow('created_on', 'modified_on')
    ],
    update: [
      authenticate('jwt'),
      commonHooks.validateSchema(schema.input, app.ajv),
      commonHooks.setNow('modified_on')
    ],
    patch: [
      authenticate('jwt'),
      commonHooks.validateSchema(schema.input, app.ajv),
      commonHooks.setNow('modified_on')
    ],
    remove: [authenticate('jwt')]
  },

  after: {
    all: [
      commonHooks.fastJoin({
        joins: {
          subItems: () => {
            return async item => {
              item.subItems = await app.service('/api/navigation-item').find({
                query: { navigation_id: item.navigation_id },
                paginate: false
              })
            }
          }
        }
      }),
      commonHooks.validateSchema(schema.output, app.ajv)
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
})
