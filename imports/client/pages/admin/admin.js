import './admin.html';

Template.admin.onRendered(()=> {
  Meteor.setTimeout(()=>{
    if (Meteor.user()) {
      if (Meteor.user().profile.type != 'admin') {
        FlowRouter.go('/');
      }
    }
    else {
      FlowRouter.go('/login');
    }
  }, 2000);

});
