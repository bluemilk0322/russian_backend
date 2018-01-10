// Initializes the `member` service on path `/api/member`
const createService = require('feathers-knex');
const createModel = require('../../models/member.model');
const hooks = require('./member.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'Member',
    id: 'member_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/member', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/member');

  service.hooks(hooks(app));
};
