/**
 *
 * GET-nél nextet hív
 * ellenőrzi, hogy ha a POSTBAN user által form helyes-e, ha igen redirect /events, különben error
 * ha error van a paramsban, akkor a formnál ezt megjelenítjük
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log(req.body.password);
    console.log(req.body.email);
    console.log(req.body.password_confirm);

    if (
      typeof req.body.password === "undefined" ||
      req.body.password === "" ||
      typeof req.body.email === "undefined" ||
      req.body.email === "" ||
      typeof req.body.password_confirm === "undefined" ||
      req.body.password_confirm === ""
    ) {
      return next();
    } else {
      req.session.userid = "userid";
      return req.session.save((err) => res.redirect("/events"));
    }
  };
};
