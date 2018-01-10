// Initializes the `admission` service on path `/api/admission`
const createService = require('feathers-knex');
const createModel = require('../../models/admission.model');
const hooks = require('./admission.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'Admission',
    id: 'admission_id',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/admission', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/admission');

  service.hooks(hooks(app));
};
