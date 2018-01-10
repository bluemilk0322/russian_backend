const _ = require('lodash');
const debug = require('debug')('service:file:hooks:covert-path-to-absolute');
module.exports = () => {
  return hook => {
    if(hook.type !== 'after') throw new Error('This hook can only be used in after hook.');

    const urlPrefix = _.get(hook.app.get('staticFileStore'), 'URLPrefix');
    debug(`URLPrefix: ${urlPrefix}`);

    if(_.isArray(hook.result)){
      hook.result.forEach(result => {
        if(result.path) result.path = `${urlPrefix}${result.path}`;
      });
    }
    else{
      if(hook.result.path) hook.result.path = `${urlPrefix}${hook.result.path}`;
    }
    return Promise.resolve(hook);
  };
};