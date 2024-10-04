const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');




router.get('/', (req, res)=>{
    const sqlText = `SELECT * FROM "shoppingList" ORDER BY "name"; `
    pool.query(sqlText)
        .then ((result)=>{
          //  console.log('full result from server', result);
            console.log(`Rows property only in result from database`, result.rows)
            res.send(result.rows);
        
        })
        .catch((error)=>{
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); 

        });
  
})
router.post('/', (req, res)=>{
    const shoppingList = req.body;
    const sqlText = `INSERT INTO "shoppingList" ("name", "quantity", "unit") 
                        values ($1, $2, $3);`
    pool.query(sqlText, [shoppingList.name, shoppingList.quantity, shoppingList.unit])
        .then ((result)=>{
            console.log(`Added new shopping list to the database:`, shoppingList);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}:`, error);
            res.sendStatus(500); 
        })
    
    
    })


    module.exports = router;
