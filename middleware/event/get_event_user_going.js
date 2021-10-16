/**
 *lekéri hogy a sessioben bejelentkezett  user going/skip-e 
 a paraméterben megkapott lista eventekre, és true/false
ír a going propertynek a modellbe
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
