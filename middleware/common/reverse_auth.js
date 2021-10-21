/**
 * ha a user be van jelentkezve next, különben redirect /
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository, viewName) {
  return function (req, res, next) {
    console.log("reverseauth");
    return next();
    // if (typeof req.session.userid !== "undefined") {
    //   return next();
    // }
    // return res.redirect("/");
  };
};
