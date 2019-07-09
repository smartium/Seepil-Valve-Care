import { Meteor }          from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import './gcloud_storage';

// const Documents = new FilesCollection({
//   debug: true,
//   collectionName: 'documents',
//   storagePath: () => {
//     return `${process.env.PWD}/public/uploads/documents`;
//   },
//   allowClientCode: true, // Disallow remove files from Client
//   onBeforeUpload: function (file) {
//     return true;
//   }
// });

var storagePath = null;

if (Meteor.isDevelopment) {
  storagePath = 'assets/app/uploads/uploadedFiles';
}
else {
  storagePath = '/var/www/valvecare/bundle/programs/server';
}

Documents = new FilesCollection({
  debug: false, // Set to true to enable debugging messages
  storagePath: storagePath,
  collectionName: 'documents',
  allowClientCode: false,
  onAfterUpload(fileRef) {
    // In the onAfterUpload callback, we will move the file to Google Cloud Storage
    _.each(fileRef.versions, (vRef, version) => {
      // We use Random.id() instead of real file's _id
      // to secure files from reverse engineering
      // As after viewing this code it will be easy
      // to get access to unlisted and protected files
      const filePath = 'documents/' + (Random.id()) + '-' + version + '.' + fileRef.extension;
      // Here we set the neccesary options to upload the file, for more options, see
      // https://googlecloudplatform.github.io/gcloud-node/#/docs/v0.36.0/storage/bucket?method=upload
      const options = {
        destination: filePath,
        resumable: true
      };

      bucket.upload(fileRef.path, options, (error, file) => {
        bound(() => {
          let upd;
          if (error) {
            console.error(error);
          } else {
            upd = {
              $set: {}
            };
            upd['$set'][`versions.${version}.meta.pipePath`] = filePath;
            this.collection.update({
              _id: fileRef._id
            }, upd, (updError) => {
              if (updError) {
                console.error(updError);
              } else {
                // Unlink original files from FS
                // after successful upload to Google Cloud Storage
                this.unlink(this.collection.findOne(fileRef._id), version);
              }
            });
          }
        });
      });
    });
  },
  interceptDownload(http, fileRef, version) {
    let ref, ref1, ref2;
    const path = (ref= fileRef.versions) != null ? (ref1 = ref[version]) != null ? (ref2 = ref1.meta) != null ? ref2.pipePath : void 0 : void 0 : void 0;
    const vRef = ref1;
    if (path) {
      // If file is moved to Google Cloud Storage
      // We will pipe request to Google Cloud Storage
      // So, original link will stay always secure
      const remoteReadStream = getReadableStream(http, path, vRef);
      this.serve(http, fileRef, vRef, version, remoteReadStream);
      return true;
    }
    // While the file has not been uploaded to Google Cloud Storage, we will serve it from the filesystem
    return false;
  }
});

export default Documents;
