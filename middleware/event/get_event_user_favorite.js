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
      //check if event._id benne van-e az arrayban a req.session.user_idnek, ha igen event.isFavorite=true
      FavoriteModel.findOne(
        { user_id: req.session.userid },
        function (error, user) {
          if (error) {
            return next(error);
          }

          if (user) {
            res.locals.todays.forEach((event) => {
              var isFavorite = user.events.some(function (checkevent) {
                return checkevent.equals(event._id);
              });

              event.isFavorite = isFavorite;
            }); //FOREACH
          }
        }
      );
    }

    if (res.locals.filtered_events) {
      let promises = []; //megnézni, hogy az event favorite vagy nem

      FavoriteModel.findOne(
        { user_id: req.session.userid },
        function (error, user) {
          if (error) {
            return next(error);
          }

          res.locals.filtered_events.forEach((event) => {
            const isFavorite = user.events.some(function (checkevent) {
              return checkevent.equals(event._id);
            });

            event.isFavorite = isFavorite;
          });

          return next();
        }
      );

      // res.locals.filtered_events.forEach((event) => {
      //   promises.push(
      //     new Promise((resolve, reject) => {
      //       FavoriteModel.findOne(
      //         { user_id: req.session.userid },
      //         function (error, user) {
      //           //ENNEK NEM ITT KÉNE LENNIE
      //           if (error) {
      //             reject(error);
      //             return next(error);
      //           }

      //           if (user) {
      //             const isFavorite = user.events.some(function (checkevent) {
      //               return checkevent.equals(event._id);
      //             });

      //             event.isFavorite = isFavorite;
      //             //MULTIPLE ARRAY SHOULD WAIT return next();
      //           }

      //           resolve(user);
      //         }
      //       );
      //     })
      //   );
      // });

      // Promise.all(promises).then(function () {
      //   console.log("Minden eventre megnéztem, hogy isFavorite-e");
      //   return next();
      // });

      //only after for each finished and every mongoose call done
      // return next();
    } else {
      return next();
    }
  };
};
