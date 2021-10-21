/**
a sessionben bejelentkezett userid-hoz tartozó user
összes eventjét lekérdezzük és beírjuk a paraméter listába
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    res.locals.user_events = [
      {
        _id: "e1",
        title: "Dummy event#1",
        description: "Event description#1",
        date: new Date(),
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

    next();
  };
};
