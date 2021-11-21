const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("static"));

app.use("/imagestore/", express.static("uploads"));

app.use(
  session({
    secret: "secret",
  })
);

require("./route/index")(app);

app.listen(3000, function () {
  console.log("Hello :3000");
});
