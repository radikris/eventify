/**
a user egy paraméterben kapott eventid eseményt going/skip-el
az adatbázisban
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log("actiongoing");
    //TODO

    return next();
  };
};
