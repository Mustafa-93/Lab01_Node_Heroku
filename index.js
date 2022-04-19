const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

app.get("/", function (req, res) {
    res.render("index.html");
  });

app.get("/about", function (req, res) {
  res.render("about.html");
});

app.listen(process.env.PORT || 3000);
