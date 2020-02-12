import './users.html';
Template.newClientUser.helpers({
  client() {
    client = GndUsers.findOne({_id: FlowRouter.getParam('id')});
    return client.username;
  }
});

Template.newClientUser.events({
  'submit form'(e) {
    e.preventDefault();
    let client = {
      type: 'user',
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.firstName.value,
      lastName: e.target.lastName.value,
      jobRole: e.target.jobRole.value,
      sites: [],
      client: GndUsers.findOne({_id: FlowRouter.getParam('id')})._id,
    };
    Bert.alert({
      message: 'User registered',
      type: 'success',
      style: 'fixed-bottom',
      icon: 'fa fa-check'
    });
    Meteor.call('insert.user', client);
    FlowRouter.go('/admin/clients');
  }
});
