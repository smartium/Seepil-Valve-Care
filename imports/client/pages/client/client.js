import './client.html';

Template.client.helpers({
  clientData() {
    return Meteor.users.findOne({_id: FlowRouter.getParam('id')})
  },

  valves() {
    return ClientsValves.find({owner: FlowRouter.getParam('id')})
  },

  getValve(valve) {
    return Valves.findOne({_id: valve});
  },

  getSite(site) {
    return Sites.findOne({_id: site});
  },

  valveCertificates(valve) {
    return Certificates.find({valve: valve}).count();
  }
});
