const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Taxjar = require("taxjar");

const client = new Taxjar({
  apiKey: "e72f7b5c053bc64beff0d5c083bf7d8d",
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// axios.get('https://www.fakerestapi.com/datasets/api/v1/movie-details-dataset.json')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

let customerInformation = [
  { id: 1, name: "ABC" },
  { id: 2, name: "BCD" },
  { id: 3, name: "CDE" },
  { id: 4, name: "DEF" },
];

let productInformation = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
  { id: 4, price: 400 },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/user", function (req, res) {
  let priceOfItem = [];
  let total = 0;
  console.log(req.body.user_id);
  

  res.send({
    customer_name: "test",
    price_of_each_item: priceOfItem,
    grand_total: total,
  });
});


app.listen(3000, () => {
  console.log("app is working in 3000");
});
