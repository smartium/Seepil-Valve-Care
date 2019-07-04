import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './imports';



import './main.html';

// Meteor.startup(()=>{
//   Tracker.autorun(() => {
//     if (!Meteor.user()) {
//       FlowRouter.go('/login');
//       console.log('Logged OUT\n');
//       console.log(Meteor.user());
//       console.log('--------');
//       console.log(Meteor.userId());
//     }
//     else {
//       console.log('Logged IN\n');
//       console.log(Meteor.user());
//       console.log('--------');
//       console.log(Meteor.userId());
//     }
//   });
// });
