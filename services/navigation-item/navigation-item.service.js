// Initializes the `navigation-item` service on path `/api/navigation-item`
const createService = require('feathers-knex');
const createModel = require('../../models/navigation-item.model');
const hooks = require('./navigation-item.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'NavigationItem',
    id: 'navigation_item_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/navigation-item', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/navigation-item');

  service.hooks(hooks(app));
};
