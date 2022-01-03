const e = require("express");

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

  function getCustomerInformation(customerInformation,id){
      let customerSelected = customerInformation.filter(data=>{
        if(data.id===id)
        return data;
      })
      if(customerSelected.length == 0){
          return -1
      }else{
        return customerSelected[0].name;
      }
  }

  
  module.exports = {
      getCustomerInformation:getCustomerInformation
  }
  //const customerName = getCustomerInformation(customerInformation,1);
  //console.log(customerName)