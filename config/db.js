const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/DD38KG", { useNewUrlParser: true });

module.exports = mongoose;
