/**
 lekér egy adott eventid-hoz tartozó event
 résztvevőit going/skip (két listába írja a paraméterbe)
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    //TODO
    res.locals.going = ["Kris", "Kristof", "krisz", "Chris"];
    res.locals.skip = ["Kris1", "chri$2"];

    return next();
  };
};
