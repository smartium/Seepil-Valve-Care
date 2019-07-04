import './header.html';

Meteor.startup(()=>{
  $(".user-dropdown").dropdown();
});

Template.header.onRendered(()=> {
  $('.sidenav').sidenav();
  $(".user-dropdown").dropdown();
});

Template.header.helpers({
  logged() {
    return Meteor.userId();
  },

  userEmail() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address
    }
  },

  sites() {
    return Sites.find();
  },

  adminMenu() {
    return FlowRouter.getRouteName() == 'Admin' ? true : false;
  }
});

Template.header.events({
  'click #logout'(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
