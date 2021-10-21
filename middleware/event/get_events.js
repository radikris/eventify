/**
lekéri az összes event listáját, 
ha van paraméterben megadott query, azzal keres az eventek közt
és beleírja a paramsba ezt az események listáját 
*/

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
