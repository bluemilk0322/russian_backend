// Initializes the `navigation` service on path `/api/navigation`
const createService = require('feathers-knex')
const createModel = require('../../models/navigation.model')
const hooks = require('./navigation.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'Navigation',
    id: 'navigation_id',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/api/navigation', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/navigation')

  service.hooks(hooks(app))
};
