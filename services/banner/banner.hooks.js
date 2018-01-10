const _ = require('lodash');
const { authenticate } = require('@feathersjs/authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const errors = require('@feathersjs/errors');
const schema = require('../../schemas/banner.schemas');
const saveFile = require('../../utils/hooks/save-file');
const getFile = require('../../utils/hooks/get-file');

const fileSaveFields = {
  file: {
    outputIdFieldName: 'file_id',
    removeOriginalField: true
  }
};
const fileGetFields = {
  file_id: {
    outputIdFieldName: 'file',
    removeOriginalField: true
  }
};

module.exports = app => {
  const needPacking = app.ajv.compile(schema.needPacking);
  const needUnpacking = app.ajv.compile(schema.needUnpacking);
  const inputValid = app.ajv.compile(schema.input);
  const ensureOutputFormat = app.ajv.compile(schema.output);

  return {
    before: {
      all: [],
      find: [],
      get: [],
      create: [ authenticate('jwt'),
        commonHooks.when(hook => !inputValid(hook.data), () => Promise.reject(new errors.BadRequest('Data does not match schema', inputValid.errors))),
        hook => {
          let data = commonHooks.getItems(hook);
          if(needPacking(data)){
            data = data.map(fileObj => ({file: fileObj}));
            commonHooks.replaceItems(hook, data);
          }
          return hook;
        },
        saveFile(fileSaveFields),
        async hook => {
          await hook.service.remove(null); // Replace content by new one.
          return hook;
        },
      ],
      update: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on'), saveFile(fileSaveFields) ],
      patch: [ authenticate('jwt'), commonHooks.validateSchema(schema.input, app.ajv), commonHooks.setNow('modified_on'), saveFile(fileSaveFields) ],
      remove: [ authenticate('jwt') ]
    },

    after: {
      all: [ 
        getFile(fileGetFields)
      ],
      find: [
        commonHooks.when(hook => needUnpacking(hook.result),
          hook => {
            hook.result.forEach(r => {
              r.file_id = r.file.file_id;
              r.uri = r.file.uri;
              r.path = r.file.path;
              delete r.file;
            });
          }),
        hook => { ensureOutputFormat(hook.result); return hook; }
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
  };
};
