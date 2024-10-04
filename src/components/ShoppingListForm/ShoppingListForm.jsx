//Imports go below here: 
import React, { useState } from 'react'
import axios from 'axios';
//Shopping List Form Component: 

function ShoppingListForm(props) {    
    //State for holding input values
    let [itemInput, setItemInput] = useState('')  //For Item name, max 80 characters
    let [quantityInput, setQuantityInput] = useState('') //For Item quantity, decimal required
    let [unitInput, setUnitInput] = useState(''); //For Unit, Max 20 characters

//Handle form submission
const handleSubmit = (event) => {
    event.preventDefault(); //Will prevent form from refreshing page

//Validation Step (required)
    if (itemInput === '' || quantityInput ==='') { 
        console.error('Both Item Name and Quantity are required fields.');
    }
    console.log(itemInput, quantityInput, unitInput);

    //Axios 'POST' request (name, quantity, unit)
    axios({
        method: 'POST',
        url: '/api/shoppingList',
        data : {
            name: itemInput,
            quantity: quantityInput, //Converts number into a usable decimal
            unit: unitInput //set to null if no unit provided
        }
    }).then(response => {
        console.log('Item added successfully!', response.data); //Success! response: data
        props.fetchShoppingList(); //Refreshes the shopping list
         //Clears input fields after submission

    //    props.map((x) => console.log(x.name))
      console.log('PROPS  ', props)

        setItemInput('');
        setQuantityInput('');
        setUnitInput('');
    }).catch(err => {
        console.error('Error occurred adding items', err); //Catch & Log Error
    });
};

return (
    <>
        <h2>Add Item to Shopping List</h2>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor="itemInput">Item (maximum of 80 characters):</label>
            <input
            id="itemInput"
            type='text'
            maxLength="80"
            onChange={(event) => setItemInput(event.target.value)}
            value={itemInput}
            />

            <label htmlFor="quantityInput">Quantity (Decimal Units Only):</label>
            <input 
            id="quantityInput"
            type='number'
            onChange={(event) => setQuantityInput(event.target.value)}
            value={quantityInput}
            />

            <label htmlFor="unitInput">Unit (Optional, max 20 characters):</label>
            <input
            id="unitInput"
            type="text"
            maxLength="20"
            onChange={(event) => setUnitInput(event.target.value)}
            value={unitInput}
            />

            <button type='submit'>Add Item</button>
        </form>
    </> 
  );

}
    export default ShoppingListForm;