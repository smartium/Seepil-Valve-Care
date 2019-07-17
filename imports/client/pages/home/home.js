import './home.html';

import Swal from 'sweetalert2';

Template.home.onRendered(()=> {
  Meteor.setTimeout(()=>{
    if (!Meteor.user()) {
      FlowRouter.go('/login');
    }
    else {
      if (Meteor.user().profile.type == 'admin') {
        FlowRouter.go('/admin/clients');
      }
      else if (Meteor.user().profile.type == 'user') {
        FlowRouter.go('/user');
      }
      else {
        FlowRouter.go('/login');
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Only users accounts can access the platform.',
          footer: '<a href>Got it!</a>'
        })
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
  },

  certificatesCount(certificate) {
    return Certificates.find({valve: certificate}).count();
  }
});
