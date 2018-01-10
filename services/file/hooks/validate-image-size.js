const Promise = require('bluebird');
const errors = require('@feathersjs/errors');
const debug = require('debug')('file:hook:validate-image-size');

module.exports = function(){
  return function(hook){
    if (Math.max(hook.data.image_width, hook.data.image_height) > 3000){
      debug(`File dimension is greater then 3000px. width: ${hook.data.image_width}, height: ${hook.data.image_height}.`);
      throw new errors.BadRequest('File dimension is greater then 3000px.');
    }
  };
};