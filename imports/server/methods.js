import '../both/lib/collections';
import Documents from '../both/lib/documents';

Meteor.methods({
  'insert.valveBrand'(brand) {
    ValvesBrands.insert(brand)
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
  }
});
