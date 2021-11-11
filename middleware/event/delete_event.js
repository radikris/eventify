/**
 kitöröl egy eventet (eventid) 
 és redirectel a /profilera
 */

const requireOption = require("../requireOption");

module.exports = function (objectrepository) {
  return function (req, res, next) {
    console.log("igendelete");
    const EventModel = requireOption(objectrepository, "EventModel");

    EventModel.deleteOne({ _id: req.params.eventid }, function (err, event) {
      console.log(req.params.eventid);
      console.log(event);

      if (err) {
        return next(err);
      }
      return res.redirect("/profile");
    });
  };
};
