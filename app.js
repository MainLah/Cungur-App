const express = require("express");

const app = express();
const port = 3000;

require("./utils/db");
const Cungur = require("./models/Cungur.js");

//setting ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to Cungur App",
  });
});

app.get("/home", (req, res) => {
  // const user = await Cungur.findOne({ username:  })
  console.log(req.body);
  // res.render("home", {
  //   name: req.params.id,
  // });
});

app.post("/home", (req, res) => {
  console.log(req);
});

app.listen(port, () => {
  console.log(`Cungur App | listening at http://localhost:${port}`);
});
