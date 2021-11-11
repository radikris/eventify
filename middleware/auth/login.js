/**
 * GET-nél nextet hív
 * ellenőrzi, hogy ha a POSTBAN user által form helyes-e, ha igen redirect /events, különben error
 * ha error van a paramsban, akkor a formnál ezt megjelenítjük
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  var userModel = requireOption(objectrepository, "UserModel");

  return function (req, res, next) {
    if (
      typeof req.body.password === "undefined" ||
      typeof req.body.email === "undefined"
    ) {
      return next();
    }

    userModel.findOne(
      {
        email: req.body.email,
      },
      function (err, result) {
        if (err || !result) {
          res.locals.error = "Cannot find user with this email!";
          return next();
        }

        //check password
        if (result.password !== req.body.password) {
          res.locals.error = "Wrong password!";
          return next();
        }

        //login is ok, save id to session
        req.session.userid = result._id;

        //redirect to / so the app can decide where to go next
        return req.session.save((err) => res.redirect("/events"));
      }
    );

    // res.locals.error = "Wrong credentials!";
    // return next();
  };
};
