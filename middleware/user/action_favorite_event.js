/**
a user egy paraméterben kapott eventid eseményt favorite togglezik
az adatbázisban
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log("actionfav");

    return next();
  };
};
