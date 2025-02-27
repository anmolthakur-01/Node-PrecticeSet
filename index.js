const express = require("express");
const app = express();

app.get("/name", (req, res) => {
  res.send("Anmol Thakur");
});

app.get("/college", (req, res) => {
  res.send("BEANT COLLEGE OF ENGINEERING AND TECHNOLOGY");
});

app.get("/course", (req, res) => {
  res.send("BTech (Computer Science Engineering)");
});

// Start server
app.listen(1000);
