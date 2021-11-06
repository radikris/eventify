/**
lekéri az összes event listáját, 
ha van paraméterben megadott query, azzal keres az eventek közt
és beleírja a paramsba ezt az események listáját 
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    let events = [
      {
        _id: "e1",
        title: "Dummy event#1",
        description: "Event description#1",
        date: new Date(),
        image:
          "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
      },
      {
        _id: "e2",
        title: "Dummy event#2",
        description:
          "Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay",
        date: new Date(),
        image:
          "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
      },
      {
        _id: "e3",
        title: "Dummy event#3",
        description: "Event description#3",
        date: new Date(2021, 09, 28, 3, 24),
        image:
          "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
      },
      {
        _id: "e4",
        title: "Dummy event#4",
        description:
          "Event description#4  replay Long Event replay Long Event replay Long Event",
        date: new Date(2021, 09, 30, 22, 22),
        image:
          "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
      },
      {
        _id: "e5",
        title: "Dummy event#5 dummy placeholder text",
        description:
          "Event description#5  replay Long Event replay Long Event replay Long Event",
        date: new Date(2021, 09, 30, 22, 22),
        image:
          "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
      },
    ];

    res.locals.events = events;

    if (
      typeof req.body.event_search !== "undefined" &&
      req.body.event_search !== null &&
      req.body.event_search.trim() !== ""
    ) {
      const searchphrase = req.body.event_search.toLowerCase();
      const filteredEvents = events.filter(
        (e) =>
          e.description.toLowerCase().includes(searchphrase) ||
          e.title.toLowerCase().includes(searchphrase)
      );

      events = typeof filteredEvents === "undefined" ? [] : filteredEvents;
    }

    res.locals.filtered_events = events;

    return next();
  };
};
