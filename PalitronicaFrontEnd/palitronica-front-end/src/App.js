import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Form, FormGroup, Input } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import RemoveButton from '@material-ui/core/icons/Remove'
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Prev } from "react-bootstrap/esm/PageItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function App() {
  const [itemIds, setProductIdList] = useState([]);

  let y = [];
  useEffect(() => {
    Axios.get("http://localhost:3001/val").then((res) => {
      res.data.forEach((e) => {
        y.push({ label: e.id, value: e.id });
      });
      setProductIdList(y);
    });
  }, []);

  const classes = useStyles();
  const [customerId, setCustomerId] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [items, setItems] = useState([]);
  const [inputFields, setInputFields] = useState([
    { ItemId: "", ItemQuantity: "" },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️");

  let handleFruitChange = (e) => {
    setFruit(e.target.value);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { ItemId: "", ItemQuantity: "" }]);
  };
  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(setInputFields));
    console.log("on submit" + customerId);
    //console.log('printing input field '+inputFields[0].ItemId)
    inputFields.forEach((e) => console.log(e));
    setIsSubmit("true");
  };

  const validate = (values) => {
    const Error = {};
    // if (!values.customerId){
    //   error.customerId ="Username is required";
    // }
    // if (!values.ItemId){
    //   error.ItemId ="Item Id is required";
    // }
    // if (!values.ItemQuantity){
    //   error.ItemQuantity ="Item Quantity is required";
    // }
    return error;
  };

  return (
    <Container>
      <div className="form-container">
        <Form className={classes.root} onSubmit={handleSubmit}>
          {/* <div style="text-align:center;">
       <img src="/Img/shopping (2).jpg"></img>
       </div> */}
          <h1 className="text-center">Welcome!!!</h1>

          <FormGroup>
            <TextField
              name="CustomerId"
              id="customer_id"
              label="Customer Id"
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </FormGroup>
          <br />
          <FormGroup>
            {inputFields.map((setInputFields, index) => (
              <div key={index}>
                <select onChange={event => handleChangeInput(index,event)}>
                  <option value="⬇️ Select a product id ⬇️">
                    {" "}
                    -- Select a product id --{" "}
                  </option>
                  {/* Mapping through each fruit object in our fruits array
             and returning an option element with the appropriate attributes / values.
            */}
                  {itemIds.map((itemId) => (
                    <option key={itemId.label} value={itemId.value}>
                      {itemId.label} 
                    </option>
                  ))}
                </select>
                <TextField
                  name="ItemQuantity"
                  label="Item Quantity"
                  id="item_quantity"
                  varient="filled"
                  value={inputFields.ItemQuantity}
                  onChange={(event) => handleChangeInput(index, event)}
                />
                <IconButton onClick={() => handleRemoveFields(index)}>
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={() => handleAddFields()}>
                  <AddIcon />
                </IconButton>
              </div>
            ))}
          </FormGroup>
          {/* <FormGroup >
         <label>Item Id</label>
         <input type="text" id='item_id' placeholder='Item Id'></input>
       </FormGroup>
       <br/>
       <span>
       <FormGroup>
         <label>Item quantity</label>
         <input type="text" id='item_quantity' placeholder='Item Quantity' ></input>
       </FormGroup></span> */}

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}
export default App;
