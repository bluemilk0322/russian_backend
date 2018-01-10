const commonHooks = require('feathers-hooks-common');
const imageDetecter = require('./image-detecter');
const converBufferToUri = require('./convert-buffer-to-uri');
const decideFilepath = require('./decide-filepath');
const validateDataFormat = require('./validate-data-format');
const convertPathToAbsolute = require('./convert-path-to-absolute');
const imageProcesser = require('./image-processer');
const validateImageSize = require('./validate-image-size');

module.exports = {
  before: {
    all: [],
    find: [validateDataFormat()],
    get: [],
    create: [converBufferToUri(), imageDetecter(),
      validateImageSize(), imageProcesser(),
      decideFilepath(), commonHooks.setNow('upload_time') ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ convertPathToAbsolute() ],
    find: [],
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
