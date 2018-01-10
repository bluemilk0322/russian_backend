const { authenticate } = require('@feathersjs/authentication').hooks;
const _ = require('lodash');
const commonHooks = require('feathers-hooks-common');
const schema = require('../../schemas/content.schemas');

module.exports = app => ({
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('created_on', 'modified_on'),
      async hook => {
        let data = commonHooks.getItems(hook);
        if(_.isString(data.key)) await hook.service.remove(null, {query: {key: data.key}}); // Replace content by new one.
        return hook;
      },
      hook => {
        let data = commonHooks.getItems(hook);
        let newData = data.values.map(d => ({key: data.key, value: d}));
        commonHooks.replaceItems(hook, newData);
        return hook;
      }
    ],
    update: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on') ],
    patch: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      commonHooks.validateSchema(schema.output, app.ajv),
    ],
    find: [
      hook => {
        let result = commonHooks.getItems(hook);
        if(result.length > 0){
          result = _.groupBy(result, 'key');
          for (const key in result){
            result[key] = result[key].map(r => r.value);
          }
          commonHooks.replaceItems(hook, result);
        }
        return hook;
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
