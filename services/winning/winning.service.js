// Initializes the `winning` service on path `/api/winning`
const createService = require('feathers-knex');
const createModel = require('../../models/winning.model');
const hooks = require('./winning.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'Winning',
    id: 'winning_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/winning', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/winning');

  service.hooks(hooks(app));
};
