const express = require("express");
const app = express();

const Data = require("./dataList");

app.get("/", (req, res) => {
  res.send("Welcome Node");
});

//  Create request to get student data using local module
app.get("/dataList", (req, res) => {
  res.send(Data);
});

//  Create request to filter students data using Query String
app.get("/filterquery", (req, res) => {
  let studentquery = Data.filter((element) => {
    return element.name == req.query.name;
  });
  res.send(studentquery);
});

//  Create request to filter student data using URL params
app.get("/filterparams/:name", (req, res) => {
  let studentparams = Data.filter((el) => {
    return el.name == req.params.name;
  });
  res.send(studentparams);
});

app.listen(3100, (error) => {
  if (error) {
    console.log("Error");
  } else {
    console.log("Server is running at " + 3100);
  }
});
