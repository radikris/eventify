/**
 *
 * GET-nél nextet hív
 * ellenőrzi, hogy ha a POSTBAN user által form helyes-e, ha igen redirect /events, különben error
 * ha error van a paramsban, akkor a formnál ezt megjelenítjük
 */
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  var UserModel = requireOption(objectrepository, "UserModel");

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
      UserModel.findOne(
        {
          email: req.body.email,
        },
        function (err, result) {
          if (err || result !== null) {
            res.locals.error = "Your email address is already registered!";
            return next();
          }
          //create user
          var newUser = new UserModel();
          newUser.email = req.body.email;
          newUser.password = req.body.password;
          newUser.save(function (err, user) {
            //redirect to /events
            req.session.userid = user._id;
            return req.session.save((err) => res.redirect("/events"));
          });
        }
      );
    }
  };
};
