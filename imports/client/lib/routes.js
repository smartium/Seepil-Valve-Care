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
  name: 'Valves Manufacturers'
});

FlowRouter.route( '/admin/valves', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'valves' } );
  },
  name: 'Valves'
});

FlowRouter.route( '/admin/valve/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'valve' } );
  },
  name: 'Valve'
});

FlowRouter.route( '/admin/clients', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'clients' } );
  },
  name: 'Clients'
});

FlowRouter.route( '/admin/client/:id', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'client' } );
  },
  name: 'Client'
});

FlowRouter.route( '/admin/client/sites', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'sites' } );
  },
  name: 'Client Sites'
});

FlowRouter.route( '/admin/client/users', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'users' } );
  },
  name: 'Client Users'
});

FlowRouter.route( '/admin/client/valves', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'users' } );
  },
  name: 'Client Valves'
});

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
