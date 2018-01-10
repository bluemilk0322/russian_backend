// Initializes the `news` service on path `/api/news`
const createService = require('feathers-knex');
const createModel = require('../../models/news.model');
const hooks = require('./news.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'News',
    id: 'news_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/news', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/news');

  service.hooks(hooks(app));
};
