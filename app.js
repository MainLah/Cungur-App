const express = require("express");

const app = express();
const port = 3000;

//setting ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to Cungur App",
  });
});

app.get("/:id", (req, res) => {
  res.render("home", {
    name: req.params.id,
  });
});

app.listen(port, () => {
  console.log(`Cungur App | listening at http://localhost:${port}`);
});
