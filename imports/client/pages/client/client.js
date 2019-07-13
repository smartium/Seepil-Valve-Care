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
    return Meteor.users.findOne({_id: FlowRouter.getParam('id')})
  },

  valves() {
    return ClientsValves.find({owner: FlowRouter.getParam('id')})
  },

  sites() {
    return Sites.find({client: FlowRouter.getParam('id')})
  },

  getValve(valve) {
    return Valves.findOne({_id: valve});
  },

  getSite(site) {
    return Sites.findOne({_id: site});
  },

  valveCertificates(valve) {
    return Certificates.find({valve: valve}).count();
  },

  users() {
    return Meteor.users.find({'profile.client': FlowRouter.getParam('id')})
  },

  clientCertificates() {
    return Certificates.find({owner: FlowRouter.getParam('id')});
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

  valveCertificates(valve) {
    return Certificates.find({valve: valve}).count();
  },

  getValveSite(site) {
    return Sites.findOne({_id: site}).name;
  },

  getSite(site) {
    return Sites.findOne({_id: site});
  },

  getValve(valve) {
    return Valves.findOne({_id: valve});
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
    return Sites.find({client: Meteor.user().profile.client});
  }
});
