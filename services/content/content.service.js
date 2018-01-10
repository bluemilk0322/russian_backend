// Initializes the `content` service on path `/api/content`
const createService = require('feathers-knex');
const createModel = require('../../models/content.model');
const hooks = require('./content.hooks');

module.exports = function (app) {
  const Model = createModel(app);

  const options = {
    name: 'Content',
    id: 'content_id',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/api/content', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/content');

  service.hooks(hooks(app));
};
