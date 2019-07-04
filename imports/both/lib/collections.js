import { Index, MinimongoEngine } from 'meteor/easy:search'

Valves = new Mongo.Collection('valves');
ValvesBrands = new Mongo.Collection('valvesBrands');
Clients = new Mongo.Collection('clients');
ClientsValves = new Mongo.Collection('clientsValves');
Sites = new Mongo.Collection('sites');
Certificates = new Mongo.Collection('certificates');

ValvesIndex = new Index({
  collection: Valves,
  fields: ['model', 'brand'],
  engine: new MinimongoEngine(),
  defaultSearchOptions: { limit: 20 }
})

ClientsValvesIndex = new Index({
  collection: ClientsValves,
  fields: ['tag', 'serial'],
  engine: new MinimongoEngine(),
  defaultSearchOptions: { limit: 10 }
})
