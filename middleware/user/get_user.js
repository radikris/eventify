/**
a sessionben bejelentkezett userid-hoz tartozó user
összes adatát lekérjük
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
