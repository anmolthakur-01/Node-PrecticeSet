const express = require("express");
const app = express();

const data = require("./postdata");

app.use(express.urlencoded({ extended: false }));
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

app.post('/newdata', (req,res)=>{
  newObj={
    id: data.length+1,
    name: req.body.name,
    tech: req.body.tech
  }
  data.push(newObj);
  res.send("second data sent successfull")
})

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
