/**
a sessionben bejelentkezett userid-hoz tartozó user
összes favoritelt eventjét lekérdezzük és beírjuk a paraméter listába
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const FavoriteModel = requireOption(objectrepository, "FavoriteModel");

    FavoriteModel.findOne({ user_id: req.session.userid })
      .populate("events")
      .exec(function (err, favorites) {
        if (err) {
          return next(err);
        }

        if (favorites) {
          if (favorites.events) {
            res.locals.favorites = favorites.events;
          } else {
            res.locals.favorites = [];
          }
        } else {
          res.locals.favorites = [];
        }

        return next();
      });
  };
};
