import './client.html';
import './client.scss';

filterSite = new ReactiveVar(null);

Template.client.onRendered(()=> {
    $('.fixed-action-btn').floatingActionButton({
      // hoverEnabled: false
    });
    $('.collapsible').collapsible();
    $('.modal').modal();
});

Template.client.helpers({
  clientData() {
    return GndUsers.findOne({_id: FlowRouter.getParam('id')})
  },

  valves() {
    return GndClientsValves.find({owner: FlowRouter.getParam('id')})
  },

  sites() {
    return GndSites.find({client: FlowRouter.getParam('id')})
  },

  getValve(valve) {
    return GndValves.findOne({_id: valve});
  },

  getSite(site) {
    return GndSites.findOne({_id: site});
  },

  valveCertificates(valve) {
    return GndCertificates.find({valve: valve, active: {$ne: false}}).count();
  },

  users() {
    return GndUsers.find({'profile.client': FlowRouter.getParam('id')})
  },

  clientCertificates() {
    return GndCertificates.find({owner: FlowRouter.getParam('id'), active: {$ne: false}});
  },

  getCertificateValve(valve) {
    return GndClientsValves.findOne({_id: valve})
  }
});

Template.client.events({
  'submit form'(e) {
    Meteor.call('insert.site', {
      client: FlowRouter.getParam('id'),
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
  },

  'click #deactiveValve'(e) {
    e.preventDefault();
    Meteor.call('deactive.client.valve', this._id);
  }
});

Template.admClientValvesSearchBox.onRendered(()=> {
  $('#findValve').focus();
});

Template.admClientValvesSearchBox.helpers({
  // valvesIndex: () => ValvesIndex,
  clientValvesIndex: () => ClientsValvesIndex,

  valves() {
    return GndClientsValves.find({owner: FlowRouter.getParam('id')})
  },

  valveCertificates(valve) {
    return GndCertificates.find({valve: valve}).count();
  },

  getValveSite(site) {
    return GndSites.findOne({_id: site}).name;
  },

  getSite(site) {
    return GndSites.findOne({_id: site});
  },

  getValve(valve) {
    return GndValves.findOne({_id: valve});
  },

  searchAttr() {
    return {
      class: 'indigo-text text-darken-4 search-input',
      type: 'search',
      placeholder: 'Find valve by TAG or SERIAL',
      id: 'findValve'
    }
  },

  sites() {
    return GndSites.find({client: Meteor.user().profile.client});
  }
});
