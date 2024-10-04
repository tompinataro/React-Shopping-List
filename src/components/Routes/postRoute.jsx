const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET ROUTE HERE FROM NICK

// POST ROUTE from TxP
router.post(`/`, (req, res) => {
    // console.log(`We just got a letter in GET/list`, req.body)
    const sqlText = `
    INSERT INTO "shoppingList"
        ("itemName", "itemQuantity", "itemUnit")
	    VALUES
	    ($1, $2, $3);`    
    const sqlValues = [req.body.itemName, req.body.itemQuantity, req.body.itemUnit]
    pool.query(sqlText, sqlValues)

    .then(dbRes =>{
        res.sendStatus(201)
    })
    .catch(dbErr => {
        console.log(`Error in POST/list`, dbErr)
        res.sendStatus(500)
    })
})

// PUT Route

// DELETE Route

// PATCH Route

module.exports = router;