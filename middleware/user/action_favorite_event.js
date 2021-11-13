/**
a user egy paraméterben kapott eventid eseményt favorite togglezik
az adatbázisban
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const FavoriteModel = requireOption(objectrepository, "FavoriteModel");

    FavoriteModel.findOne(
      { user_id: req.session.userid },
      function (error, user) {
        if (error) {
          return next(error);
        }

        if (!user) {
          var newFavorite = new FavoriteModel();
          newFavorite.user_id = req.session.userid;
          newFavorite.events = [];
          newFavorite.events.push(req.params.eventid);
          newFavorite.save(function (err, user) {
            if (err) {
              return next(err);
            }

            return res.redirect("back");
          });
        } else {
          var alreadyFavorite = user.events.some(function (event) {
            return event.equals(req.params.eventid);
          });
          if (alreadyFavorite) {
            user.events.pull(req.params.eventid);
          } else {
            user.events.push(req.params.eventid);
          }

          user.save(function (err, result) {
            if (err) {
              return next(err);
            }
            return res.redirect("back");
          });

          //DEADCODE
        }
      }
    );
  };
};
