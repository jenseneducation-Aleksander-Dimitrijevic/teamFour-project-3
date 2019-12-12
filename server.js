const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("public"));

const PORT = process.env.PORT || 4000;

// Routes
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});
app.get("/success", (req, res) => {
  res.render("success");
});

<<<<<<< HEAD
app.listen(port, () => console.log("Server is running..."));
=======
app.listen(PORT, () => console.log("Server is running..."));
>>>>>>> b07386e1e1e4e2fe6a9d900942ea9a470b99c1bf
