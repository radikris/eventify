/**
 * GET-nél nextet hív
 * ellenőrzi, hogy ha a POSTBAN user által form helyes-e, ha igen redirect /events, különben error
 * ha error van a paramsban, akkor a formnál ezt megjelenítjük
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    // if (
    //   typeof req.body.password === "undefined" ||
    //   typeof req.body.email === "undefined"
    // ) {
    //   return next();
    // }

    // if (req.body.password === "user_jelszo") {
    //   req.session.userid = "userid";
    //   return req.session.save((err) => res.redirect("/events"));
    // }

    // res.locals.error = "Hibás adatok!";
    return next();
  };
};
