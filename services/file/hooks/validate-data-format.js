const Promise = require('bluebird');
const errors = require('@feathersjs/errors');

const ajvSchema = {
  properties: {
    uploader_id: {
      type: 'integer'
    },
  },
  additionalProperties: false,
};

module.exports = function () {
  return function (hook) {
    let result = null;
    switch(hook.method){
    case 'find': 
      result = hook.app.ajv.validate(ajvSchema, hook.params); break;
    default:
      hook.app.logger.debug('Unsupport method when validating file data');
      return Promise.reject(new errors.MethodNotAllowed('Unsupport method'));
    }
    if (result) {
      hook.app.logger.debug('File data validation passed');
      return Promise.resolve(hook);
    }
    hook.app.logger.debug('File data validation failed');
    return Promise.reject(new errors.BadRequest('Invalid file data format'));
  };
};
