/**
a sessionben bejelentkezett userid-hoz tartozó user
összes favoritelt eventjét lekérdezzük és beírjuk a paraméter listába
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const FavoriteModel = requireOption(objectrepository, "FavoriteModel");

    FavoriteModel.find(
      { user_id: req.session.userid },
      function (err, favorites) {
        if (err) {
          return next(err);
        }
        res.locals.favorites = favorites;
        return next();
      }
    );
  };
};
