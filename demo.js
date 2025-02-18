const express = require("express");
const app = express();

const data = require("./dataList");

//  --- Access using local module ---
app.get("/dataList", (req, res) => {
  res.send(data);
});

app.get("/", (req, res) => {
  res.send("Welcome Node");
});
app.get("/profile", (req, res) => {
  res.send("hey from profile");
});

app.listen(3100, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("Server is running at " + 3100);
  }
});
