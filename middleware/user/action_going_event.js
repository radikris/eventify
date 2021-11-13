/**
a user egy paraméterben kapott eventid eseményt going/skip-el
az adatbázisban
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const EventModel = requireOption(objectrepository, "EventModel");

    console.log("actiongoing");
    console.log(req.params.value);

    EventModel.findOne({ _id: req.params.eventid }, function (error, event) {
      if (error) {
        return next(error);
      }

      console.log(event);

      if (req.params.value === "true") {
        console.log("GOINGOL");

        var alreadyGoing = event.going.some(function (user) {
          return user.equals(req.session.userid);
        });

        if (alreadyGoing) {
          //nothing to do
          console.log("mar goingolt");
        } else {
          var currentlySkip = event.skip.some(function (user) {
            return user.equals(req.session.userid);
          });

          if (currentlySkip) {
            event.skip.pull(req.session.userid);
          }

          event.going.push(req.session.userid);
        }
      } else {
        console.log("SKIPPEL");

        var alreadySkip = event.skip.some(function (user) {
          return user.equals(req.session.userid);
        });

        if (alreadySkip) {
          console.log("mar skippelt");

          //nothing to do
        } else {
          var currentlyGoing = event.going.some(function (user) {
            return user.equals(req.session.userid);
          });

          if (currentlyGoing) {
            event.going.pull(req.session.userid);
          }

          event.skip.push(req.session.userid);
        }
      }

      event.save(function (err) {
        if (err) {
          return next(err);
        }
        return res.redirect("back");
      });
    });
  };
};
