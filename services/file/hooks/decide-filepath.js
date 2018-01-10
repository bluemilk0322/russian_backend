const Promise = require('bluebird');
const mimeTypes = require('mime-types');
const path = require('path');
const bufferToHash = require('../../../utils/buffer-to-hash');
const debug = require('debug')('service:file:decide-filepath');

module.exports = function(){
  return function(hook){
    if(hook.data.fileBuffer == null){
      debug('Get null data, giving a special path.');
      hook.data.path = '/nulldata';
    }
    if(hook.data.path) {
      debug(`Path exists, no need to generate one. path=${hook.data.path}`);
      return Promise.resolve(hook);
    }
    
    const hash = bufferToHash(hook.data.fileBuffer);
    const ext = mimeTypes.extension(hook.data.mimetype);

    if(hook.data.pathPrefix) {
      debug(`Add prefix ${hook.data.pathPrefix} to path`);
      hook.data.path = path.join(hook.data.pathPrefix, `${hash}.${ext}`);
    }
    else hook.data.path = `${hash}.${ext}`;
    debug(`Generated path=${hook.data.path}`);
    return Promise.resolve(hook);
  };
};