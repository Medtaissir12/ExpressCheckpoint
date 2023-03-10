const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const checkTime = require("./middleware");
app.use(checkTime);
app.use(express.static("public"));
app.use(express.static("public/views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
