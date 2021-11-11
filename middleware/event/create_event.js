/**
 * létrehoz egy új eventet, ha minden mező kitöltve (paramsban) és kép is van kiválasztva,
 *  redirectel a /events-re, ha nem akkor errort ír
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    var EventModel = requireOption(objectrepository, "EventModel");

    if (
      typeof req.body.event_name === "undefined" ||
      typeof req.body.event_description === "undefined" ||
      typeof req.body.event_date === "undefined" ||
      typeof req.file === "undefined"
    ) {
      return next();
    } else {
      var newEvent = new EventModel();
      newEvent.title = req.body.event_name;
      newEvent.description = req.body.event_description;
      newEvent.date = req.body.event_date;
      newEvent.image = req.file.filename;
      newEvent.going = [];
      newEvent.skip = [];
      newEvent.user_id = req.session.userid;
      newEvent.save(function (err, event) {
        //redirect to /events
        if (err) {
          return next(err);
        }
        return res.redirect("/events");
      });
    }

    // console.log(req.file); //TODO SAVE req.file.filename
    // next();
  };
};
