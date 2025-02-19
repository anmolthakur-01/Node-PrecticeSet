const express = require("express");
const app = express();

const Data = require("./dataList");

app.get("/", (req, res) => {
  res.send("Welcome Node");
});
app.get("/profile", (req, res) => {
  res.send("hey from profile");
});

//  Access using local module
app.get("/dataList", (req, res) => {
  res.send(Data);
});

//  Create request to filter students data using Query String
app.get("/singlestudent", (req, res) => {
  let studentquery = Data.filter((element) => {
    return element.name == req.query.name;
  });
  res.send(studentquery);
});

app.listen(3100, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("Server is running at " + 3100);
  }
});
