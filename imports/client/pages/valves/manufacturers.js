import './manufacturers.html';

Template.manufacturers.onRendered(()=> {
  $('.modal').modal();
});

Template.manufacturers.helpers({
  brands() {
    return ValvesBrands.find({}, {sort: {name: 1}});
  }
});

Template.manufacturers.events({
  'submit form'(e) {
    e.preventDefault();
    var brand = {
      name: e.target.name.value,
      site: e.target.site.value,
      createdAt: {
        date: new Date(),
        epoch: new Date().valueOf()
      }
    }
    document. getElementById("manufacturersForm"). reset();
    $('.modal').modal('close');
    Meteor.call('insert.valveBrand', brand);
  }
});
