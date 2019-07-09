import './client.html';
import './client.scss';

Template.client.onRendered(()=> {
    $('.fixed-action-btn').floatingActionButton({
      // hoverEnabled: false
    });
    $('.collapsible').collapsible();
    $('.modal').modal();
});

Template.client.helpers({
  clientData() {
    return Meteor.users.findOne({_id: FlowRouter.getParam('id')})
  },

  valves() {
    return ClientsValves.find({owner: FlowRouter.getParam('id')})
  },

  sites() {
    return Sites.find({owner: FlowRouter.getParam('id')})
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

Template.client.events({
  'submit form'(e) {
    Meteor.call('insert.site', {
      owner: FlowRouter.getParam('id'),
      name: e.target.name.value,
      createdAt: new Date().valueOf()
    });
    Bert.alert({
      message: 'Site registered',
      type: 'success',
      style: 'fixed-bottom',
      icon: 'fa fa-check'
    });
  },

  'click .tdValve'(e) {
    FlowRouter.go(`/valve/certificates/${this._id}`)
  }
});
