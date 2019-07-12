import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Documents from '../imports/both/lib/documents';

import '../node_modules/animate.css/animate.min.css';

ClipboardJS = require('clipboard');

newUpload = new ReactiveVar();
// isAdmin = new ReactiveVar();

import './imports';

import './main.html';

Meteor.startup(()=>{
  $(".user-dropdown").dropdown();

  Tracker.autorun(() => {
    if (Meteor.user()) {
      subCert = Meteor.subscribe('certificates');
      subValv = Meteor.subscribe('valves');
      subBran = Meteor.subscribe('valvesBrands');
      subSite = Meteor.subscribe('sites');
      subClVa = Meteor.subscribe('clientsValves');
      subClie = Meteor.subscribe('clients');
      subDocu = Meteor.subscribe('documents');
    }
    else {
    }
  });
});

Template.uploadForm.onCreated(function () {
  this.currentUpload = new ReactiveVar(false);
});

Template.uploadForm.helpers({
  currentUpload: function () {
    return Template.instance().currentUpload.get();
  }
});

Template.uploadForm.events({
  'change #fileInput': function (e, template) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      var file = e.currentTarget.files[0];
      if (file) {
        var uploadInstance = Documents.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic',
        }, false);

        uploadInstance.on('start', function() {
          template.currentUpload.set(this);
        });

        uploadInstance.on('end', function(error, fileObj) {
          if (error) {
            window.alert('Error during upload: ' + error.reason);
          } else {
            console.log('mylog start');
            // console.log(fileObj);
            // console.log(fileObj._id);
            // console.log(fileObj.isPDF);
            newUpload.set(fileObj._id);
            console.log(newUpload.get());
            // alert(newUpload.get());
            console.log('mylog end');
            //window.alert('File "' + fileObj.name + '" successfully uploaded');
          }
          template.currentUpload.set(false);
        });

        uploadInstance.start();
      }
    }
  }
});
