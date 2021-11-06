/**
 * ha a user nincs bejelentkezve redirect /, ha be van jelentkezve akkor next
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    // if (
    //   typeof req.session.userid === "undefined" ||
    //   req.session.userid !== true
    // ) {
    //   return res.redirect("/");
    // }

    return next();
  };
};
