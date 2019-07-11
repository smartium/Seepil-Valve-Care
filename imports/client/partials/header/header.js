import './header.html';

userDrop = new ReactiveVar(false);

Meteor.startup(()=>{
  Tracker.autorun(()=> {
    if (Meteor.userId()) {
      console.log('dropdown');
      userDrop.set(true);
      Meteor.setTimeout(()=> {
        // $(".user-dropdown").dropdown();
      }, 1000);
    }
  });
});

Template.header.onRendered(()=> {
  $('.sidenav').sidenav();
  $(".user-dropdown").dropdown();
});

Template.header.helpers({
  user() {
    return Meteor.user();
  },

  logged() {
    // return Meteor.userId();
    return userDrop.get();
  },

  userEmail() {
    if (Meteor.user()) {
      return Meteor.user().emails[0].address
    }
  },

  sites() {
    return Sites.find({client: Meteor.user().profile.client});
  },

  adminMenu() {
    return FlowRouter.getRouteName() == 'Admin' ? true : false;
  },

  userMenu() {
    return FlowRouter.getRouteName() == 'Home' ? true : false;
  },

  clientMenu() {
    return FlowRouter.getRouteName() == 'Client' ? true : false;
  }
});

Template.header.events({
  'click .logout'(e) {
    e.preventDefault();
    userDrop.set(false);
    Meteor.logout();
    FlowRouter.go('/login');
  },

  'click .filterSite'(e) {
    e.preventDefault();
    filterSite.set(this._id);
  }
});
