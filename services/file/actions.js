const Promise = require('bluebird');
const parseDataURI = require('dauria').parseDataURI;
const toBuffer = require('concat-stream');
const _ = require('lodash');
const debugCreate = require('debug')('service:file:actions:create');
const bufferToHash = require('../../utils/buffer-to-hash'); // eslint-disable-line no-unused-vars
const streamifier = require('streamifier');

// Some of codes are from https://github.com/feathersjs/feathers-blob/blob/master/src/index.js

const create = (data, params = {}) => {
  if(data.uri == null){
    debugCreate('Got null data, skipping.');
    return Promise.resolve({});
  }

  let { path, uri } = data;
  const { buffer } = parseDataURI(uri);

  let result = {
    uploader_id: data.uploader_id,
    filesize: data.filesize,
    path: data.path,
    is_image: data.is_image,
    image_alt: data.image_alt,
    image_width: data.image_width,
    image_height: data.image_height,
    original_filename: data.original_filename
  };

  let s3Params = _.cloneDeep(params);
  delete s3Params.transaction;

  debugCreate('Initial result object:');
  debugCreate(result);
  const bufferReadStream = streamifier.createReadStream(buffer);
  const modelWriteStream = this.Model.createWriteStream({
    key: path,
    params: s3Params
  });

  return new Promise((resolve, reject) => {
    bufferReadStream.on('error', reject);
    bufferReadStream.on('end', () => { // TODO: Checkout why modelWriteStream.on('end') didn't work.
      debugCreate('Readstream ended');
      resolve({
        [this.id]: path,
        uri,
        size: buffer.length
      });
    });    
    modelWriteStream.on('error', reject);
    bufferReadStream.pipe(modelWriteStream);
  })
    .then(() => {
      let _knex = this.knex('File');
      if(params.transaction) _knex = _knex.transacting(params.transaction);
      return _knex.insert(result);
    })
    .then(() => {
      let _knex = this.knex('File');
      if(params.transaction) _knex = _knex.transacting(params.transaction);
      return _knex.where({path: result.path}).limit(1).orderBy('upload_time', 'desc');
    })
    .then(_result => {
      debugCreate('File saved complete');
      debugCreate(_result);
      result.file_id = _result[0].file_id;
      result.upload_time = _result[0].upload_time;
      return Promise.resolve(result);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const find = params => {
  return this.knex('File').where(params);
};

const remove = (id, params) => { // eslint-disable-line no-unused-vars
  let filePathToRemove = null;
  return this.knex('File').where({file_id: id}).limit(1)
    .then((fileList) => {
      if(fileList.length > 0) filePathToRemove = fileList[0].path;
      if(filePathToRemove){
        return this.knex('File').where({path: filePathToRemove});
      }
      return Promise.resolve([]); // File not exists, do nothing.
    })
    .then(samePathFileList => {
      if(samePathFileList.length === 1){
        return new Promise((resolve, reject) => {
          this.Model.remove({
            key: filePathToRemove
          }, error => error ? reject(error) : resolve());
        });
      }
      return Promise.resolve();
    })
    .then(() => this.knex('File').where({file_id: id}).del())
    .catch(err => {
      return Promise.reject(err);
    });
};

const get = (id, params) => { // eslint-disable-line no-unused-vars
  const getPathOnly = _.get(params, 'getPathOnly');

  return this.knex('File').where({file_id: id}).limit(1)
    .then(fileList => {
      if (fileList.length === 0) return Promise.reject('File not found');
      if (getPathOnly) return Promise.resolve({ 
        path: fileList[0].path,
        file_id: fileList[0].file_id
      });
      const fileReadStream = this.Model.createReadStream({key: fileList[0].path});
      return new Promise((resolve, reject) => {
        fileReadStream
          .on('error', reject)
          .pipe(toBuffer(buffer => {
            return resolve({
              buffer: buffer,
              path: fileList[0].path,
              file_id: fileList[0].file_id
            });
          }));
      });
    });
};

module.exports = options => {
  if (!options) {
    throw new Error('feathers-blob-store: constructor `options` must be provided');
  }

  if (!options.Model) {
    throw new Error('feathers-blob-store: constructor `options.Model` must be provided');
  }

  this.Model = options.Model;
  this.knex = options.knex;
  this.id = options.id || 'id';

  return {find, remove, create, get};
};