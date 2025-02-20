const express = require("express");
const app = express();

const data = require("./postdata");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/sentdata", (req, res) => {
  let dataObj = {
    id: data.length + 1,
    name: req.body.name,
    tech: req.body.tech,
  };
  data.push(dataObj);
  res.send("successfully sent");
});

app.get("/getdata", (req, res) => {
  res.send(data);
});

app.listen(3000, (er) => {
  if (er) {
    console.log("error");
  } else {
    console.log(`Surver running at ${3000}`);
  }
});
