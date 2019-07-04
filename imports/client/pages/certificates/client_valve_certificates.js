import Documents from '../../../both/lib/documents';
import './client_valve_certificates.html';

Template.clientValveCertificates.onRendered(()=>{
  console.log(FlowRouter.getParam('id'));
  $('.modal').modal();
  $('.datepicker').datepicker({
    format: 'mm/dd/yyyy'
  });
});

Template.clientValveCertificates.helpers({
  valve() {
    return ClientsValves.findOne({_id: FlowRouter.getParam('id')});
  },

  certificates() {
    return Certificates.find({valve: FlowRouter.getParam('id')});
  },

  getDocument(document) {
    return Documents.findOne({_id: document}).versions.original.meta.pipePath;
  }
});

Template.clientValveCertificates.events({
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
  }
});
