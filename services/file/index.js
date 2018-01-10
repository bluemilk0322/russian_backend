// Initializes the `file` service on path `/file`
const s3BlobStore = require('s3-blob-store');
const fsBlobStore = require('fs-blob-store');
const path = require('path');
const AWS = require('aws-sdk');
const actions = require('./actions');
const hooks = require('./hooks');
const createModel = require('../../models/file.model');

module.exports = function () {
  const app = this;
  createModel(app);
  
  const storeType = app.get('staticFileStore').type;
  let blobServiceModel = null;
  switch(storeType){
  case 'fs': {
    let staticFileStorePath = app.get('staticFileStore').rootDir; 
    if(staticFileStorePath === '')
      staticFileStorePath = path.join(__dirname, '..', '..', '..', 'public');
    blobServiceModel = fsBlobStore(staticFileStorePath); break;
  }
  case 's3': {
    const s3 = new AWS.S3({
      accessKeyId: app.get('staticFileStore').AWSaccessKeyId,
      secretAccessKey: app.get('staticFileStore').AWSsecretAccessKey,
    });
    blobServiceModel = s3BlobStore({
      client: s3,
      bucket: app.get('staticFileStore').AWSS3BucketName,
    });
  }
  }

  const options = {
    name: 'file',
    Model: blobServiceModel,
    id: 'path',
    knex: app.knex
  };

  // Initialize our service with any options it requires
  app.use('/api/file', actions(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/file');

  service.hooks(hooks);
};
