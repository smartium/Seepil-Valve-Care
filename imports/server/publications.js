Meteor.publish('documents', function () {
  return Documents.find().cursor;
});

Meteor.publish('clients', ()=> {
  return Meteor.users.find();
});

// Meteor.publish('clientsValves', (owner)=> {
//   return ClientsValves.find({owner: owner}, {limit: 30});
// });

Meteor.publish('certificates', ()=> {
  return Certificates.find();
});

Meteor.publish('sites', ()=> {
  return Sites.find();
});

Meteor.publish('valves', ()=> {
  return Valves.find();
});

Meteor.publish('clientsValves', ()=> {
  return ClientsValves.find();
});

Meteor.publish('valvesBrands', ()=> {
  return ValvesBrands.find();
});
