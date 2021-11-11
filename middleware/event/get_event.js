/**
lekér egy adott eventid-hoz tartozó event részleteit
*/

const { Cookie } = require("express-session");
const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const EventModel = requireOption(objectrepository, "EventModel");

    const events = [];

    EventModel.findOne({ _id: req.params.eventid }, function (err, event) {
      console.log(event);
      if (typeof event !== null) {
        res.locals.event = event;
        return next();
      } else {
        return res.redirect("/events");
      }
    });
  };
};
