// Initializes the `slider` service on path `/api/slider`
const createService = require('feathers-knex');
const createModel = require('../../models/slider.model');
const hooks = require('./slider.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'Slider',
    id: 'slider_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/slider', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/slider');

  service.hooks(hooks(app));
};
