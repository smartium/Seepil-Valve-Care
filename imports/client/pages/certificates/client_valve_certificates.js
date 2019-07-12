import Documents from '../../../both/lib/documents';
import './client_valve_certificates.html';

formMode = null;
editCertificateID = new ReactiveVar('fkt9pQqHhWNX5b6Bh');

Template.clientValveCertificates.onRendered(()=>{
  console.log(FlowRouter.getParam('id'));
  $('.modal').modal();
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy'
  });
  $('.tooltipped').tooltip();
});

Template.clientValveCertificates.helpers({
  isAdmin() {
    return Meteor.user().profile.type == 'admin' ? true : false;
  },

  valve() {
    return ClientsValves.findOne({_id: FlowRouter.getParam('id')});
  },

  certificates() {
    return Certificates.find({valve: FlowRouter.getParam('id'), active: {$ne: false}});
  },

  getDocument(document) {
    return Documents.findOne({_id: document}).versions.original.meta.pipePath;
  },

  certificate() {
    return Certificates.find({_id: 'fkt9pQqHhWNX5b6Bh'}).fetch[0];
  }
});

Template.clientValveCertificates.events({
  'click #shareCert'(e) {
    new ClipboardJS('#shareCert');
    Bert.alert( 'Document link was copied to clipboard', 'info', 'growl-top-right', 'fas fa-clipboard' );
  },

  'submit form'(e) {
    e.preventDefault();

    console.log(FlowRouter.getParam('id'));
    console.log(e.target.certName.value);
    console.log(e.target.certDate.value);
    console.log(Documents.find().fetch()[Documents.find().count()-1]._id);

    Meteor.call(
      'add.certificate',
      ClientsValves.findOne({_id: FlowRouter.getParam('id')}).owner,
      FlowRouter.getParam('id'),
      Documents.find().fetch()[Documents.find().count()-1]._id,
      e.target.certName.value,
      e.target.certDate.value,
    )
  },

  'click #editCert'(e) {
    e.preventDefault();
    // editCertificateID.set(this._id);
    // console.log(editCertificateID.get());
    $('#editCertModal').modal('open');
  },

  'click #deactiveCert'(e) {
    e.preventDefault();
    Meteor.call('deactive.certificate', this._id);
  }
});
