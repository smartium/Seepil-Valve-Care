import './new.html';

Template.newValve.onRendered(()=> {
  $('select').formSelect();
});

Template.newValve.helpers({
  brands() {
    return ValvesBrands.find({}, {sort: {name: 1}});
  }
});

Template.newValve.events({
  'submit form'(e) {
    e.preventDefault();
    let valve = {
      manufacturer: e.target.manufacturer.value,
      model: e.target.model.value,
      orifice: e.target.orifice.value,
      fluid: e.target.fluid.value,
      dn: e.target.dn.value,
      class: e.target.class.value,
      joint: e.target.joint.value
    }
    checkValve = Valves.findOne({model: valve.model});
    if (checkValve) {
      Bert.alert({
        message: `Valve ${valve.model} is already registered`,
        type: 'danger',
        style: 'fixed-bottom',
        icon: 'fa fa-exclamation-triangle'
      });
    }
    else {
      Bert.alert({
        message: 'Valve registered',
        type: 'success',
        style: 'fixed-bottom',
        icon: 'fa fa-check'
      });
      Meteor.call('insert.valve', valve);      
      FlowRouter.go('/admin/valves');
    }
  }
});
