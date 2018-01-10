// Initializes the `user` service on path `/user`
const createService = require('feathers-knex');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'User',
    id: 'user_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/user', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('/api/user');

  service.hooks(hooks(app));
};
