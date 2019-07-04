import { Meteor } from 'meteor/meteor';
import Documents from '../imports/both/lib/documents';

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
