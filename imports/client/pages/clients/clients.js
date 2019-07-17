import './clients.html';

Template.clients.onRendered(()=> {
});

Template.clients.helpers({
  clients() {
    // return Meteor.users.find({'profile.type': 'client'});
    return GndUsers.find({'profile.type': 'client'});
  }
});

Template.clients.events({
  'click #client'(e) {
    FlowRouter.go(`/admin/client/${this._id}`);
  }
});
