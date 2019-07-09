import './valves.html';

Template.valves.helpers({
});

Template.valvesSearchBox.onRendered(()=> {
  $('#findValve').focus();
  $('.modal').modal();
  $('select').formSelect();
});

Template.valvesSearchBox.helpers({
  valvesIndex: () => ValvesIndex,
  // clientValvesIndex: () => ClientsValvesIndex,

  searchAttr() {
    return {
      class: 'blue-text',
      type: 'search',
      placeholder: 'Find valve by MODEL or MANUFACTURER',
      id: 'findValve'
    }
  },

  brands() {
    return ValvesBrands.find({}, {sort: {name: 1}});
  }
});

Template.valvesSearchBox.events({
  'click #remove'(e) {
    Meteor.call('remove.valve', this._id);
  }
});
