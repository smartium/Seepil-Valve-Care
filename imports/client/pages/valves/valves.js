import './valves.html';

Template.valves.helpers({
});

Template.valvesSearchBox.onRendered(()=> {
  $('#findValve').focus();
});

Template.valvesSearchBox.helpers({
  valvesIndex: () => ValvesIndex,
  // clientValvesIndex: () => ClientsValvesIndex,

  searchAttr() {
    return {
      class: 'blue-text',
      type: 'search',
      placeholder: 'Find valve by MODEL',
      id: 'findValve'
    }
  }
});
