/**
 * ha a user be van jelentkezve next, különben redirect /
 */

const requireOption = require("./requireOption");

module.exports = function (objectrepository, viewName) {
  return function (req, res, next) {
    if (
      typeof req.session.userid !== "undefined" &&
      req.session.userid === true
    ) {
      return next();
    }

    return res.redirect("/");
  };
};
