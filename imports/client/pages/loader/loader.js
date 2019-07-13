import './loader.html';

Template.loader.onRendered(()=> {
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
      // else if (Meteor.user().profile.type == 'client') {
      //   Swal.fire({
      //     type: 'error',
      //     title: 'Oops...',
      //     text: 'Only user accounts can access the platform.',
      //     footer: '<a href>Got it!</a>'
      //   })
      // }
    }
  }, 2000);
});
