/**
a sessionben bejelentkezett userid-hoz tartozó user
összes eventjét lekérdezzük és beírjuk a paraméter listába
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const EventModel = requireOption(objectrepository, "EventModel");
    const UserModel = requireOption(objectrepository, "UserModel");

    EventModel.find(
      { user_id: req.session.userid },
      function (err, userevents) {
        if (err) {
          return next(err);
        }

        UserModel.findOne(
          { _id: req.session.userid },
          function (err, currentuser) {
            if (err) {
              return next(err);
            }

            if (typeof user !== null) {
              res.locals.user_events = userevents;
              res.locals.user = currentuser;
              return next();
            }
          }
        );
      }
    );
  };
};
