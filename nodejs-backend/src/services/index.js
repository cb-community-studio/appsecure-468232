const users = require("./users/users.service.js");
const reports = require("./reports/reports.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(reports);
  // ~cb-add-configure-service-name~
};
