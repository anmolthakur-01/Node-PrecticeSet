const express = require("express");
const app = express();

app.get("/name", (req, res) => {
  res.send("Anmol Thakur");
});

app.get("/college", (req, res) => {
  res.send("BEANT COLLEGE OF ENGINEERING");
});

app.get("/course", (req, res) => {
  res.send("BTech (Computer Science Engineering)");
});

// Start server
app.listen(3100, (error) => {
  if (error) {
    console.log("Error occur");
  } else {
    console.log("Server is running");
  }
});
