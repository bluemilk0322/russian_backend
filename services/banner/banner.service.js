// Initializes the `banner` service on path `/api/banner`
const createService = require('feathers-knex');
const createModel = require('../../models/banner.model');
const hooks = require('./banner.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    name: 'Banner',
    id: 'banner_id',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/api/banner', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/banner');

  service.hooks(hooks(app));
};
