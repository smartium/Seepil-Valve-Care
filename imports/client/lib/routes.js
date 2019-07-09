FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'home' } );
  },
  name: 'Home'
});

FlowRouter.route( '/admin', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'admin' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/valves/manufacturers', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'manufacturers' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/valves', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'valves' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/valve/new', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'newValve' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/valve/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'valve' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'clients' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/client/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'client' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/new', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'newClient' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/sites', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'sites' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/sites/new/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'newClientSite' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/users', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'users' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/user/new/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'newClientUser' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/client/valves', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'users' } );
  },
  name: 'Admin'
});

FlowRouter.route( '/admin/clients/valves/new/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'newClientValve' } );
  },
  name: 'Admin'
});

// FlowRouter.route( '/admin/clients/sites/new', {
//   action: function() {
//     BlazeLayout.render( 'applicationLayout', { main: 'newClientSite' } );
//   },
//   name: 'Admin'
// });

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'login' } );
  },
  name: 'Login'
});

FlowRouter.route( '/valve/certificates/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'clientValveCertificates' } );
  },
  name: 'Valve Certificates'
});
