// VER DEPOIS: https://github.com/meteor-useraccounts/flow-routing

import Swal from 'sweetalert2';

import './login.html';

Template.login.events({
  'submit form'(e) {
    e.preventDefault();
    Meteor.loginWithPassword(e.target.email.value, e.target.password.value, (err)=> {
      if (err) {
        console.log(err);
      }
      else {
        if (Meteor.user().roles.group[0] == 'admin') {
        FlowRouter.go('/admin');
        }
        else {
          FlowRouter.go('/');
        }
      }
    });
  },

  'click #signup'(e) {
    var user = {
      type: $('#usertype').val(),
      email: $('#email').val(),
      password: $('#password').val(),
      username: $('#username').val()
    };
    Meteor.call('insert.user', user);
  }
});
