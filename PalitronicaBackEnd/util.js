
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
