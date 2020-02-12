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
        type: user.type,
        lastname: user.lasName,
        jobRole: user.jobRole,
        sites: user.sites,
        client: user.client
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
      active: true,
      createdAt: {
        epoch: new Date().valueOf(),
        date: new Date()
      }
    });
  },

  'deactive.certificate'(_certificate) {
    let certificate = Certificates.findOne(_certificate);
    Certificates.update(
      {_id: certificate._id},
      {
        $set: {
          active: false
        }
      }
    );
  },

  'insert.site'(site) {
    Sites.insert(site);
  },

  'insert.client.valve'(valve) {
    ClientsValves.insert(valve);
  },

  'deactive.client.valve'(_valve) {
    let valve = ClientsValves.findOne(_valve);
    ClientsValves.update(
      {_id: valve._id},
      {
        $set: {
          active: false
        }
      }
    );
  }
});
