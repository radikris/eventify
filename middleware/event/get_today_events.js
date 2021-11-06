/**
A paraméterben kapott összes event közül
kiszűri a paraméternen kapott összes event közül a maiakat
és ezt visszaírja egy külön listába a paraméterek közé
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  return function (req, res, next) {
    res.locals.todays = res.locals.events.filter((a) => isToday(a.date));
    return next();
  };
};
