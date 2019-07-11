import './home.html';

Template.home.onRendered(()=> {
  Meteor.setTimeout(()=>{
    if (!Meteor.user()) {
      FlowRouter.go('/login');
    }
    else {
      if (Meteor.user().profile.type == 'admin') {
        FlowRouter.go('/admin/clients');
      }
    }
  }, 2000);

  $('.tabs').tabs();
});

Template.home.helpers({
  valves() {
    return ClientsValves.find();
  }
});

Template.searchBox.onRendered(()=> {
  $('#findValve').focus();
});

Template.searchBox.helpers({
  // valvesIndex: () => ValvesIndex,
  clientValvesIndex: () => ClientsValvesIndex,

  getValveSite(site) {
    return Sites.findOne({_id: site}).name;
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
