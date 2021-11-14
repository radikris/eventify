const Schema = require("mongoose").Schema;
const db = require("../config/db");

const Event = db.model("Event", {
  title: String,
  description: String,
  date: Date,
  image: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  going: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  skip: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  isFavorite: Boolean,
});

module.exports = Event;
