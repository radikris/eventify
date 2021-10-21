/**
A paraméterben kapott összes event közül
kiszűri a paraméternen kapott összes event közül a maiakat
és ezt visszaírja egy külön listába a paraméterek közé
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log("todaymw");
    return next();
  };
};
