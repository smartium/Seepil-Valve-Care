// VER DEPOIS: https://github.com/meteor-useraccounts/flow-routing

import './login.html';

Template.login.events({
  'submit form'(e) {
    e.preventDefault();
    Meteor.loginWithPassword(e.target.email.value, e.target.password.value);
    FlowRouter.go('/');
  }
});
