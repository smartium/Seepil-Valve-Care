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
