import './home.html';

Template.home.onRendered(()=> {
  Meteor.setTimeout(()=>{
    if (!Meteor.user()) {
      FlowRouter.go('/login');
    }
  },2000);
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
      class: 'blue-text',
      type: 'search',
      placeholder: 'Find valve by TAG or SERIAL',
      id: 'findValve'
    }
  }
});
