import '../both/lib/collections';
import Documents from '../both/lib/documents';
import { Roles } from 'meteor/alanning:roles'

Meteor.methods({
  'insert.user'(user) {
    let newUser = Accounts.createUser({
      email: user.email,
      password: user.password,
      username: user.username,
      profile: {
        type: user.type
      }
    });
    Roles.addUsersToRoles(newUser, [user.type], 'group');
  },

  'insert.valveBrand'(brand) {
    ValvesBrands.insert(brand)
  },

  'insert.valve'(valve) {
    Valves.insert(valve);
  },

  'remove.valve'(valve) {
    Valves.remove(valve);
  },

  'add.certificate'(_owner, _valve, _document, _number, _date) {
    Certificates.insert({
      owner: _owner,
      valve: _valve,
      document: _document,
      number: _number,
      date: _date,
      createdAt: {
        epoch: new Date().valueOf(),
        date: new Date()
      }
    });
  },

  'insert.site'(site) {
    Sites.insert(site);
  },

  'insert.client.valve'(valve) {
    ClientsValves.insert(valve);
  }
});
