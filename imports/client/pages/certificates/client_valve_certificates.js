import './client_valve_certificates.html';

Template.clientValveCertificates.onRendered(()=>{
  console.log(FlowRouter.getParam('id'));
});

Template.clientValveCertificates.helpers({
  valve() {
    return ClientsValves.findOne({_id: FlowRouter.getParam('id')});
  },

  certificates() {
    return Certificates.find({valve: FlowRouter.getParam('id')});
  }
});
