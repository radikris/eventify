/**
 *lekéri hogy a sessioben bejelentkezett  user favoritelte-e 
 a paraméterben megkapott lista eventekre, és true/false
ír a favorite propertynek a modellbe
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
