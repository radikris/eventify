/**
 * létrehoz egy új eventet, ha minden mező kitöltve (paramsban) és kép is van kiválasztva,
 *  redirectel a /events-re, ha nem akkor errort ír
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log(req.file); //TODO SAVE req.file.filename
    next();
  };
};
