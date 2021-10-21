/**
 * Using the template engine render the values into the template
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository, viewName) {
  return function (req, res) {
    console.log("rendermw");
    res.render(viewName, res.tpl);
  };
};
