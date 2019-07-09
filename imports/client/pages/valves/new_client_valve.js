import './new_client_valve.html';

Template.newClientValve.onRendered(()=> {
  $('select').formSelect();
});

Template.newClientValve.helpers({
  client() {
    return Meteor.users.findOne({_id: FlowRouter.getParam('id')});
  },

  valves() {
    return Valves.find();
  },

  sites() {
    return Sites.find({owner: FlowRouter.getParam('id')});
  }
});

Template.newClientValve.events({
  'submit form'(e) {
    e.preventDefault();
    let valve = {
      owner: FlowRouter.getParam('id'),
      valve: e.target.valve.value,
      site: e.target.site.value,
      tag: e.target.tag.value,
      serial: e.target.serial.value,
      certificateNumber: [],
      certificateDate: [],
      certificateFile: [],
      createdAt: new Date().valueOf()
    };
    Meteor.call('insert.client.valve', valve)
  }
});
