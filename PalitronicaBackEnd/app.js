const util = require('./util.js');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Taxjar = require("taxjar");
const cors = require("cors");
const port = 3001
const client = new Taxjar({
  apiKey: "e72f7b5c053bc64beff0d5c083bf7d8d",
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let customerInformation = [
  { id: 1, name: "ABC" },
  { id: 2, name: "BCD" },
  { id: 3, name: "CDE" },
  { id: 4, name: "DEF" },
];

app.post("/user", function (req, res) {
  let priceOfItem = [];
  let total = 0;
  console.log(req.body.user_id);
  
console.log('::: inside the post')
  res.send({
    customer_name: "test",
    price_of_each_item: priceOfItem,
    grand_total: total,
  });
});


app.listen(port, () => {
  console.log("app is working in "+port);
});
