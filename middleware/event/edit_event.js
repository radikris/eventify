/**
 * Editel egy eventet (eventid-t kapja), ha minden mező kitöltve (paramsban) és kép is van kiválasztva,
 *  redirectel a /events-re, ha nem akkor errort ír
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    //TODO
    var EventModel = requireOption(objectrepository, "EventModel");

    if (
      typeof req.body.event_name === "undefined" ||
      typeof req.body.event_description === "undefined" ||
      typeof req.body.event_date === "undefined" ||
      typeof req.body.event_date == null
    ) {
      console.log("valmai nem oke");
      return next();
    } else {
      console.log("Minden kitoltve");
      EventModel.findOne({ _id: req.params.eventid }, function (error, event) {
        event.title = req.body.event_name;
        event.description = req.body.event_description;
        event.date = req.body.event_date;

        event.save(function (error) {
          if (error) {
            return next(error);
          }
          return next();
        });
      });
    }
  };
};
