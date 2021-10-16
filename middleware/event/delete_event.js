/**
 kitöröl egy eventet (eventid) 
 és redirectel a /profilera
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    next();
  };
};
