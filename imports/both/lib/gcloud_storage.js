gcloud = null;
gcs = null;
bucket = null;
bucketMetadata = null
Request = null;
bound = null;
Collections = {};

if (Meteor.isServer) {
  // use require() as "'import' and 'export' may only appear at the top level"
  const Random = require('meteor/random');
  const { Storage } = require ('@google-cloud/storage');
  if (Meteor.isDevelopment) {
    gcs = new Storage({
      projectId: 'valve-care-platform', // <-- Replace this with your project ID
      keyFilename: `${process.env.PWD}/imports/both/lib/gcloudstoragekey.json`  // <-- Replace this with the path to your key.json
    });
  }
  else {
    gcs = new Storage({
      projectId: 'valve-care-platform', // <-- Replace this with your project ID
      keyFilename: `/home/appuser/gcloudstoragekey.json`  // <-- Replace this with the path to your key.json
    });
  }
  bucket = gcs.bucket('valvecare-uploads'); // <-- Replace this with your bucket name
  bucket.getMetadata(function(error, metadata, apiResponse) {
    if (error) {
      console.error(error);
    }
    else {
      console.log('Google Cloud Connected');
    }
  });
  Request = Npm.require('request');
  bound = Meteor.bindEnvironment(function(callback) {
    return callback();
  });
}
