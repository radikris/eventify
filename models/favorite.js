const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Favorite = db.model("Favorite", {
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

module.exports = Favorite;
