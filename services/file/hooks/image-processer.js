const _ = require('lodash');
const jimp = require('jimp');
const Promise = require('bluebird');
const errors = require('@feathersjs/errors');
const debug = require('debug')('service:file:image-processer');

module.exports = () => {
  const FIXED_COORD = 'height'; // height or width

  return hook => {
    if(!hook.data.is_image) {
      debug('This is not an image, skip it.');
      return Promise.resolve(hook);
    }
    if(!hook.data.crop) {
      debug('Crop coords not provided, skip it.');
      return Promise.resolve(hook);
    }
    if(!_.isNumber(hook.data.crop.x1) || !_.isNumber(hook.data.crop.x2) ||
       !_.isNumber(hook.data.crop.y1) || !_.isNumber(hook.data.crop.y2) ||
       !_.isNumber(hook.data.crop.width) || !_.isNumber(hook.data.crop.height))
      throw new errors.BadRequest('Invalid coordinate to crop.');

    const zoom = hook.data[`image_${FIXED_COORD}`] / hook.data.crop[FIXED_COORD];
    const crop_width = Math.abs(hook.data.crop.x1 - hook.data.crop.x2) * zoom;
    const crop_height = Math.abs(hook.data.crop.y1 - hook.data.crop.y2) * zoom;
    const crop_x = Math.min(hook.data.crop.x1, hook.data.crop.x2) * zoom;
    const crop_y = Math.min(hook.data.crop.y1, hook.data.crop.y2) * zoom;

    debug(`crop, x: ${crop_x}, y: ${crop_y}, width: ${crop_width}, height: ${crop_height}`);

    let image = null;
    return jimp.read(hook.data.fileBuffer)
      .then(_image => {
        image = _image;
        image = image.crop(crop_x, crop_y, crop_width, crop_height);
        hook.data.image_width = crop_width;
        hook.data.image_height = crop_height;

        image.getBufferAsync = Promise.promisify(image.getBuffer);
        image.getBase64Async = Promise.promisify(image.getBase64);
        return image.getBufferAsync(jimp.MIME_JPEG);
      })
      .then(fileBuffer => {
        debug('fileBuffer after crop: ');
        debug(fileBuffer);
        hook.data.fileBuffer = fileBuffer;
        return image.getBase64Async(jimp.MIME_JPEG);
      })
      .then(imageBase64 => {
        hook.data.uri = imageBase64;
        return Promise.resolve(hook);
      });
  };
};