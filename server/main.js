// mongodb://seepilvalvecar01:Dev*1357@mongo71-farm76.kinghost.net:27017/seepilvalvecar01

import { Meteor } from 'meteor/meteor';
import Documents from '../imports/both/lib/documents';
import '../imports/server/accounts_creation';

import '../imports/both/lib/collections';
import '../imports/server/publications';
import '../imports/server/methods';

Meteor.startup(() => {
  ClientsValves.rawCollection().createIndex({ owner: 'text' });
  Certificates.rawCollection().createIndex({ owner: -1 });
  Certificates.rawCollection().createIndex({ valve: -1 });
  Certificates.rawCollection().createIndex({ document: -1 });
  // Documents.rawCollection().createIndex({ userId: -1 });
  Sites.rawCollection().createIndex({ client: -1 });
});

// var users = [
//       {name:"Normal User",email:"normal@example.com",roles:[]},
//       {name:"View-Secrets User",email:"view@example.com",roles:['view-secrets']},
//       {name:"Manage-Users User",email:"manage@example.com",roles:['manage-users']},
//       {name:"Admin User",email:"admin@example.com",roles:['admin']}
//     ];
//
// _.each(users, function (user) {
//   var id;
//
//   id = Accounts.createUser({
//     email: user.email,
//     password: "apple1",
//     profile: { name: user.name }
//   });
//
//   if (user.roles.length > 0) {
//     // Need _id of existing user record so this call must come
//     // after `Accounts.createUser` or `Accounts.onCreate`
//     Roles.addUsersToRoles(id, user.roles, 'default-group');
//   }
//
// });
