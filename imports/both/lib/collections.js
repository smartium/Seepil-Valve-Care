import { Index, MinimongoEngine } from 'meteor/easy:search'

Valves = new Mongo.Collection('valves');
ValvesBrands = new Mongo.Collection('valvesBrands');
Clients = new Mongo.Collection('clients');
ClientsValves = new Mongo.Collection('clientsValves');
Sites = new Mongo.Collection('sites');
Certificates = new Mongo.Collection('certificates');

ValvesIndex = new Index({
  collection: Valves,
  fields: ['model', 'manufacturer'],
  engine: new MinimongoEngine(),
  defaultSearchOptions: { limit: 6 }
})

ClientsValvesIndex = new Index({
  collection: ClientsValves,
  fields: ['owner', 'tag', 'serial'],
  engine: new MinimongoEngine(),
  //defaultSearchOptions: { limit: -1 }
})

if (Meteor.isClient) {
  GndClientsValves = new Ground.Collection('groundClientsValves');
  GndClientsValves.observeSource(ClientsValves.find());

  GndCertificates = new Ground.Collection('groundCertificates');
  GndCertificates.observeSource(Certificates.find());

  GndSites = new Ground.Collection('groundSites');
  GndSites.observeSource(Sites.find());

  GndValves = new Ground.Collection('groundValves');
  GndValves.observeSource(Valves.find());

  GndValvesBrands = new Ground.Collection('groundValvesBrands');
  GndValvesBrands.observeSource(ValvesBrands.find());

  GndUsers = new Ground.Collection('groundUsers');
  GndUsers.observeSource(Meteor.users.find());
}
