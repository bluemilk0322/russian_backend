const getBase64DataURI = require('dauria').getBase64DataURI;
const parseDataURI = require('dauria').parseDataURI;
const Promise = require('bluebird');

module.exports = function(){
  return function(hook){
    if(!hook.data.uri && hook.params.file){
      const file = hook.params.file;
      const uri = getBase64DataURI(file.buffer, file.mimetype);
      hook.data.uri = uri;
      hook.data.mimetype = file.mimetype;
      hook.data.fileBuffer = file.buffer;
      hook.data.filesize = file.buffer.length;
    }
    else if(hook.data.uri){
      const file = parseDataURI(hook.data.uri);
      hook.data.mimetype = file.MIME;
      hook.data.fileBuffer = file.buffer;
      hook.data.filesize = file.buffer.length;
    }
    return Promise.resolve(hook);
  };
};