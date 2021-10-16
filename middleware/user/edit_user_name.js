/**
a sessionben bejelentkezett userid-hoz tartozó user
adatait módosítjuk az új username-mel (ha az != a régivel),
aztán pedig nextet hív
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
