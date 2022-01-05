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

let productInformation = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
  { id: 4, price: 400 },
]; 
app.get("/val", function (req, res) {
  
  res.send(productInformation);
});

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
