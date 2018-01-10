const _ = require('lodash');
const jimp = require('jimp');
const Promise = require('bluebird');
const debug = require('debug')('service:file:image-detecter');
const imageMIMEList = ['image/gif', 'image/jpeg', 'image/png'];

module.exports = function(){
  return function(hook){
    if(!hook.data.is_image) {
      debug('Missing hook.data.is_image, given default value \'false\'');
      hook.data.is_image = false; // Default value
    }
    debug(`Detect if this file is an image. MIMEType = ${hook.data.mimetype}`);
    if(hook.data.mimetype && _.indexOf(imageMIMEList, hook.data.mimetype.toLowerCase()) !== -1){
      debug('Image detected');
      hook.data.is_image = true;
    }
    if(hook.data.is_image){
      debug('Start read image');
      return jimp.read(hook.data.fileBuffer)
        .then(image => {
          debug('Image read complete');
          debug(image);
          hook.data.image_width = image.bitmap.width;
          hook.data.image_height = image.bitmap.height;
          return Promise.resolve(hook);
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
    return Promise.resolve(hook);
  };
};