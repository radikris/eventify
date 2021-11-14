/**
 *lekéri hogy a sessioben bejelentkezett  user favoritelte-e 
 a paraméterben megkapott lista eventekre, és true/false
ír a favorite propertynek a modellbe
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    //TODO
    //favorites, filtered_events, user_events, todays
    FavoriteModel = requireOption(objectrepository, "FavoriteModel");

    if (res.locals.todays) {
      res.locals.todays.forEach((event) => {
        //check if event._id benne van-e az arrayban a req.session.user_idnek, ha igen event.isFavorite=true
        FavoriteModel.findOne(
          { user_id: req.session.userid },
          function (error, user) {
            if (error) {
              return next(error);
            }

            if (user) {
              var isFavorite = user.events.some(function (checkevent) {
                return checkevent.equals(event._id);
              });

              event.isFavorite = isFavorite;
            }
          }
        );
      });
    }

    if (res.locals.filtered_events) {
      res.locals.filtered_events.forEach((event) => {
        //check if event._id benne van-e az arrayban a req.session.user_idnek, ha igen event.isFavorite=true
        FavoriteModel.findOne(
          { user_id: req.session.userid },
          function (error, user) {
            if (error) {
              return next(error);
            }

            if (user) {
              var isFavorite = user.events.some(function (checkevent) {
                return checkevent.equals(event._id);
              });

              event.isFavorite = isFavorite;
              return next();
            }
          }
        );
      });
    } else {
      return next();
    }
  };
};
