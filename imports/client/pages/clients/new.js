import './new.html';

Template.newClient.onRendered(()=> {
  $('select').formSelect();
});

Template.newClient.events({
  'submit form'(e) {
    e.preventDefault();
    let client = {
      type: 'client',
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.name.value,
      cnpj: e.target.cnpj.value,
      ie: e.target.ie.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
      url: e.target.url.value,
    };
    Bert.alert({
      message: 'Valve registered',
      type: 'success',
      style: 'fixed-bottom',
      icon: 'fa fa-check'
    });
    Meteor.call('insert.user', client);
    FlowRouter.go('/admin/clients');
  }
});
