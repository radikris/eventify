/**
a sessionben bejelentkezett userid-hoz tartozó user
adatait módosítjuk az új username-mel (ha az != a régivel),
aztán pedig nextet hív
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    //TODO
    const UserModel = requireOption(objectrepository, "UserModel");

    if (typeof req.body.username !== "undefined" && req.body.username !== "") {
      UserModel.findOne({ _id: req.session.userid }, function (error, user) {
        if (error) {
          return next(error);
        }

        if (user.username !== "req.body.username") {
          user.username = req.body.username;
          user.save(function (error, result) {
            if (error) {
              return next(error);
            }
            console.log("saveusername");
            console.log(req.body.username);
            return next();
          });
        } else {
          return next();
        }
      });
    } else {
      return next();
    }
  };
};
