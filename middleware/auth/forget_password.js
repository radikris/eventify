/**
 * ellenőrzi, hogy a user által email cím helyes-e, ha igen "uj jelszot elküldjük az emailre"
 * valójában nem történik ilyen, de elvileg már az lenne az új jelszó
 *  redirect /login, különben error
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    //TODO
    next();
  };
};
