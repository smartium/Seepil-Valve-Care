// VER DEPOIS: https://github.com/meteor-useraccounts/flow-routing

import Swal from 'sweetalert2';

import './login.html';

Template.login.helpers({
  users() {
    return Meteor.users.find();
  }
});

Template.login.events({
  'submit form'(e) {
    e.preventDefault();
    $('.progress-bar').show();
    Meteor.loginWithPassword(e.target.email.value, e.target.password.value, (err)=> {
      if (err) {
        console.log(err);
        $('.progress-bar').hide();
        Bert.alert({
          message: 'User and/or password don\'t match',
          type: 'danger',
          style: 'fixed-bottom',
          icon: 'fa fa-exclamation-triangle'
        });
        $('#loginForm')[0].reset();
      }
      else {
        if (Meteor.user().roles.group[0] == 'admin') {
        FlowRouter.go('/admin/clients');
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
