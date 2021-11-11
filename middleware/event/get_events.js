/**
lekéri az összes event listáját, 
ha van paraméterben megadott query, azzal keres az eventek közt
és beleírja a paramsba ezt az események listáját 
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    const EventModel = requireOption(objectrepository, "EventModel");

    let events = [];

    EventModel.find({}, function (err, allEvents) {
      events = allEvents;
      res.locals.events = events;

      if (
        typeof req.body.event_search !== "undefined" &&
        req.body.event_search !== null &&
        req.body.event_search.trim() !== ""
      ) {
        const searchphrase = req.body.event_search;
        const filteredEvents = EventModel.find(
          {
            $or: [
              { description: { $regex: searchphrase, $options: "i" } },
              { title: { $regex: searchphrase, $options: "i" } },
            ],
          },
          function (err, filteredEvents) {
            console.log(filteredEvents);
            if (err) {
              return next(err);
            }
            res.locals.filtered_events = filteredEvents;
            return next();
          }
        );
      } else {
        res.locals.filtered_events = events;
        return next();
      }
    });
  };
};
