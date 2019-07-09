// // https://medium.com/all-about-meteorjs/extending-meteor-users-300a6cb8e17f
//
// Accounts.onCreateUser(function(options, user) {
//   // Use provided profile in options, or create an empty object
//   user.profile = options.profile || {};
//   // Assigns first and last names to the newly created user object
//   user.profile.type = options.type;
//   // user.profile.username = options.username;
//
//   // user.profile.name = options.name;
//   // user.profile.firstname = options.firstname;
//   // user.profile.jobRole = options.jobRole;
//   // user.profile.lastname = options.lastname;
//   // user.profile.sites = options.sites;
//   // user.profile.client = options.client;
//   // user.profile.cnpj = options.cnpj;
//   // user.profile.location = options.location;
//   // user.profile.url = options.site;
//   // user.profile.config = {
//   //   themeDark: false
//   // };
//   // user.profile.active = true;
//   // Returns the user object
//   return user;
// });
